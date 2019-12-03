// const readline = require("readline-sync");

class HumanPlayer {
    constructor(name) {
        this.name = name;
        this.guessedLetters = "";
    }
    getMove() {
        return readline.question("Enter your guess:").toLowerCase();
    }
    displayBoard() {
        let str = "";
        for (let i = 0; i < this.secretWord.length; i++) {
            str += " _ ";
        }
        return str;
    }
    
}

// let player1 = new HumanPlayer("Ashya")
// let player2 = new HumanPlayer("Corey")

// console.log(player1)
module.exports = HumanPlayer;