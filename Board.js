const readline = require('readline-sync');
const Moves = require("./moves.js");
const VisualBoard = require("./VisualBoard.js")

class Board {
    constructor() {
        this.board = []; 
        this.guesses = [];
        this.movesRemaining = 9; 
        this.movesTaken = 0;  
        this.visualBoard = VisualBoard;
    } // End of constructor

    buildBoard(referee) {
        referee.secretWord();
        for(let i = 0; i < referee.newWord.length; i++) {
            if(referee.newWord[i] !== " ") {
                this.board.push("_");
            } else {
                this.board.push(" ");
            }
        }

    } // End of buildBoard() function

    buildVisualBoard() {
        this.visualBoard[this.movesRemaining]();
    } // End of buildVisualBoard() function;

    printBoard(referee) {
        this.buildVisualBoard();
        switch(referee.category) {
            case "musicArtists":
                console.log("category: Music Artists");
                break;

            case "misc":
                console.log("category: Miscellaneous");
                break;

            case "tvShows":
                console.log("category: TV Shows");
                break;

            case "movies":
                console.log("category: Movies");
                break;
        }
        console.log(this.board.join(" "));
        console.log(`guesses: ${this.guesses.join(", ")}`);
        console.log(`Moves remaining: ${this.movesRemaining}`);
    }

    isMoveLong(guess) {
        return guess.length > 1 || guess.length === 0
    } // End of isMoveLong() function

    isValidMove(guess) {
        console.log(guess);
        if(!isNaN(guess) || guess === undefined || this.isMoveLong(guess) || this.board.includes(guess.toLowerCase()) || this.guesses.includes(guess.toLowerCase())) {
            return false; // If the move is a number, undefined, longer than 1 character, or included in guess/board arrays then this returns false
        } else {
            for(let i = 0; i < guess.length; i++) {
                if(!Moves[guess[i].toUpperCase()]) {
                    return false;
                }
            }
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
            for(let i = 0; i < answer.length; i++) {
                if(answer[i] === guess.toLowerCase()) {
                    this.board[i] = guess.toLowerCase();
                }
            }

            if(!this.board.includes(guess.toLowerCase())) {
                this.movesRemaining -= 1;
            }

            this.guesses.push(guess.toLowerCase());
        } else {
            return false;
        }// End of ifValidMove check & placement
    }// End of placeLetter() function

    isGameOver() {
        if(this.movesRemaining === 0) {
            return true; // If there are no moves remaining
        } else {
            return this.board.every((el) => el !== "_"); // If there are no underscores remaining
        }
    } // End of isGameOver() function
} // End of Board class

module.exports = Board;