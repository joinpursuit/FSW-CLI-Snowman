const readline = require('readline-sync');
const Board = require("./board.js")


class HumanPlayer {
  constructor(name){
    this.name = name;
    this.currentMove = ""

  }
  getMove(){
    let userInput = readline.question('Enter your Letter:')
    this.currentMove = userInput
  }
  displayBoard(word){
      
    let newBoard = new Board(word.length)
      return newBoard
     

  }

}





module.exports = HumanPlayer;







