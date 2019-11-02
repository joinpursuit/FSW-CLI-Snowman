const readline = require('readline-sync');
const Moves = require(".moves.js");
const VisualBoard = require(".RealBoard.js")

class Board {
    constructor() {
        this.board = []; 
        this.answer = [];
        this.guesses = [];
        this.movesRemaining = 9; 
        this.movesTaken = 0;  
        this.visualBoard = new VisualBoard();
    } 

    buildBoard(referee) {
        let newWordLength = referee.secretWord();
        this.board = new Array(newWordLength).fill("_");
        this.answer = [referee.newWord]

    } 

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

    MoveLong(guess) {
        if(guess.length > 1 || guess.length === 0) {
            return false; 
        } else {
            return true;
        }
    } 

    ValidMove(guess) {
        if(!isNaN(guess) || guess === undefined || !this.isMoveLong(guess) || this.board.includes(guess.toLowerCase()) || this.guesses.includes(guess.toLowerCase())) {
            return false; 
        } else {
            for(let i = 0; i < guess.length; i++) {
                if(!Moves.hasOwnProperty(guess[i].toUpperCase())) {
                    return false;
                }
            }
            return true;
        }
    } 

    ValidWord(referee) {
        let inputWord = readline.question(`${referee.name} please input a word: `);

        let wordValidity = false;
        while(!wordValidity) {
            let invalidChar = false;
            for(let i = 0; i < inputWord.length; i++) {
                if(!Moves[inputWord[i].toUpperCase()]) {
                    invalidChar = true;
                }
            } 

            if(!isNaN(Number(inputWord)) || invalidChar) {
                console.clear();
                console.log("Please enter a valid word.");
                inputWord = readline.question("Input a word: ");

            } else {
                wordValidity = true;
                break;

            }
        } 

        return inputWord.toLowerCase();
    } 

    placeLetter(guess, answer) {
        if(this.ValidMove(guess)) {
            answer.forEach((el, i) => {
                if(el === guess.toLowerCase()) {
                    this.board[i] = guess.toLowerCase();
                }
            })

            if(!this.board.includes(guess.toLowerCase())) {
                this.movesRemaining -= 1;
            }

            this.guesses.push(guess.toLowerCase());
        }
    }

    isGameOver(board) {
        if(this.movesRemaining === 0) {
            return true; 
        } else {
            return board.every((el) => el !== "_"); 
        }
    } 
} 

module.exports = Board;