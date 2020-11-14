import React from 'react';
import Hero from './components/Hero';
import RecallButton from './components/RecallButton';
import MenuBar from './components/MenuBar';
import "./assets/styles/App.scss"
import SearchButton from './components/SearchButton';

function App() {
  return (
    <>
        <div className="space"></div>
        <Hero text={"タイトル"} bigger={true} />
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
        <SearchButton search={"猫"} text={"具体例を検索!"}/>
    </>
  );
}

export default App;
