const readline = require("readline-sync")
 

class HumanPlayer {
    constructor(name) {
        this.name = name
    }

    getMove() {
        return readline.question("Enter your letter!: ") 
    }

    displayBoard(board) {  // shows the current updated board
        let arr = []
        for (let i = 0; i < board.length; i++)     
        arr.push(board.get(i))
        return arr
    }

    secretWord() { // returns the length of the board
            
    }

    givePositions(char, board) {
        if (board[char]) {
            return indexOf(board[char])
        } 
    }

    
}

let human = new HumanPlayer("Marvin")
console.log(human.getMove())
module.exports = HumanPlayer;