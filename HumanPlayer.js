// 2. HumanPlayer 
//   * Will need to getMove from player. 
//   * Display the board. 
//   * Possibly a select secret word that returns the length. 
//   * Possibly a givePostioins that returns an array of indicies. 
//   * Possibly a reveal word. 

// const readline = require("readline-sync");

const Board = require("./Board.js")

const readline = require('readline-sync')

class HumanPlayer {
   constructor(player){
       this.player = player
   }
   // ask the player for a move 
   getMove(){
       return readline.question("Please choose a letter")
   }

   displayBoard(board){
       return board.join(" ")
   }

}
module.exports = HumanPlayer

let jon = new HumanPlayer("jon")
jon.getName()