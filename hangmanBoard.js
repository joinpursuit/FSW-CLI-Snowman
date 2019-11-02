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
            }
        }
        console.log(this.board.join())
    }
}

module.exports = hangmanBoard