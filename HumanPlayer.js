const readline = require('readline-sync')

class HumanPlayer {
    constructor(name){
        this.name = name;
    }
    getMove() {
        let move = readline.question("What is your Letter ?")
        return move
    }
    displayBoard() {
        return this.board
    }
}
let wil = new HumanPlayer("Wil")
console.log(wil.displayBoard())

module.exports = HumanPlayer
