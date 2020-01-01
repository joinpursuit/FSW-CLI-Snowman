// * Should have guesser and referee. 
// * Should have guesses remaining. 
// * Should have a play function. 
// * Should check for validity of guess. 
// * Should have an isGameOver. 
const HumanPlayer = require("./HumanPlayer.js")
const ComputerPlayer = require("./ComputerPlayer.js")
const Board = require("./Board.js")
const hangManPics = require("./hangman-pics.js")
const readline = require("./readline-sync")
class Game {
    constructor(gamer){
        this.gamer = gamer;
        this.computerPlayer = new ComputerPlayer()
        this.board = new Board(this.computerPlayer.secret())
        this.guessesLeft = 6
        this.alreadyGuessed = []
    }
    validMove(guess){
        let valid = false;
        let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        if(alphabet.includes(guess)){
            valid = true;
        }else{
            valid = false
        }
        return valid
    }
    isGameOver(){
        if(this.guessesLeft <= 0  || this.board.isComplete(this.computerPlayer.secretWord)){
            return true;
        }else{
            return false
        }
    }
    play(){
        
    }
}
let gamerTag = readline.question("Enter your name: ");
let game = new Game(new HumanPlayer(gamerTag));
game.play();