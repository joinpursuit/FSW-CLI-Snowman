const readline = require('readline-sync');
const dictionary = require("./dictionary.js")
const HumanPlayer = require("./HumanPlayer.js")
const ComputerPlayer = require("./ComputerPlayer.js")
const Board = require("./Board.js");

function play () {
console.log("**WELCOME TO HANGMAN GAME**")
let greetingName = readline.question('ENTER YOUR NAME: ');
console.log("Hello " + greetingName + " !  Welcome.") 

// let ask = readline.question("Would you like  ");

// console.log("OK My "+  ask + " " + greetingName);

let enterRecipe = readline.question("Would you like to play Hangman [y]es or [n]o ? ");

console.log("Great!! " + greetingName + "  let do it!!");
class Game {
    constructor(player1, computer) {
        this.player1 = player1;
        this.computer = computer;
        this.currentPlayer = player1; 
        this.board = new Board()
    }
    // Write a switchPlayers that updates the currentPlayer
    switchPlayers() {
      this.currentPlayer === this.player1 ? this.computer : this.player1
    }
    
    // gameOver() {
    //   return this.board.findWinner();
    // }
    
    play(){
      while(!this.gameOver()){
        console.clear(); 
        this.board.displayBoard();
        let move = false;
        while(!this.board.isValidMove(move)){
          move = this.currentPlayer.getMove();
        }
        this.board.PlayMark(this. currentPlayer.letter, move);
        this.switchPlayers();
    }

    this.board.displayBoard()
    if(this.board.winner === this.player1.letter) {
      console.log(this.player1.name + "Wins!! 👍 👍");
    } else if (this.board.winner === this.computer.letter) {
        console,log(this.computer.name + " Wins!! 👍 👍");
    } else {
        console.log("🤪 🤪 YOU BOTH LOSERS 🤪 🤪")
    }
    
  }
}
}

   

function getValidLetterGuess() {
  function guessIsValid(letter) {
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase()
  }
  let letter = ""
  while (!letter) {
    let input = readline.question("Please enter your guess: ")
    if (guessIsValid(input)) {
      letter = input
    } else {
      console.log("Please enter a valid letter")
    }
  }
  return letter.toLowerCase()
}



// let play = new Play(new HumanPlayer("corey", "X"), new ComputerPlayer("Beavis", "O"))
play();