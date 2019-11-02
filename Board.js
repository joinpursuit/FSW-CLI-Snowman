class Board {
    constructor(length) {
        this.board = new Array(length).fill("_");
        // false
        this.filled = false;
        this.movesRemaining = 6;
    }
    isComplete() {
        if (!this.board.includes("_")) {
            this.filled = true
        } else {
            this.movesRemaining--
        }
    }
    
    addCharacter(word, char) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === char) {
                this.board[i] = char
            }
        }
        return this.board
    }

 
  let Board = new Board(5);
 console.log(testBoard.addChar("o", "rob"));