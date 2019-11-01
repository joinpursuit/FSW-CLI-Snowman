const Board = require("./Board.js");
const Guesser = require("./Guesser.js")
const Referee = require("./Referee.js")
const readline = require("readline-sync");

class Game {
    constructor(player){
        this.player = player;
        this.computer = new Referee();
        this.board = new Board(this.computer.secretWordLength());
        this.guessesRemaining = 6;  // Game should have guessesRemaining, decrement if HumanPlayer guesses wrong
    }


    // Game should be able to check if a guess isValid
    isValidGuess (){
        let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        
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
let game = new Game(new Guesser(playerName));
game.play();


