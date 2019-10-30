const readline = require("readline-sync");

class HumanPlayer {
    constructor(name,letter) {
        this.name = name
        this.letter = letter
    }
    getLetter(input) {
        input = readline.question("Please enter your guess: ")
    }
}
let danielle = new HumanPlayer("danielle", "i")
console.log(danielle)
console.log(danielle.getLetter())