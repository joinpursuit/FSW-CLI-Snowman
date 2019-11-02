const readline = require('readline-sync')

class HumanPlayer {
    constructor(name) {
        this.name = name;
    }
    getMove(alpha) {
       return readline.question("Choose a letter: ")

    }
    displayBoard() {
        return 
    }
}

module.exports = HumanPlayer
let sam = new HumanPlayer
console.log(sam.getMove());