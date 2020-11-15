import React, {useState, useEffect} from 'react';
import Hero from './components/Hero';
import MenuBar from './components/MenuBar';
import "./assets/styles/App.scss"
import ThemeComponent from "./components/DrillDownMenues/ThemeComponent";
import IntroductionTemplate from "./components/DrillDownMenues/IntroductionTemplate";
import {db} from "./firebase"
import template_kun from "./assets/img/template_kun.jpg"
import template_kun_circle from "./assets/img/template_kun_2_circle.png"

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
            {(Object.keys(dataset).length === 0) ? (
                <>
                    <h2>Now Loading...</h2>
                    <img src={template_kun} alt={"テンプレートくん"} className={"img"}/>
                </>
            ) : (
                <>
                    <Hero text={"テンプレくん"} bigger={true}/>
                    <MenuBar/>
                    <div id="template">
                        <Hero text={"自己紹介テンプレート"} bigger={false}/>
                        <IntroductionTemplate
                            heading={"流れ"}
                            isInit={true}
                            content={[currentData[0], currentData[1]]}
                            data={dataset['introductions']}/>
                    </div>
                    <div id="wadai">
                        <Hero text={"話題ガチャ"} bigger={false}/>
                        <ThemeComponent
                            heading={"話題"}
                            isInit={true}
                            content={currentData[2]}
                            data={dataset['topics']}
                        />
                    </div>
                    <div id="junban" className={"last"}>
                        <Hero text={"順番決め"} bigger={false}/>
                        <ThemeComponent
                            heading={"順序"}
                            isInit={true}
                            content={currentData[2]}
                            data={dataset['order']}
                        />
                    </div>
                    <p className={"copyrights"}>© 2020 テンプレくん <img className={"icon-copyrights"} src={template_kun_circle} alt={"テンプレくん"}/></p>
                </>
            )}
        </>
    );
}

export default App;
