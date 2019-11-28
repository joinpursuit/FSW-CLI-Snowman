const Board = require("./Board.js")
const HumanPlayer = require("./HumanPlayer.js")
const CompPlayer = require("./CompPlayer.js")

class Game {
    constructor(players) {
        this.ref = players["ref"];
        this.guesser = players["guesser"]
        this.guessesRemaining = 6
        this.guessedLetters = []
    }
    play() {
        let boardLength = this.ref.selectWord()
        this.board = new Board(boardLength)
        while(!this.isGameOver()){
            console.log("Already used ")
            console.log(this.guessedLetters)
            this.guesser.displayBoard(this.board)
            let guess = "0";
            while(!this.isValid(guess)){
                guess = this.guesser.getMove()
                if(!this.isValid(guess)){
                    console.log("WRONG CHOICE!")
                }
            }
            this.guessedLetters.push(guess)
            let positions = this.ref.checkLetter(guess)
            if(positions.length === 0) {
                this.guessesRemaining--
            }
            this.board.addLetter(positions, guess)
        }
        if(this.guessesRemaining > 0) {
            console.log(this.guesser.name + " won")
        } else {
            console.log(this.ref.name + " won")
        }
    }
    isValid(letter) {
        let letters = "abcdefghijklmnopqrstuvwxyz"
        return letter.length === 1 && letters.includes(letter) && !this.guessedLetters.includes(letter)
    }
    isGameOver() {
        return this.board.isOver() || this.guessesRemaining === 0
    }
}

let brut = new HumanPlayer("Brutus")
let rob = new CompPlayer()
let game = new Game({ref: rob, guesser: brut})
game.play()