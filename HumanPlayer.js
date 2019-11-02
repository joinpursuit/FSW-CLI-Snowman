const readline = require("readline-sync")
 

class HumanPlayer {
    constructor(name) {
        this.name = name
    }

    getMove() {
        return readline.question("Enter your letter!: ") 
    }

    displayBoard(board) {  
       return board.map((el) => {
           this.board[el]
        })    
    }
    
}

let human = new HumanPlayer("Marvin")
console.log(human.displayBoard(new Array(5)))
module.exports = HumanPlayer;