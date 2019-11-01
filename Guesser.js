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


// TEST Guesser
// let referee = new Referee("referee");
// let board = new Board();
// let guesser = new Guesser("corey");
// console.log(guesser.getGuess());
// console.log(guesser.displayBoard());

// console.log(board.board);
