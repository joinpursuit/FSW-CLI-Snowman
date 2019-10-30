const ComputerPlayer = require("./ComputerPlayer.js");
const HumanPlayer = require("./HumanPlayer.js");
const dictionary = require("./dictionary.js");
const readline = require('readline-sync');


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
        if(!isNaN(guess)) {
            return false; // If the move is an integer between 0 & 9
        } else if(!this.isMoveLong(guess)){
            return false; // If the move is longer than 1 character
        } else if(this.board.includes(guess.toLowerCase()) || this.guesses.includes(guess.toLowerCase())) {
            return false; // If the board, or guesses arrays already contain the character guessed
        } else {
            return true;
        }
    } // End of isValidMove() function

    validWord() {
        let inputWord = readline.question("Please input a word: ");

        let wordValidity = false;
        while(!wordValidity) {
            if(!isNaN(Number(inputWord))) {
                console.log("Please enter a valid word.");
                inputWord = readline.question("Please input a word: ");
            } else {
                wordValidity = true;
                break;
            }
            
        } // End of validWord validity check

        return inputWord;
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