import React, { Component } from 'react';
import Snowman from './images/Snowman.jpg';

import './App.css';

import GameLogic from './Components/GameLogic.js' 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Snowman} className="App-logo" alt="logo" />
          <h1 className="App-title">Ultimate Snowman</h1>
        </header>
        <div>
          <GameLogic />
        </div>

      </div>
    );
  }
}

export default App;