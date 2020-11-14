import React from 'react';
import Hero from './components/Hero';
import RecallButton from './components/RecallButton';
import MenuBar from './components/MenuBar';
import Text from './components/Text';
import SearchButton from './components/SearchButton';
import "./assets/styles/App.scss"

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
        <Text text={"話題"}/>
    </>
  );
}

export default App;
