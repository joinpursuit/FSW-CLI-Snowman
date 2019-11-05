const readline = require("readline-sync");

class Guesser {
    constructor(name) {
        this.name = name;
    }

    getGuess() {
        let guess = readline.question("Please enter your guess: ")
        guess.toLowerCase();
        return guess;
    }


}

module.exports = Guesser;

