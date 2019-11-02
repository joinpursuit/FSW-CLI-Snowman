
class Board {
    constructor(){
        this.movesRemaining = 6
        this.board = new Array(this.word.length).fill("_")
    }
    checkboard(board) {
        for (i = 0; i < Array.length; i ++);
        if(this.board[i] !== "_")
        return false
    }
    placemark(move) {
        this.word.length.forEach((index,letter) => {
            if(move === letter) {
                this.board[index]  = letter
            }
        })
    }
}
let board1 = new Board(this.board)
console.log(board1)

module.exports = Board