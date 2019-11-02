const {words} = require("./words.js")

class ComputerPlayer {
  constructor(){
      this.words = words
    }
    getSecretWord() {
      let singleWord = words[Math.floor(Math.random() * this.words.length)];
      return(singleWord);
    }
    wordRevel() {
      return this.wordRevel = this.getSecretWord(words)
    }
    charGuessed(){
      
    }
  }
  
module.exports = {ComputerPlayer}

// let refree = new ComputerPlayer()
// console.log(refree.wordRevel())
