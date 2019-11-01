const readline = require("readline-sync");

class HumanPlayer {
    constructor(name) {
        this.name = name
    }
    getMove() {
        return readline.question("Enter a letter! ")
    }
}
module.exports = HumanPlayer