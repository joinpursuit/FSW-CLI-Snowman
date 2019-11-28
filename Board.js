class Board{
    constructor(length){
        this.board = new Array(length).fill("_");
    }
    length() {
        return this.board.length
    }
    get(index) {
        return this.board[index]
    }
    isOver() {
        return this.board.every(el => el !== "_")
    }
    addLetter(indicies, letter) {
        for(let i of indicies){
            this.board[i] = letter
        }
    }
}

module.exports = Board

