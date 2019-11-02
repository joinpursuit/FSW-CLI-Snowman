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
  displayBoard(){
      let newBoard = new Board('word')
      return newBoard

  }

}
let player1 = new HumanPlayer('danny')


player1.displayBoard()


