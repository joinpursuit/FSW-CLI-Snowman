// 1. Board
//   * This would construct a board to the length. 
//   * It should check if the board is complete. 
//   * It should be able to add characters at differnect indicies. 
const readline = require('readline-sync')
const hangmanComputerPlayer = require("./hangmanComputerPlayer.js")

class Board {
    constructor(){
        this.board = []
        this.word = hangmanComputerPlayer.secretWord()
        let guessesRemaining = 7
        let lettersRemaining = this.word.length
    }
    populateBoard(){ 
        for(let i = 0; i < this.word.length; i++){
        this.board[i] = "_"
        }
    }
    addGuess(guess) {
        for(let i = 0; i < this.word.length; i++){
            if(this.word[i] === this.guess){
            this.board[i] = guess
            console.log(this.board.join(" "))
            this.guessesRemaining --
            this.letterRemaining --
            this.winner()
            }
        }
    }
    gameOver(){
        if (guessesRemaining = 0 && this.lettersRemaining < 0){
        console.log("No Guesses Remaining. Unfortunately that's all folx.. :( ")
        }
    }
    winner() {
        if (this.board.join("") === this.word) {
        console.log("You know relational cognitive associations!!!")
        } 
        }
}

module.exports = hangmanBoard