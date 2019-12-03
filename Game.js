const HumanPlayer = require("./HumanPlayer.js")
const ComputerPlayer = require("./ComputerPlayer.js")
const Board = require("./Board.js")
// const readline = require('readline-sync')

class Game {
    constructor(guesser, referee, board) {
        this.guesser = guesser;
        this.referee = referee;
        this.board = board;
        this.guessesRemaining = 6;
        this.guessedLetters = [];
    }
    enterValidGuess(guess) {
        this.guessedLetters.push(guess);
        for (i =0; i < this.ComputerPlayer.secretWord.length; i ++) {
            if (guess === this.ComputerPlayer.secretWord[i]) {
                return this.ComputerPlayer.secretWord[i];
            } else {
            this.guessesRemaining--
            }
        }
    }
    isGameOver() {
        this.board.isComplete() || this.guessesRemaining === 0;
        // console.log("You lose!")
    }
    isValidGuess(letter) {
        let alph = "abcdefghijklmnopqrstuvwxyz"
        return letter.length === 1 && alph.includes(letter) && !this.guessedLetters.includes(letter);
    }

        // let letter = ""
        // while (!letter) {
        //   let input = readline.question("Please enter your guess: ")
        //   if (guessIsValid(input)) {
        //     letter = input
        //   } else {
        //     console.log("Please enter a valid letter")
        //   }
        // }
        // return letter.toLowerCase()
    beginGame() {
        let boardLength = this.referee.getSecretWord();
        this.board = new Board(boardLength);
    }
    guessesRemaining() {
            if (this.guessesRemaining >= 2) {
                return "You have " + this.guessesRemaining + " guesses remaining."
            } else if (this.guessesRemaining === 1) {
                return "This is your last chance!"
        }
    }

    play() {
        let userInput = readline.question("Would you like to play? yes or no");
        if (userInput === "yes") {
            console.log("Great! Given a secret word, you will have 6 chances to guess correctly. Otherwise, game over.");
        } else if (userInput === "no") {
            let nameInput = readline.question("Enter your name: ")
            console.log("Hello " + nameInput + " !  Welcome to my game of Hangman.")
            this.play();
        }
        let boardLength = this.referee.getSecretWord();
        this.board = new Board(boardLength);
        while (!this.isGameOver) {
            let guessedChar = readline.question("Enter a guess:");
            this.guesser.guessedLetters += guessedChar + ", ";
            console.log("Guessed so far: " + this.guessedLetters.join(", "));
            this.guesser.displayBoard(this.board);
            this.ref.displayBoard(this.board);
            let guess = "0";
            while (!this.isValidGuess(guess)) {
            guess = this.guesser.getMove();
            if (!this.isValidGuess(guess)) {
                console.log("Invalid Guess!")
            }
        }
        this.enterValidGuess(guess);
        }
        this.resolveGame();
    }
    resolveGame() {
        if (this.guessesRemaining > 0) {
            return this.guesser.name + " wins!"
        } else {
            let winningWord = this.referee.reveal();
            return "Word was " + winningWord + ". You LOSE!"
        }
    }
}


let nameInput = readline.question("Enter your name: ")
console.log("Hello " + nameInput + " !  Welcome to my game of Hangman.")

let computerPlayerA = new ComputerPlayer();
let board1 = new Board(computerPlayerA.getSecretWord());

let game1 = new Game(new HumanPlayer(nameInput), computerPlayerA, board1);
game1.play();

module.export = Game;