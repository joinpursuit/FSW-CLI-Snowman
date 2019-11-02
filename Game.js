const HumanPlayer = require("./HumanPlayer.js")
const ComputerPlayer = require("./ComputerPlayer.js")
const Board = require("./Board.js")
const hangman = require("./hangman.js")
const readline = require('readline-sync')
class Game {
    constructor(guesser, referee, board) {
        this.guesser = guesser;
        this.referee = referee;
        this.board = board;
        this.guessCount = 6;
    }
    isValidGuess(letter) {
        for (i =0; i < this.board.secretWord.length; i ++) {
            if (letter === this.board.secretWord[i]) {
                return this.board.secretWord[i];
            } else {
            this.guessCount--
            }
        }
        return false;
    }
    isGameOver() {
        if (this.guessCount === 0) {
            console.log("You lose!")
            return true;
        }
        return false; 
    }
    guessesRemaining() {
            if (this.guessCount >= 2) {
                return "You have " + this.guessCount + " guesses remaining."
            } else if (this.guessCount === 1) {
                return "This is your last chance!"
        }
    }
    play() {
        let userInput = readline.question("Would you like to play? yes or no");
        if (userInput === "yes") {
            console.log("Great! Given a secret word, you will have 6 chances to guess correctly. Otherwise, game over.");
        } else if (userInput === "no") {

        }
        while (!this.isGameOver()) {
            console.log(this.board.displayBoard());
            console.log(this.guesser.guessedLetters);
            console.log(this.guessesRemaining())
            let guess = readline.question("Enter a guess:");
            this.guesser.guessedLetters += guess + ", ";
            
        }
    }
}

module.exports = Game;