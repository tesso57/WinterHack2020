import React from 'react';
import Hero from './components/Hero';
import RecallButton from './components/RecallButton';
import MenuBar from './components/MenuBar';
import "./assets/styles/App.scss"
import DrillDownMenu from "./components/DrillDownMenu";

function App() {
  return (
    <>
        <div className="space"/>
        <Hero text={"タイトル"} bigger={true} />
        <DrillDownMenu/>
        <div id="template">
          <Hero text={"自己紹介テンプレート"} bigger={true} />
        </div>
        <div id="wadai">
          <Hero text={"話題ガチャ"} bigger={true} />
        </div>
        <div id="junban">
          <Hero text={"順番決め"} bigger={true} />
        </div>
        <RecallButton/>
        <MenuBar/>
    </>
  );
}

export default App;
