const ComputerPlayer = require("./ComputerPlayer.js");
const HumanPlayer = require("./HumanPlayer.js");
const dictionary = require("./dictionary.js");

class Board {
    constructor() {
        this.board = []; 
        this.answer = [];
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

    isMoveNumber(moveArr) {
        let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        for(let el of numbers) {
            if(el === moveArr[0]) {
                return false;
            } else {
                return true;
            }
        }
    }

    isMoveLong(moveArr) {
        if(moveArr.length > 1 || moveArr.length === 0) {
            return false;
        } else {
            return true;
        }
    }

    isValidMove(move) {
        let checkMove = move.split("");
        if(!this.isMoveNumber(checkMove)) {
            return false;
        } else {
            return this.isMoveLong(checkMove);
        }
    }
}

let board = new Board();
let cp = new ComputerPlayer(dictionary);
let player = new HumanPlayer();
let newWord = cp.secretWord();
board.buildBoard(newWord);
console.log(board.isValidMove(player.getMove()));

module.exports = Board;