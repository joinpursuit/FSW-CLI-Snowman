class Board {
    constructor(secretWord, length) {
        this.secretWord = secretWord;
        this.board = new Array(length).fill("_")
    }
    length() {
        return this.board.length;
    }
    get(idx) {
        return this.board[idx];
    }
    isComplete() {
        return this.board.every(el => el !== "-")
    }
    addChar(indicies, char) {
        for (let i of indicies) {
            this.board[i] = char;
        }
    }
}
// let board1 = new Board('suspenders')
// console.log(board1.displayBoard())
module.exports = Board;