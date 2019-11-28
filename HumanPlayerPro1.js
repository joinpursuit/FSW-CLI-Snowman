//const readline = require("readline-sync");

class HumanPlayer {
    constructor (name){
        this.name = name;
    }
    guessLetter() {
        return readline.question("guess a letter: ");
    }
}

module.exports = HumanPlayer;