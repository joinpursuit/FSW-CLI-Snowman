const dictonary = require ("./dictionary.js")

class ComputerPlayer {
  constructor() {
    this.secretWord = dictonary[Math.floor(Math.random() * dictonary.length)]
  }
  getWordLength() {
    return this.secretWord.length
  }
  reveal() {
  return this.secretWord
  }
}

module.exports = ComputerPlayer