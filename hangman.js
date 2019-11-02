const HumanPlayer = require ("./HumanPlayer.js")
const ComputerPlayer = require ("./ComputerPlayer.js")
const Board = require ("./Board.js")
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

class Game {
  constructor(){
    this.referree = new ComputerPlayer()
    this.guesser = new HumanPlayer()
    this.wrongGuessesRemaining = 6
    this.guesses = []
    this.board = new Board(this.referree.getWordLength())

  }
  isValidGuess(letter){
    if (this.board.board.includes(letter) && !this.guesses.includes(letter) && alphabet.includes(letter) ){
      return true
    } else {
      return false
    }
  }
  isGameOver(){
    if (this.wrongGuessesRemaining <= 0 || this.board.isBoardComplete()){
      return true 
    } else {
      return false 
    }
  }
  placeLetter (letter){
    for (let i = 0; i < this.board.board.length;i++){
      if (this.referree.secretWord[i] === letter){
        this.board.board[i] = letter
        this.guesses.push(letter)
      }
    }
  }
  play(){
    while (!this.isGameOver()){
      let letter = this.guesser.getMove()
      this.board.displayBoard()
      console.log("Guesses Remaining:",this.wrongGuessesRemaining)
       while (this.isValidGuess(letter));{
        this.placeLetter(letter)
        this.wrongGuessesRemaining--
        break;
      }
      console.clear()
    }
  }

}

let game = new Game()
if (game.isGameOver() && game.wrongGuessesRemaining > 0){
  console.log(`${game.guesser.name}, you have won!`)
} else if (game.isGameOver() && game.wrongGuessesRemaining <= 0){
  console.log("Better luck next time!");
  
}

game.play()