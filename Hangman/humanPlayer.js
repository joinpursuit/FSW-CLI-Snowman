const readline = require("readline-sync");

class HumanPlayer {
    constructor(name) {
        this.name = name;
    }
    getMove() {
        return readline.question("Please enter a letter: ").toLowerCase()
    }

    displayBoard(board) {
        let output = "";
        for (let i = 0; i < board.length(); i++) {
            output += board.get(i) + " ";
        }
        console.log(output)
    }
}

module.exports = HumanPlayer;

let board = require("./board.js")
    let test = new board(6)

let danielle = new HumanPlayer("Danielle")
console.log(danielle.getMove())
danielle.displayBoard(test)