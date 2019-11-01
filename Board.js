class Board {
    constructor(word) {         
        this.board = new Array(word.length).fill("_")
        this.guessesRemaining = 7
    }
    completeBoard() {
        return this.board.every((el) => {
            return el !== "_"
        })       

    }

    addCharacter(move) {
        
    }

}


let test = new Board(5)
console.log(test.addCharacter("Pizza", "i"))

module.exports = Board













