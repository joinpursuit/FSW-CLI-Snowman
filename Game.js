const HumanPlayer = require("./HumanPlayer.js")
const ComputerPlayer = require("./ ComputerPlayer.js")
const Board = require("./ Board.js")
const readline = require("./readline - sync");
class Game{
    constructor(){
        this.board = new Board(this.computer.secretWord());
        this.player = player;
        this.computer = new ComputerPlayer();
        this.guessRemng = Infinity
        this.guessedWrd = []
    }
    validGuess(guess){
        let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
            valid = false;
        if(alpha.includes(guess) && !this.guessedWrd.includes(guess)){
            valid = true;
        }
        
    }
    isGameOver(){
        if(this.guessRemng <= 0 || this.board.isItComplete(this.computer.word)){
            return true;
        } else{
            return false;
        }
    }
    play(){
        console.log(`Hello! ${this.name} Welcome to my version of Hangman. Would you like play? press 'y' or 'no'`);
        while(!this.isGameOver()){
            this.board.displayDaBoard();
            let guess = this.player.getMove();
            while(this.guessedWrd.includes(guess)){

            }
        }if(this.validGuess(guess)){
            this.guessedWrd.push(guess)
            this.board.characDiffInd(this.computer.word, guess);
            this.guessRemng -= 1;
        }else{
            guess = readline.question("")
        }
        if(this.guessRemng){
            return this.computer.reveal()
        }else{
            console.log("You ran out of guesses! Sorry!")
            console.log(this.computer.reveal())
        }
    }
}