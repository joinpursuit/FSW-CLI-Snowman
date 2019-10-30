const readline = require("readline-sync");
const Board = require("./Board.js");


class Guesser {
    constructor(name) {
        this.name = name;
    }

    getGuess() {
        let guess = readline.question("Please enter your guess: ")
        guess.toLowerCase();
        return guess;
    }

    displayBoard(){
        let disBoard = board.board;
        return disBoard.join(" ");
    }

}

// test guesser
// let referee = new Referee("referee");
let board = new Board();
let guesser = new Guesser("corey");
console.log(guesser.getGuess());
console.log(guesser.displayBoard());

// console.log(board.board);

module.exports = Guesser; 