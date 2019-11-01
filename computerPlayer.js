// ComputerPlayer 
//   Should have a dictionary.
//   Should have secretWord and return it's length. 
//   Should have a reveal. 
//   * Should give the positions of guessed characters. 
//   * Possibly have a getMove. 
const {dictionary} = require("./dictionary.js")


  class ComputerPlayer {
    constructor (computer) {
      this.computer = computer;
      this.secretWord = dictionary[(Math.floor(Math.random()* dictionary.length))];
  }

  secretWordLength() { return this.secretWord.length}

  reveal() {
     return this.secretWord
  }

  computerGuess
}

  

let Con = new ComputerPlayer("Alex")
console.log(Con.secretWord)
console.log(Con.reveal())