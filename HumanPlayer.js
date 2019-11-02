const readline = require('readline-sync')

class HumanPlayer {
    constructor(name) {
        this.name = name;
    }
    getMove() {
        let guess = readline.question("Choose a letter: ")
        guess.toLowerCase();
        return guess
    }
}

module.exports = HumanPlayer