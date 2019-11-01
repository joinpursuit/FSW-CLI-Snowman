const ComputerPlayer = require("./ComputerPlayer.js")

class Board {
    constructor(word){
        this.word = word;
        this.winner = undefined;
        this.board = new Array(this.word.lenght).fill("_")
    }
    placeCharacter(idx, letter){
        this.board[idx] = letter
        return this.board
    }
    
}

// let board = new Board(4);

// console.log(board)


module.exports = Board;
