const word = require("./ComputerPlayer")

class Board{
  constructor(){
    this.board = new Array(word.length).fill("_");
    this.movesRemaining = 6;
  } //Get word from computerRef and should print number of _; 6 tries for arms, legs, body, and head
  displayBoard(){
    console.log()
  }
  checkBoard(){
    for(let i = 0; i < this.board.length; i++){
      if(this.board[i] === "_"){
        return false
      } //If the board has a section not filled out then false, game isn't over, unless filled or dead
    }
  }
  addLetter(){
    let wrongLetters = []
    this.board.forEach(move => { //use the move from Human to compared to the index of the word, if true should replace that index with the letter
      if(word[i] === move){
        this.board[i] === move
      } else {
        this.movesRemaining --
        return wrongLetters.push(move)
      }
    });
  }
}
let board1 = new Board()
console.log(board1)
module.exports = Board