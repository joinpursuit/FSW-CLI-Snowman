// 3. ComputerPlayer 
//   * Should have a dictionary.
//   * Should have secretWord and return it's length. 
//   * Should have a reveal. 
//   * Should give the positions of guessed characters. 
//   * Possibly have a getMove. 

const readline = require('readline-sync')
const dictionary = require("./hangmanDictionary.js")

class computerPlayer {
    constructor () {
        this.dictionary = dictionary
        this.word = word
    }
    secretWord() {
        let secretWord = this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
        this.word = secretWord
    }
}


module.exports = hangmanComputerPlayer