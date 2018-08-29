import React, { Component } from 'react';
import Snowman from './images/Snowman.jpg';

import './App.css';
import Words from './Data/Words.json'

import LetterButton from './Components/LetterButton'


const Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pickedLetters: [],
      emptySpaces: [],
      secretWord: Words[Math.floor(Math.random() * Words.length)],
      pickedCorrectly: [],
      endGame: 'Keep Guessing!',
    }
  }

  componentDidMount() {
    const newEmptySpaces = this.state.secretWord.split('').map((l) => {
      if (l === ' ') {
        return ' '
      } else {
      return '_'
      }
    })
    this.setState({
      emptySpaces: newEmptySpaces
    }) 
  }

  addLetterToPickedArray = (letter) => {
    const newPickedLetters = this.state.pickedLetters.slice()
    newPickedLetters.push(letter)
    const correctlyPickedLetters = this.state.pickedCorrectly
    const newEmptySpaces = this.state.secretWord.split("").map((l, i) => {
      if (newPickedLetters.includes(l.toUpperCase())) {
        if (!correctlyPickedLetters.includes(l)){
          correctlyPickedLetters.push(l);
        }
        return l.toLowerCase();
      } else {
        return "_";
      }
    })

    const firstLetter = newEmptySpaces[0].toUpperCase().split()
    const lastLetters = newEmptySpaces.slice(1)
    const capitalFirstLetter = firstLetter.concat(lastLetters)

    if (correctlyPickedLetters.length === this.state.secretWord.length) {
      this.setState({
        endGame: 'You Win!'
      })
    }

    this.setState({
      pickedLetters: newPickedLetters,
      emptySpaces: capitalFirstLetter, 
      pickedCorrectly:correctlyPickedLetters
    })
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={Snowman} className="App-logo" alt="logo" />
          <h1 className="App-title">Ultimate Snowman</h1>
          <h5>{this.state.endGame}</h5>
        </header>

        <div className="secretWord">
          {this.state.emptySpaces.map((emptySpace, i) => {
            return (
              <span className="hiddenLetters" key={i}>
                {emptySpace}
              </span>
            );
          })}
        </div>

        <div className="letterButtons">
          {Alphabet.map((letter, i) => {
            return <LetterButton
              Key={i}
              letter={letter}
              picked={this.state.pickedLetters}
              addLetterHandler={this.addLetterToPickedArray} />
          })}
        </div>

      </div>
    );
  }
}

export default App;