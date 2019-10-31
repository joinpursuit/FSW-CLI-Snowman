const readline = require('readline-sync');
const Moves = require("./moves.js");
const VisualBoard = require("./VisualBoard.js")

class Board {
    constructor() {
        this.board = []; 
        this.answer = [];
        this.guesses = [];
        this.movesRemaining = 9; 
        this.movesTaken = 0;  
        this.visualBoard = new VisualBoard();
    } // End of constructor

    buildBoard(referee) {
        let newWordLength = referee.secretWord();
        this.board = new Array(newWordLength).fill("_");
        this.answer = [...referee.newWord]

    } // End of buildBoard() function

    buildVisualBoard() {
        if(this.movesRemaining === 9) {
            this.visualBoard.initialBoard();
        } else if(this.movesRemaining === 8) {
            this.visualBoard.wrongGuess1Board();
        } else if(this.movesRemaining === 7) {
            this.visualBoard.wrongGuess2Board();
        } else if(this.movesRemaining === 6) {
            this.visualBoard.wrongGuess3Board();
        } else if(this.movesRemaining === 5) {
            this.visualBoard.wrongGuess4Board();
        }  else if(this.movesRemaining === 4) {
            this.visualBoard.wrongGuess5Board();
        }  else if(this.movesRemaining === 3) {
            this.visualBoard.wrongGuess6Board();
        } else if(this.movesRemaining === 2) {
            this.visualBoard.wrongGuess7Board();
        } else if(this.movesRemaining === 1) {
            this.visualBoard.wrongGuess8Board();
        } else if(this.movesRemaining === 0) {
            this.visualBoard.wrongGuess9Board();
        }
    }

    isMoveLong(guess) {
        if(guess.length > 1 || guess.length === 0) {
            return false; // If the move is longer than 1 character
        } else {
            return true;
        }
    } // End of isMoveLong() function

    isValidMove(guess) {
        if(!isNaN(guess) || guess === undefined || !this.isMoveLong(guess) || this.board.includes(guess.toLowerCase()) || this.guesses.includes(guess.toLowerCase())) {
            return false; // If the move is a number, undefined, longer than 1 character, or included in guess/board arrays then this returns false
        } else {
            for(let i = 0; i < guess.length; i++) {
                if(!Moves.hasOwnProperty(guess[i].toUpperCase())) {
                    return false;
                }
            }
            this.movesTaken++;
            return true;
        }
    } // End of isValidMove() function

    validWord(referee) {
        let inputWord = readline.question(`${referee.name} please input a word: `);

        let wordValidity = false;
        while(!wordValidity) {
            let invalidChar = false;
            for(let i = 0; i < inputWord.length; i++) {
                if(!Moves[inputWord[i].toUpperCase()]) {
                    invalidChar = true;
                }
            } // Check for invalid character

            if(!isNaN(Number(inputWord)) || invalidChar) {
                console.clear();
                console.log("Please enter a valid word.");
                inputWord = readline.question("Input a word: ");

            } else {
                wordValidity = true;
                break;

            }
        } // End of validWord validity check

        return inputWord.toLowerCase();
    } // End of validWord() function

    placeLetter(guess, answer) {
        if(this.isValidMove(guess)) {
            answer.forEach((el, i) => {
                if(el === guess.toLowerCase()) {
                    this.board[i] = guess.toLowerCase();
                }
            })// End of answer.forEach

            if(!this.board.includes(guess.toLowerCase())) {
                this.movesRemaining -= 1;
            }

            this.guesses.push(guess.toLowerCase());
        }// End of ifValidMove check & placement
    }// End of placeLetter() function

    isGameOver(board) {
        if(this.movesRemaining === 0) {
            return true; // If there are no moves remaining
        } else {
            return board.every((el) => el !== "_"); // If there are no underscores remaining
        }
    } // End of isGameOver() function
} // End of Board class

module.exports = Board;