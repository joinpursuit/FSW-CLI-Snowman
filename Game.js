const Board = require("./Board.js");
const Guesser = require("./Guesser.js")
const Referee = require("./Referee.js")
const readline = require("readline-sync");

class Game {
    constructor(player, computer){
        Object.assign(this, {player, computer});   
        this.guessesRemaining = 6;  // Game should have guessesRemaining, decrement if HumanPlayer guesses wrong
        Board.board = new Board();
    }


    // Game should be able to check if a guess isValid
    isValidGuess (){
        let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        // while(this.guess !== 'a' && this.guess !== 'b' && this.guess !== 'c' && this.guess !== 'd' && this.guess !== 'e' && this.guess !== 'f' && this.guess !== 'g' && this.guess !== 'h' &&
        // this.guess !== 'i' && this.guess !== 'j' && this.guess !== 'k' && this.guess !== 'l' && this.guess !== 'm' && this.guess !== 'n' && this.guess !== 'o' && this.guess !== 'p' && this.guess !== 'q' &&
        // this.guess !== 'r' && this.guess !== 's' && this.guess !== 't' && this.guess !== 'u' && this.guess !== 'v' && this.guess !== 'w'&& this.guess !== 'x'&& this.guess !== 'y'&& this.guess !== 'z') {
    }

    // Game should be able to initiate play
    play() {
        console.clear();
        console.log("WELCOME to HANGMAN " + this.player.name);
        while(!this.board.isGameOver()){
            this.player.getMove();
        }
    }
}

let playerName = readline.question("Please enter your name: "); 
let game = new Game(
    new Guesser(playerName),
    new Referee()
);
game.play();


