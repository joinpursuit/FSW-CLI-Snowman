// . Game 
//   Should have guesser and referee. 
//   Should have guesses remaining. 
//   * Should have a play function. 
//   * Should check for validity of guess. 
//   Should have an isGameOver. 

const readline = require('readline-sync');
const dictionary = require("./dictionary.js")
const HumanPlayer = require("./HumanPlayer.js")
const ComputerPlayer = require("./ComputerPlayer.js")
const Board = require("./Board.js");

class Game {
    constructor(player1) {
        this.player1 = player1;
        this.computer = new ComputerPlayer();
        //this.currentPlayer = player1; 
        this.board = new Board(this.computer.secretWordLength());
        this.guessesRemaining = 9;
        this.guessedLetters = [];
    }

   
  isGameOver() {
    if(this.board.isComplete(this.computer.secretWordLength) || this.guessesRemaining === 0) {
      return true;
    } else {
      return false;
    }

  }

  guessValidity(letter) {
    let alphabets = [“a”, “b”, “c”, “d”, “e”, “f”, “g”, “h”, “i”, “j”, “k”, “l”, “m”, “n”, “o”, “p”, “q”, “r”, “s”, “t”, “u”, “v”, “w”, “x”, “y”, “z”];
    if (!this.guessedLetters.includes(letter) &&  alphabets.includes(letter)) {
      return true;
    } else {
      return false;
    }
  
  }
  



// let play = new Play(new HumanPlayer("corey", "X"), new ComputerPlayer("Beavis", "O"))
play();