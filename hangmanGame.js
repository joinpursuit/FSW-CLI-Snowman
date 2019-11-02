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
        }
    play(){
        while (!this.gameOver())
    }

}

