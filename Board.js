const readline = require('readline-sync');
const Moves = require("./moves.js");


class Board {
    constructor() {
        this.board = []; 
        this.answer = [];
        this.guesses = [];
        this.movesRemaining = 11;   
    } // End of constructor

    buildBoard(referee) {
        let newWordLength = referee.secretWord();

        for(let i = 0; i < newWordLength; i++) {
            this.board.push("_"); // Pushes an underscore into the board array for each character of the generated word
        } // End of board creation

        for(let i = 0; i < newWordLength; i++) {
            this.answer[i] = referee.newWord[i]; // Pushes each character of the generated word into the answer array
        } // End of answer creation

    } // End of buildBoard() function

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