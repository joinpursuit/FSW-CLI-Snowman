const readline = require('readline-sync');
const ComputerPlayer = require('./ComputerPlayer.js')
const HumanPlayer = require('./HumanPlayer.js')
const Board = require('./Board.js')

class HangmanGame {
  constructor(player) {
    this.player = player;
    this.comp = new ComputerPlayer();
    this.guessesRemaining = 9;
    this.board = new Board(this.computer.secretWordLength());
    this.guessed = [];
  }
  getMove() {
    return readline.question("Enter a Letter: ")
  }
  play() {
    
  }
  isValid(guess) {
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let valid = false;
    if(alpha.includes(guess) && !this.guessed.includes(guess)) {
      valid = true;
    }
    return valid;
  }
  isGameOver() {
    if(this.guessesRemaining <= 0 || this.board.isComplete(this.comp.word)) {
      return true;
    } else {
      return false;
    }
  }
}

let playerName = readline.question("Please enter your name: ");
let game = new HangmanGame(new HumanPlayer(playerName));
game.play();