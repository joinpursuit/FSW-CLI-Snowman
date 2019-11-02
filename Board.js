// const ComputerPlayer = require("./ComputerPlayer.js")

class Board {
    constructor(length){
        this.lenght = length
        this.board = new Array(this.lenght).fill("_")
    }
    displayBoard(){
        return this.board
    }
    placeCharacter(idx, letter){
        this.board[idx] = letter
        return this.board
    }
}

// let board = new Board(5);
// console.log(board.displayBoard())
// console.log(board.placeCharacter(0,"a"))
// console.log(board)


module.exports = Board;
