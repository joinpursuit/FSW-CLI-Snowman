const {words} = require("./words.js")

class ComputerPlayer {
  constructor(){
      this.words = words
    
    }
    getSecretWord() {
      return this.words[Math.floor(Math.random() * this.words.length)]
    }
  };

let computerPlayer = new ComputerPlayer()
ComputerPlayer.getSecretWord()