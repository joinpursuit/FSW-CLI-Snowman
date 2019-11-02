class Board {
    constructor(secretWord) {
        this.secretWord = secretWord;
        
    }
    displayBoard() {
        let str = "";
        for (let i = 0; i < this.secretWord.length; i++) {
            str += " _ ";
        }
        return str;
    }
}
// let board1 = new Board('suspenders')
// console.log(board1.displayBoard())
module.exports = Board;