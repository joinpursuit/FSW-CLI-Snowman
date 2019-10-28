const readline = require("readline-sync");

class Guesser {
    constructor(name) {
        this.name = name;
    }

    getGuess() {
        this.guess = readline.question("Which letter do you want to enter? ")
        return this.guess;
    }
}

module.exports = Guesser; 