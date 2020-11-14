import React, {useState, useEffect, useCallback} from 'react';
import Hero from './components/Hero';
import MenuBar from './components/MenuBar';
import "./assets/styles/App.scss"
import ThemeComponent from "./components/DrillDownMenues/ThemeComponent";
import IntroductionTemplate from "./components/DrillDownMenues/IntroductionTemplate";
import {db} from "./firebase"

function App() {
    const [dataset, setDataset] = useState({});
    const [isOpens, setIsOpens] = useState([false, false, true, true])
    const [currentData, setCurrentData] = useState(["", "", "", ""])
    useEffect(() => {
        (async () => {
            const initDataset: { [key: string]: { content: string, type: string }[] } = {}
            await db.collection('datasets').get().then(snapshots => {
                snapshots.forEach(doc => {
                    const id = doc.id;
                    initDataset[id] = doc.data() as { content: string, type: string }[];
                })
            })
            setDataset(initDataset["data"])
            setCurrentData([
                getRandomData(initDataset['data']['introductions']),
                getRandomData(initDataset['data']['introductions']),
                getRandomData(initDataset['data']['topics']),
                getRandomData(initDataset['data']['order'])
            ])
        })()
    }, [])

    const getRandomData = (data: { content: string, type: string }[]): string => {
        return data[Math.floor(Math.random() * data.length)]['content']
    }

    const handleOpen = useCallback((num: number) => {
        let opens = isOpens;
        opens[num] = !opens[num]
        setIsOpens(opens)
    }, [setIsOpens])

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
                <ThemeComponent heading={"話題"} isOpen={isOpens[2]} getRandomData={getRandomData}
                                content={currentData[2]} setOpen={handleOpen} uid={2}/>
            </div>
            <div id="junban">
                <Hero text={"順番決め"} bigger={true}/>
                <ThemeComponent heading={"話題"} isOpen={isOpens[3]} getRandomData={getRandomData}
                                content={currentData[3]} setOpen={handleOpen} uid={3}/>
            </div>
            <MenuBar/>
        </>
    );
}

export default App;
