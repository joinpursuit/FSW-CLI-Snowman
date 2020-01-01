// // Will need to getMove from player.
// // Display the board.
// // Possibly a select secret word that returns the length.
// // Possibly a givePostioins that returns an array of indicies.
// // Possibly a reveal word.
// * Will need to getMove from player. 
//   * Display the board. 
//   * Possibly a select secret word that returns the length. 
//   * Possibly a givePostioins that returns an array of indicies. 
//   * Possibly a reveal word. 
const readline = require("readline");

const Board = require("./Board.js");

class HumanPlayer{
  constructor(name){
    this.name = name
  }
  getMove(){
    let guess =readline.quetion("Make your guess");
    guess.toLowerCase();
    return guess
  }
  displayBoard(board){
    return board.join(" ")

  }
}