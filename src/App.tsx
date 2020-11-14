import React, {useState, useEffect} from 'react';
import Hero from './components/Hero';
import MenuBar from './components/MenuBar';
import "./assets/styles/App.scss"
import ThemeComponent from "./components/DrillDownMenues/ThemeComponent";
import IntroductionTemplate from "./components/DrillDownMenues/IntroductionTemplate";
import {db} from "./firebase"

function App() {
    const [dataset, setDataset] = useState({});

    useEffect(() => {
        (async () => {
            const initDataset: { [key: string]: { content: string, type: string }[] } = {}
            await db.collection('datasets').get().then(snapshots => {
                snapshots.forEach(doc => {
                    const id = doc.id;
                    initDataset[id] = doc.data() as { content: string, type: string }[];
                })
            })
            setDataset(initDataset)
        })()
    }, [])

    return (
        <>
            <div className="space"/>
            <Hero text={"タイトル"} bigger={true}/>
            <div id="template">
                <Hero text={"自己紹介テンプレート"} bigger={true}/>
                <IntroductionTemplate heading={"短い"} isInit={false} subHeading={"(1分以内)"}/>
                <IntroductionTemplate heading={"長い"} isInit={false} subHeading={"(1分以上)"}/>
            </div>
            <div id="wadai">
                <Hero text={"話題ガチャ"} bigger={true}/>
                <ThemeComponent heading={"話題"} isInit={true}/>
            </div>
            <div id="junban">
                <Hero text={"順番決め"} bigger={true}/>
                <ThemeComponent heading={"順番"} isInit={true}/>
            </div>
            <MenuBar/>
        </>
    );
}

export default App;
