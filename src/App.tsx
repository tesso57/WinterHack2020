import React from 'react';
import Hero from './components/Hero';
import RecallButton from './components/RecallButton';
import MenuBar from './components/MenuBar';

function App() {
  return (
    <>
        <Hero text={"タイトル"} bigger={true} />
        <Hero text={"自己紹介テンプレート"} bigger={true} />
        <Hero text={"話題ガチャ"} bigger={true} />
        <Hero text={"順番決め"} bigger={true} />
        <RecallButton/>
        <MenuBar/>
    </>
  );
}

export default App;
