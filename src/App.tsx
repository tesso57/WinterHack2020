import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
        <Hero text={"Hello"} bigger={true} />
    </div>
  );
}

export default App;
