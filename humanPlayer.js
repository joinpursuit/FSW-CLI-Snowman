const readline = require('readline-sync');
const Board = require("./board.js")


class HumanPlayer {
  constructor(name){
    this.name = name;

  }
  getMove(userInput){
    userInput = readline.question('Enter your Letter:')
    return userInput
  }
  displayBoard(word){
      
    let newBoard = new Board(word)
      return newBoard
     

  }

}






