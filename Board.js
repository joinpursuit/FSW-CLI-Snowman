// Board
// * This would construct a board to the length. 
// * It should check if the board is complete. 
// * It should be able to add characters at differnect indicies. 
class Board {
    constructor(length) {
        this.board = board;
        let board = new Array(length).fill("_");
    }
    length() {
        return this.board.length;
    }
    get(index){
        return this.board[index];
    }
    isComplete() {
        return this.board.every(element => element !== "_");
    }
    addChar(indicies, char) {
        for(let i of indicies) {
            this.board[i] = char;
        }
    }
}

module.exports = Board;
let board = new Board(6)
console.log(board)
console.log(board.isComplete())