const readline = require("readline-sync");

class HumanPlayer {
    constructor() {
    }
    getGuess() {
        return readline.question("Guess a letter.")
    }
}

module.exports = HumanPlayer;
