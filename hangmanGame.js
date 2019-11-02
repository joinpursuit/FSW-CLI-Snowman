const readline = require('readline-sync')

const readline = require('readline-sync')
const HumanPlayer = require("./hangmanHumanPlayer.js")
const ComputerPlayer = require("./hangmanComputerPlayer.js")
const Board = require("./hangmanBoard.js")


// 4. Game 
//   * Should have guesser and referee. 
//   * Should have guesses remaining. 
//   * Should have a play function. 
//   * Should check for validity of guess. 
//   * Should have an isGameOver. 

class Game {
    constructor (guessee,guesser) {
        this.guessee = guessee 
        this.guesser = guesser
        this.board = new Board()
        guessesRemaining = 7
        lettersRemaining = this.lettersRemaining
        }
    gameOver(){
        if (guessesRemaining = 0 && this.lettersRemaining < 0){
        console.log("No Guesses Remaining.  You LOSE")
        }
    }
    Winner() {
        if (this.board.join() === this.word) {
        return 
        } 
        }
    play(){
        while (!this.gameOver())
    }

}

