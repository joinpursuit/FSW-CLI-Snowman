/*Board
This would construct a board to the length.
It should check
if the board is complete.
It should be able to add characters at different indices. */


class Board {
    constructor(length) {
        this.board = new Array(length).fill("_");
    }
    isComplete(hiddenWord) {
        if (hiddenWord === this.board.join("")) {
            return true;
        } else {
            return false;
        }
    }
    addChar(hiddenWord, playerGuess) {
        for (i = 0; i < word.length; i++) {
            if (playerGuess === hiddenWord[i]) {
                this.board[i] = hiddenWord;
            }
        }
    }
    displayBoard() {
        console.log(this.board)
    }
}

module.exports = Board;