const Board = require("./Board.js");
const Guesser = require("./Guesser.js")
const Referee = require("./Referee.js")
const readline = require("readline-sync");

class Game {
    constructor(player){
        this.player = player;
        this.computer = new Referee();
        this.board = new Board(this.computer.secretWordLength());
        this.guessesRemaining = 6;  // Game should have guessesRemaining, decrement if Gueser guesses wrong
        this.guessedAlready = [];
    }

    // Game should be able to check if a guess isValid
    isValidGuess (guess){
        let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        let valid = false;
        if(alphabet.includes(guess) && !this.guessedAlready.includes(guess)){
            valid = true;
        }
        return valid;
    }

    // Game should be able to check if game isOver
    isGameOver(){
        if (this.guessesRemaining <= 0 || this.board.isComplete(this.computer.word)){
            return true;
        } else {
            return false;
        }
    }
    
    // Game should be able to initiate play
    play() {
        console.clear();
        console.log(`WELCOME to HANGMAN ${this.player.name}!`);
        // sees if game is over
        while(!this.isGameOver()){
            this.board.displayBoard();
            console.log(`You have ${this.guessesRemaining} guesses left.`);
            console.log("Letters already used: ", this.guessedAlready.join(", "))
            let guess = this.player.getGuess();
            
            // sees if letter has been used
            while(this.guessedAlready.includes(guess)){
                guess = readline.question("You already used that letter. Please try another unique letter: ")
            }
            
            // sees if letter is valid, if it is - push letter into guessedAlready, add to board, decrement guessesRemaining
            if(this.isValidGuess(guess)){
                this.guessedAlready.push(guess)
                this.board.addChar(this.computer.word, guess);
            }  else{
                this.guessesRemaining -= 1;
                guess = readline.question("Please enter a valid letter: ")
            }
            console.clear();
        }
        
        if(this.guessesRemaining){
            console.log(this.computer.reveal());
            console.log("You win hangman! Congratulations!");
        } else {
            console.log("You ran out of guesses! You lose! This was the word: ")
            console.log(this.computer.reveal());
        }
    }
}

let playerName = readline.question("Please enter your name: "); 
let game = new Game(new Guesser(playerName));
game.play();



