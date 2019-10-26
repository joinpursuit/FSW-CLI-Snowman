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

    isValidMove(move) {
        let checkMove = move.split("");
        if(checkMove.includes("1", "2", "3", "4", "5", "6", "7", "8", "9", "0")) {
            return false;
        } else {
            return true;
        }
    }
}

let board = new Board();
let pc = new ComputerPlayer(dictionary);
let player = new HumanPlayer();
let newWord = pc.secretWord();
console.log(board);
board.buildBoard(newWord);
console.log(board);
console.log(board.isValidMove(player.getMove()));

module.exports = Board;