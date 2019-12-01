class Board {
    constructor(length) {
        this.board = new Array (length).fill("_");
    }

    length() {
        return this.board.length;
    }

    get(idx) {
        return this.board[idx];
    }

    isComplete() {
        return this.board.every(el => {
            return el !== "_";
        })
    }

    addChar(indicies, char) {
        for (let i of indicies) {
            this.board[i] = char;
        }
    }
}

module.exports = Board;
let board = new Board(6);
console.log(board);
console.log(board.isComplete());
board.addChar([3], "s")
console.log(board.isComplete());
console.log(board)
