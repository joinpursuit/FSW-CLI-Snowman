const readline = require("readline-sync");

class HumanPlayer {
    constructor(name, letter) {
        this.name = name;
        this.letter = letter;
    }
    getMove() {
        return readline.question("Which letter do you want to enter? ")
    }
}

module.exports = HumanPlayer; 