const ComputerPlayer = require("./ComputerPlayer.js");
const HumanPlayer = require("./HumanPlayer.js");
const dictionary = require("./dictionary.js");

class Board {
    constructor() {
        this.board = []; 
        this.answer = [];
        this.guesses = [];
        this.movesRemaining = 11;   
    }

    buildBoard(cpu) {
        let newWord = cpu.secretWord();
        for(let i = 0; i < newWord.length; i++) {
            this.board.push("_");
        }
        for(let i = 0; i < newWord.length; i++) {
            this.answer[i] = newWord[i];
        }
    }

    isMoveNumber(guess) {
        let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        for(let el of numbers) {
            if(el === guess) {
                return false;
            }
        }
        return true;
    }

    isMoveLong(guess) {
        if(guess.length > 1 || guess.length === 0) {
            return false;
        } else {
            return true;
        }
    }

    isValidMove(guess) {
        if(!this.isMoveNumber(guess)) {
            return false;
        } else if(!this.isMoveLong(guess)){
            return false; 
        } else if(this.board.includes(guess.toLowerCase()) || this.guesses.includes(guess.toLowerCase())) {
            return false;
        } else {
            return true;
        }
    }

    placeLetter(guess, answer) {
        if(this.isValidMove(guess)) {
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