import React from 'react';
import Hero from './components/Hero';
import RecallButton from './components/RecallButton';

function App() {
  return (
    <>
        <Hero text={"Hello"} bigger={true} />
        <RecallButton/>
    </>
  );
}

export default App;
