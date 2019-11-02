const readline = require('readline-sync');
const ComputerPlayer = require('./ComputerPlayer.js')
const HumanPlayer = require('./HumanPlayer.js')
const Board = require('./Board.js')

class HangmanGame {
  constructor() {
    this.comp = new ComputerPlayer();
    this.human = new HumanPlayer();
    this.guessesRemaining = 6;
    this.board = new Board();
  }
  getMove() {
    return readline.question("Enter a Letter: ")
  }
  play() {

  }
  isValid() {

  }
  isGameOver() {

  }
}

let game = new HangmanGame();
console.log(game.computer.word)