const readline = require("readline-sync");

class HumanPlayer {
    constructor(name) {
    this.name = name

    getMove() {
        return readline.question("Enter a letter!")
    }
}

let cassidy = new HumanPlayer("cassidy")
console.log(cassidy.getMove())

module.exports = HumanPlayer;