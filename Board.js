// 1. Board
//   * This would construct a board to the length. 
//   * It should check if the board is complete. 
//   * It should be able to add characters at differnect indicies. 

class Board {
    constructor(length) {
        this.board = new Array(length).fill("_")
        this.filled = false
        this.movesremaining--
    }
    isComplete() {
        if (!this.board.includes("_")) {
            return this.filled = true
        } else {
            return this.filled = false
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
 }
 let board = new Board()
 

 
 
 
 
 
 
 
    
    module.exports = Board