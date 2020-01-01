// * Should have guesser and referee. 
// * Should have guesses remaining. 
// * Should have a play function. 
// * Should check for validity of guess. 
// * Should have an isGameOver. 
const HumanPlayer = require("./HumanPlayer.js")
const ComputerPlayer = require("./ComputerPlayer.js")
const Board = require("./Board.js")
const hangmanPics = require("./hangman-pics.js")
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
        console.clear();
        let guessedLetters = [];
        let secretWord = this.computerPlayer.secretWord;
        console.log(`Welcome to my Hangman Game ${gamerTag}`)


        while(!this.isGameOver()){
            console.log(hangmanPics[this.guessesLeft])
            this.board.displayBoard();
            console.log(`You have ${this.guessesLeft} guesses left.`)
            console.log(`You have already guessed ${this.alreadyGuessed.join(", ")}`)
            
            let guess = this.gamer.getMove();
            while(this.alreadyGuessed.includes(guess)){
                readline.question("You already guessed that letter, guess again.")
            }
            if(this.validMove(guess) && !this.computerPlayer.secretWord.includes(guess)){
                this.alreadyGuessed.push(guess)
                this.guessesLeft -= 1;   
            }else if(this.validMove(guess)){
                this.alreadyGuessed.push(guess)
                this.board.guesser(this.computerPlayer.secretWord, guess)
            }else{
                guess = readline.question("Enter a valid guess")
            }
            console.clear()
        }
        if(this.guessesLeft){
            console.log(this.computerPlayer.unsecret())
            console.log("Winner! Winner! Chicken Dinner!")
        }
        else{
            console.log("YOU GET NOTHING!! YOU LOSE!!")
            console.log(this.computerPlayer.unsecret())
        }
    }
}
let gamerTag = readline.question("Enter your name: ");
let game = new Game(new HumanPlayer(gamerTag));
game.play();