const HumanPlayer = require("./HumanPlayer.js")
const Board = require("./Board.js")
const ComputerPlayer = require("./ComputerPlayer")


class Game {
    constructor(guesser) {
      this.guesser = guesser
      this.board = new Board()
      this.referee = new ComputerPlayer()
    }
    
  isGameOver() {
    if(this.board.guessesRemaining === 0) {
      return true
    } else {
      if(this.board.isComplete()) {
        return true
      } else {
        return false
      }
    }

    
  }
  
  
  
  play() {
    this.board.displayBoard(this.referee)
    while(!this.isGameOver()) {
      console.clear()
      console.log(this.board.board)
      console.log(`Guesses: ${this.board.guesses}`)
      console.log(`Guesses remaining: ${this.board.guessesRemaining}`)
      let move = this.guesser.getMove()
      
      while(!this.board.isValidMove(move)) {
        move = this.guesser.getMove()
      }

      this.board.placeMark(move, this.referee)
    
    }

    if(this.board.isComplete()){ 
      console.log(this.board.board.join(""))
      console.log(this.guesser.name + " wins!!!")
    } else {
      console.log(this.guesser.name + " lost!")
    }
  
  }

}
let game = new Game(new HumanPlayer("Cassidy"))

game.play()