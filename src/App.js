/*------------------------------
  Un cronometro digitale!
------------------------------*/

import React from 'react';

import Chrono from './component/Chrono.js';

import './App.css';
import logo from './logo.png';



function App() {

  return (
    <div className="App">

      <header className="App__header">
        <div className="header__logo">
          <img src={logo} alt="logo"></img>
          <span><h1 className="header__logo__title">TOOLS:</h1></span>
          <span><h2 className="header__logo__subtitle">CHRONO</h2></span>
        </div>
      </header>

      <main className="App__main">
        <Chrono />
      </main>
      <footer className="App__footer"></footer>
    </div>
  );
}

export default App;
