const ComputerPlayer = require("./ComputerPlayer.js")

class Board {
    constructor(length) {
        this.board = new Array(length).fill("_")
    }
    constructBoard() {
        console.log(this.board.join(" "));
    }
    isComplete(word) {
        if(this.board.join("") === word) {
            return true;
        } else {
            return false;
        }
    }
    addChars(word, letter) {
        for(let i = 0; i < word.length; i++) {
            if(word[i] === letter) {
                this.board[i] = letter;
            }
        }
    }
}

module.exports = Board;