
const Board = require("./Board.js");
const Referee = require("./ComputerPlayer.js")
const readline = require("readline-sync");

// Game 
//   * Should have guesser and referee. 
//   * Should have guesses remaining. 
//   * Should have a play function. 
//   * Should check for validity of guess. 
//   * Should have an isGameOver. 



class Guesser {
  constructor(name) {
      this.name = name;
  }

  getGuess() {
      let guess = readline.question("PLEASE GUESS A LETTER: ")
      guess.toLowerCase();
      return guess;
  }


}

class Game {
    constructor(player){
        this.player = player;
        this.computer = new Referee();
        this.board = new Board(this.computer.secretWordLength());
        this.guessesRemaining = 6;  
        this.guessedAlready = [];
    }


    isValidGuess (guess){
        let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        let valid = false;
        if(alphabet.includes(guess) && !this.guessedAlready.includes(guess)){
            valid = true;
        }
        return valid;
    }

    isGameOver(){
        if (this.guessesRemaining <= 0 || this.board.isComplete(this.computer.word)){
            return true;
        } else {
            return false;
        }
    }
    
    play() {
        console.clear();
        console.log('PALINDROME HANGMAN');
        while(!this.isGameOver()){
            this.board.displayBoard();
            console.log(`YOU HAVE ${this.guessesRemaining} GUESSES LEFT`);
            console.log("LETTER USED: ", this.guessedAlready.join(", "))
            let guess = this.player.getGuess();

            while(this.guessedAlready.includes(guess)){
                guess = readline.question("LETTER ALREADY USED ")
            }

            if(this.isValidGuess(guess)){
                this.guessedAlready.push(guess)
                this.board.addChar(this.computer.word, guess);
                this.guessesRemaining -= 1;
            }  else{
                guess = readline.question( "ENTER VALID LETTER: ")
            }
            console.clear();
        }

        if(this.guessesRemaining){
            console.log(this.computer.reveal());
            console.log("YOU WIN!");
        } else {
            console.log("YOU LOST")
            console.log(this.computer.reveal());
        }
    }
}

let game = new Game(new Guesser);
game.play();

