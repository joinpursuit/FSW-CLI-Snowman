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
