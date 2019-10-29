// Game
//
//     Should have guesser and referee.
//     Should have guesses remaining.
//     Should have a play function.
//     Should check for validity of guess.
//     Should have an isGameOver.
const HumanPlayer = require("./HumanPlayer.js")
const Board = require("./Board.js")
const Computer = require ("./computerPlayer.js")
class Game{
  constructor(){
    this.guesser = guesser;
    this.ref = ref;
    this.board = new Board
    this.guessReamining = 6;
  }
  checkValidGuess(input){
    return input.length === 1 && input.toUpperCase() != input.toLowerCase()
   }
  play(){

  }
  isGameOver(){

  }

}
