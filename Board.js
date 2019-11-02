const {allTheWords} = require("./word.js")

class Board {
    constructor(length) {     
        this.board = new Array(length).fill("_")
        this.filled = false
        
    }

    completeBoard() {
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


let test = new Board(5)
console.log(test.addCharacter("Pizza", "z"))

module.exports = Board













