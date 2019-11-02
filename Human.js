const ComputerPlayer = require('./ComputerPlayer.js')
const HumanPlayer = require('./HumanPlayer.js')
const Board = require('./Board.js')
const readline = require("readline-sync")

class Game{
    constructor(){
        this.computer = new ComputerPlayer()
        this.human = new HumanPlayer()
        this.board = new Board(this.computer.hiddenWords())
        this.guessRemaining = 6
        this.guessed = []
    }
    gameOver(){
        if(this.guessRemaining = 0 || this.board.boardComplete(this.computer.char)){
            return true
        } else{
            return false
        }
    }
 
    isValid(guess){
        let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        let allowedMove = false
        if(alphabet.includes(guess) && !this.guessed.includes(guess)){
            allowedMove = true
        } 
         return allowedMove 
    }
    
    playMethod(){
        console.log("Welcome to a fearsome game of HANGMAN ")
        while(!this.gameOver()){
            this.board.showBoard()
         console.log(this.guessRemaining + "moves left")
           console.log("You used " + this.guessed.join(","))
           let guess = this.human.getMove()
           while(this.guessed.includes(guess)){
               guess = readline.question("Letter already selected, please try again")
           }
            if (this.isValid(guess)){
                this.guessed.push(guess)
                this.board.addChar(this.computer.char, guess)
                this.guessRemaining --
            } else{
                guess = readline.question("Select a proper letter")
            }
            console.clear()
            
            
        }
        if(this.guessRemaining){
            console.log(this.computer.revealWord())
            console.log("Ok you won, do you want a cookie?")
        } else{
            console.log("As usual, you're a pathetic loser. Of course I have to tell you the word which was...")
            console.log(this.computer.revealWord())
        }
    
    }
}
let playerName = readline.question("What is your name?")
let game = new Game(new HumanPlayer("Rafid"))
game.playMethod()

// module.exports = {words,newWords}
// game is going ot run until moves remaining is greater than 0. 
// Insid ethe play function after I get the move, I want to validate it. 
// creat a validate function 