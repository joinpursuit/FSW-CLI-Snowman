const readline = require("readline-sync");
const Board = require("./Board.js");

class Guesser {
    constructor(name) {
        this.name = name;
    }

    getGuess() {
        this.guess = readline.question("Please enter your guess: ")
        this.guess.toLowerCase();
        while(this.guess !== 'a' && this.guess !== 'b' && this.guess !== 'c' && this.guess !== 'd' && this.guess !== 'e' && this.guess !== 'f' && this.guess !== 'g' && this.guess !== 'h' &&
        this.guess !== 'i' && this.guess !== 'j' && this.guess !== 'k' && this.guess !== 'l' && this.guess !== 'm' && this.guess !== 'n' && this.guess !== 'o' && this.guess !== 'p' && this.guess !== 'q' &&
        this.guess !== 'r' && this.guess !== 's' && this.guess !== 't' && this.guess !== 'u' && this.guess !== 'v' && this.guess !== 'w'&& this.guess !== 'x'&& this.guess !== 'y'&& this.guess !== 'z') {
            this.guess = readline.question("Please enter a valid letter: ")
        }
        return this.guess;
    }

    // should be able to display the board
    displayBoard(){

       let disBoard = this.board

        return disBoard ;
    }

}

// test guesser
let guesser = new Guesser();
// console.log(guesser.getGuess());

console.log(guesser.displayBoard())


module.exports = Guesser; 