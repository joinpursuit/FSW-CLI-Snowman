const readline = require("readline-sync");
const Board = require("./Board.js")

class HumanPlayer {
    constructor(name) {
        this.name = name
    }
    getGreeting() {
        this.getGreetingName = readline.question("What is your name? ")
        console.log("Hello " + this.name + " lets play a game of hangman!!!")
    }
    getMove() {
        this.getMove = readline.question("Guess a letter ")
    }
    displayBoard() {
        
    }
}

// module.exports = {HumanPlayer};
let danielle = new HumanPlayer();

console.log(danielle)
danielle.getGreeting()
// console.log(danielle.getMove())
// console.log(danielle.displayBoard())


// //from Board.js
// let boardA = new Board();
// let danielle = new HumanPlayer();
// console.log(boardA.boardFill)
// console.log(danielle.getGreeting)
// console.log(danielle.getMove)