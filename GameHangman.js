const readline = require('readline-sync');
const ComputerPlayer = require('./ComputerPlayer.js')
const HumanPlayer = require('./HumanPlayer.js')
const Board = require('./Board.js')

class HangmanGame {
  constructor(player) {
    this.player = player;
    this.comp = new ComputerPlayer();
    this.guessesRemaining = 9;
    this.board = new Board(this.comp.returnLength());
    this.guessed = [];
  }
  getMove() {
    return readline.question("Enter a Letter: ")
  }
  play() {
    console.clear();
    console.log(`Hello ${this.player.name}, Welcome to Hangman!`);
    while(!this.isGameOver()) {
      this.board.constructBoard();
      console.log(`You have ${this.guessesRemaining} guesses left.`);
      console.log("Letters already guessed: ", this.guessed.join(", "));
      let guess = this.player.getMove();
      while(this.guessed.includes(guess)) {
        guess = readline.question("You've already guessed that letter. Please try another: ")
      }
      if(this.isValid(guess)) {
        this.guessed.push(guess)
        this.board.addChars(this.comp.word, guess);
        this.guessesRemaining -= 1;
      } else {
        guess = readline.question("Please enter a valid letter: ")
      }
      console.clear();
    }
    if(this.guessesRemaining) {
      console.log(this.comp.reveal());
      console.log("You won! Congratulations!");
    } else {
      console.log("You've run out of guesses! You lose! The word was: ")
      console.log(this.comp.reveal());
    }
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