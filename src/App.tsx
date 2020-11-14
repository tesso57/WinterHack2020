import React from 'react';
import Hero from './components/Hero';
import RecallButton from './components/RecallButton';
import MenuBar from './components/MenuBar';
import "./assets/styles/App.scss"
import IntroductionTemplate from "./components/DrillDownMenues/IntroductionTemplate";
import ThemeComponent from "./components/DrillDownMenues/ThemeComponent";

function App() {
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
            <RecallButton/>
            <MenuBar/>
        </>
    );
}

export default App;
