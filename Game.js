const Board = require("./Board.js")
const HumanPlayer = require("./HumanPlayer.js")
const ComputerPlayer = require("./ComputerPlayer.js")

class Game {
    constructor() {
        this.player1 = new HumanPlayer();
        this.player2 = new ComputerPlayer();
        this.winner = undefined
        this.board = new Board()
        this.guessRemaining = 6
        this.gameOver = false
        this.guess = "guess"
        this.guessWord = ""
    }

    switchPlayers() {
        this.currentPlayer =
         this.currentPlayer === this.HumanPlayer ? this.ComputerPlayer : this.HumanPlayer
    }

    wordCheck(){
        if(this.board.displyWord.join("") === this.guessWord){
            this.board.wordFound = true
        }
    }

    gameIsOver() {
        this.board.wordCheck()
        if(this.guessRemaining === 0 || this.board.wordFound === true){
            return this.gameOver = true
        } 
    }

    guess(){
         this.guess.toLowerCase() = this.player1.getGuess()
    }

    startBoard() {
            this.board.guessWord = this.player2.wordSelect()
            this.board.disply()
    }

    gameDisplay(){
        console.log(`lets play a game`)
        console.log(this.board.guessWord)
        console.log(this.board.displyWord)
        console.log(`you have ${this.guessRemaining} guesses left`)
        console.log(`you have tried ${this.board.guessedLetters}`)
        
    }
    reveal(){
        if(this.board.wordFound === true){
            console.log(`You did it. the word was ${this.board.guessWord}`)
        } else{
            console.log(`Better luck next time. The word was ${this.board.guessWord}`)
        }
    }
    gameplay(){
        this.startBoard()
        while(!this.gameOver){
            console.clear()
            this.gameDisplay()
            this.guess = this.player1.getGuess()
            if(this.board.isValidGuess(this.guess)){
                this.board.replace(this.guess)
            }else{
                this.guessRemaining -=1
            }
            this.gameIsOver()
        }
        this.reveal()
    }
}

let game = new Game()

game.gameplay()