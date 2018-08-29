import React, { Component } from 'react';
import Snowman from './images/Snowman.jpg';

import './App.css';
import Words from './Data/Words.json'

import LetterButton from './Components/LetterButton'


const Alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pickedLetters: []
    }
  }

  componentDidMount() {
    console.log(Words[2])
  }

  addLetterToPickedArray = (letter) => {
    const newPickedLetters = this.state.pickedLetters.slice()
    newPickedLetters.push(letter)
    this.setState({
      pickedLetters: newPickedLetters
    })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Snowman} className="App-logo" alt="logo" />
          <h1 className="App-title">Ultimate Snowman</h1>
        </header>
        <div>
          {Alphabet.map((letter, i) => {
            return <LetterButton
            Key={i}
            letter={letter}
            picked={this.state.pickedLetters}
            addLetterHandler={this.addLetterToPickedArray} />
          })}
          <p>Letters Picked:</p>
          {this.state.pickedLetters.map((letter, i) => {
            return <p key={i}>{letter}</p>
          })}
        </div>

      </div>
    );
  }
}

export default App;