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

    buildBoard(word = "word") {
        for(let i = 0; i < word.length; i++) {
            this.board.push("_");
        }
        for(let i = 0; i < word.length; i++) {
            this.answer[i] = word[i];
        }
    }

    isMoveNumber(move) {
        let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        for(let el of numbers) {
            if(el === move) {
                return false;
            } else {
                return true;
            }
        }
    }

    isMoveLong(move) {
        if(move.length > 1 || move.length === 0) {
            return false;
        } else {
            return true;
        }
    }

    isValidMove(move) {
        if(!this.isMoveNumber(move)) {
            return false;
        } else if(!this.isMoveLong(move)){
            return false; 
        } else if(this.board.includes(move.toLowerCase())) {
            return false;
        } else {
            return true;
        }
    }

    placeLetter(move, answer) {
        if(this.isValidMove(move)) {
            answer.forEach((el, i) => {
                if(el === move.toLowerCase()) {
                    this.board[i] = move.toLowerCase();
                }
            })
            this.movesRemaining -= 1;
        }
    }
}

let board = new Board();
let cp = new ComputerPlayer(dictionary);
let player = new HumanPlayer();
let newWord = cp.secretWord();
board.buildBoard(newWord);
board.placeLetter(player.getMove(), board.answer);
console.log(board.board)
console.log(board.movesRemaining);

module.exports = Board;