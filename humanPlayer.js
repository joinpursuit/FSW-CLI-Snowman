const readline = require('readline-sync');
const Board = require("./board.js")


class HumanPlayer {
  constructor(name){
    this.name = name;
    this.currentMove = ""

  }
  getMove(){
  let userInput = readline.question('Enter your Letter:')
      
    if(userInput.length > 0 && userInput.length < 2){
      this.currentMove = userInput
    } else {
      console.log("Sorry Try Again!")
      this.getMove()
    }

  }
  displayBoard(word){
    let newBoard = new Board(word.length)
    return newBoard["board"]
  }
  
}
module.exports = HumanPlayer;







