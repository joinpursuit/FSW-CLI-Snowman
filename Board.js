// const word = require("./ComputerPlayer")

// class Board{
//   constructor(){
//     this.board = new Array(word.length).fill("_");
//     this.movesRemaining = 6;
//   } //Get word from computerRef and should print number of _; 6 tries for arms, legs, body, and head
//   displayBoard(){
//     console.log()
//   }
//   checkBoard(){
//     for(let i = 0; i < this.board.length; i++){
//       if(this.board[i] === "_"){
//         return false
//       } //If the board has a section not filled out then false, game isn't over, unless filled or dead
//     }
//   }
//   addLetter(){
//     let wrongLetters = []
//     this.board.forEach(move => { //use the move from Human to compared to the index of the word, if true should replace that index with the letter
//       if(word[i] === move){
//         this.board[i] === move
//       } else {
//         this.movesRemaining --
//         return wrongLetters.push(move)
//       }
//     });
//   }
// }
// let board1 = new Board()
// console.log(board1)
// module.exports = Board

class Board{
  constructor(length){
    this.board = new Array(length).fill("_");
  }
  isComplete(){
    return this.board.every(el => el !== "_");
  }
  addChar(indicies, char){
    for(let i of indicies){
      this.board[i] =char;
    }
  }
  length(){
    return this.board.length;
  }
  get(idx){
    return this.board[idx];
  }
}
module.exports = Board;
// let board = new Board(6)
// console.log(board)
// console.log(board.isComplete())
// board.addChar([1, 2, 3, 4, 5], "h")
// console.log(board.isComplete())
// console.log(board)