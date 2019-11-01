// . Game 
//   Should have guesser and referee. 
//   Should have guesses remaining. 
//   * Should have a play function. 
//   * Should check for validity of guess. 
//   Should have an isGameOver. 

const readline = require('readline-sync');
const dictionary = require("./dictionary.js")
const HumanPlayer = require("./humanPlayer.js")
const ComputerPlayer = require("./computerPlayer.js")
const Board = require("./board.js");

class Game {
    constructor(player) {
        this.player = player;
        this.computer = new ComputerPlayer();
        //this.currentPlayer = player1; 
        this.board = new Board(this.computer.secretWordLength());
        this.guessesRemaining = 9;
        this.guessedLetters = [];
    }

   
  isGameOver() {
    if(this.board.isComplete(this.computer.secretWord) || this.guessesRemaining === 0) {
      return true;
    } else {
      return false;
    }

  }

  guessValidity(letter) {
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o','p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    if (!this.guessedLetters.includes(letter) &&  alphabets.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  play() {
    console.clear();
    console.log('Welcome ' + this.player.name )

    while(!this.isGameOver()) {
      this.board.display();
      console.log("you have " + this.guessesRemaining  + " guesses remaining")
      console.log("Guessed letter: " + this.guessedLetters)
      let letter = this.player.getMove();

      if(this.guessedLetters.includes(letter)) {
        letter = readline.question("You already picked this letter. Please enter a different letter: ")
      } 
      if (this.guessValidity(letter)) {
        this.guessedLetters.push(letter);
        this.board.addLetter(this.computer.secretWord, letter);
        this.guessesRemaining --;
      } else {
         letter = readline.question("Please enter a valid letter: ")
      }

      
      console.clear();
    } 

    if(this.board.isComplete(this.computer.secretWord)) {
      console.log(" YOU WON! ")
      console.log("The word is: " + this.computer.reveal());
    } else {
      console.log(" YOU lOOSE ! ")
      console.log("The word is: " + this.computer.reveal());
    }
  }
}
  



let playerName = readline.question('Please enter name ');
let game = new Game(new HumanPlayer(playerName))
game.play();