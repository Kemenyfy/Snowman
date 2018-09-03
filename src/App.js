import React, { Component } from 'react'

import './App.css'
import Words from './Data/Words.json'

import LetterButton from './Components/LetterButton'
import SnowmanImages from './Components/SnowmanImages'


const Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pickedLetters: [],
      emptySpaces: [],
      secretWord: Words[Math.floor(Math.random() * Words.length)],
      pickedCorrectly: [],
      endGame: 'Start Guessing!',
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
        if (!correctlyPickedLetters.includes(l)) {
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
      }) else if (correctlyPickedLetters.length < this.state.secretWord.length) {
        this.setState({
          endGame: 'Keep Guessing!'
      })
    }

    this.setState({
      pickedLetters: newPickedLetters,
      emptySpaces: capitalFirstLetter,
      pickedCorrectly: correctlyPickedLetters,
    })
  }

  playAgain = () => {
    this.setState({
      pickedCorrectly: [],
      pickedLetters: [],
      secretWord: Words[Math.floor(Math.random() * Words.length)]
    }), this.componentDidMount()
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={`./Images/Snowman.jpg`} className="App-logo" alt="logo" />
          <h1 className="App-title">Ultimate Snowman</h1>
          <h5>{this.state.endGame}</h5>
        </header>

        <SnowmanImages
          corrects={this.state.pickedCorrectly}
          picked={this.state.pickedLetters}
        />

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
              key={i}
              letter={letter}
              picked={this.state.pickedLetters}
              addLetterHandler={this.addLetterToPickedArray} />
          })}
        </div>
        <button onClick={this.playAgain}>Play Again</button>
      </div>
    );
  }
}

export default App;