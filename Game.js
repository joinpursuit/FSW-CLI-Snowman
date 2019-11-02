const HumanPlayer = require("./HumanPlayer.js")
const ComputerPlayer = require("./ ComputerPlayer.js")
const Board = require("./ Board.js")
const readline = require("./readline - sync");
class Game{
    constructor(){
        this.board = new Board(this.computer.secretWord());
        this.player = player;
        this.computer = new ComputerPlayer();
        this.guessRemng = 
        this.guessedWrd = []
    }
    validGuess(guess){
        let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        let validWrd = false;
        if(alpha.includes(guess) && !this.guessedWrd.includes(guess)){
            validWrd = true;
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
        readline.question
    }
}