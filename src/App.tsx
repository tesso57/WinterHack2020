import React, {useState, useEffect, useCallback} from 'react';
import Hero from './components/Hero';
import MenuBar from './components/MenuBar';
import "./assets/styles/App.scss"
import ThemeComponent from "./components/DrillDownMenues/ThemeComponent";
import IntroductionTemplate from "./components/DrillDownMenues/IntroductionTemplate";
import {db} from "./firebase"

function App() {
    const [dataset, setDataset] = useState({});
    const [currentData, setCurrentData] = useState(["", "", "", ""])
    useEffect(() => {
        (async () => {
            const initDataset = {}
            await db.collection('datasets').get().then(snapshots => {
                snapshots.forEach(doc => {
                    const id = doc.id;
                    initDataset[id] = doc.data();
                })
            })
            setDataset(initDataset['data'])
            setCurrentData([
                initDataset['data']['introductions'][Math.floor(Math.random() * initDataset['data']['introductions'].length)]['content'],
                initDataset['data']['introductions'][Math.floor(Math.random() * initDataset['data']['introductions'].length)]['content'],
                initDataset['data']['topics'][Math.floor(Math.random() * initDataset['data']['topics'].length)]['content'],
                initDataset['data']['order'][Math.floor(Math.random() * initDataset['data']['order'].length)]['content']
            ])
        })()
    }, [])
    return (
        <>
            <div className="space"/>
            <Hero text={"タイトル"} bigger={true}/>
            {(Object.keys(dataset).length === 0) ? (
                <h1>ローディング</h1>
            ) : (
                <>
                    <div id="template">
                        <Hero text={"自己紹介テンプレート"} bigger={true}/>
                        <IntroductionTemplate heading={"短い"} isInit={false} subHeading={"(1分以内)"}/>
                        <IntroductionTemplate heading={"長い"} isInit={false} subHeading={"(1分以上)"}/>
                    </div>
                    <div id="wadai">
                        <Hero text={"話題ガチャ"} bigger={true}/>
                        <ThemeComponent heading={"話題"} isInit={true}
                                        content={currentData[2]} dataName={'topics'}  data={dataset['topics']}/>
                    </div>
                    <div id="junban">
                        <Hero text={"順番決め"} bigger={true}/>
                        <ThemeComponent heading={"順序"} isInit={true}
                                        content={currentData[2]} dataName={'order'}  data={dataset['order']}/>
                    </div>
                </>
            )}
            <MenuBar/>
        </>
    );
}

export default App;
