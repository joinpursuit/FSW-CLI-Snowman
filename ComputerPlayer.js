// 3. ComputerPlayer 
//   * Should have a dictionary.
//   * Should have secretWord and return it's length. 
//   * Should have a reveal. 
//   * Should give the positions of guessed characters. 
//   * Possibly have a getMove. 
const {allTheWords} = require('./words.js');


class ComputerPlayer {
   constructor(computerPlayer){
    this.computerPlayer = computerPlayer
    this.word = allTheWords[(Math.floor(Math.random() * allTheWords.length))];
   }

lengthSecretWord(){
    return this.word.length
}
revealWord(){
   return this.word
  
}
}

module.exports = ComputerPlayer
