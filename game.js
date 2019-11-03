const player = require('./player.js')
const computerPlayer = require('./computerPlayer.js')
const board = require('./board.js')
const player = require('./player.js')

class Game {
  constructor(players) {
    this.ref = players['ref']
    this.guesser = players['guesser']
    this.guessesRemaining = 6
    this.guessLetters = []
    

  }
  play() {
    let boardLength = this.ref.chooseSecretWord()
    this.board = new board(boardLength)
    while (!this.isGameOver()) {
      console.log('letters guessed so far')
      console.log('guessed dso far'+ this.guessesRemaining.join(","))
      this.guesser.displayBoard(this.board)
      let guess ='0';
 
      while (this.isValidGuess(guess)){
        guess = this.guesser.getMove()
        if (!this.isValidGuess(guess)){
          console.log('invalid gues')
        }
      }
      let positions = this.ref.checkGuess(guess)
      if (positions.length === 0){
        this.board.addChar(positions, guess)
        this.guessesRemaining --
      }
     if (this.guessesRemaining> 0){
       console.log(this.guesser.name + 'wins')
     }else{
       console.log(this.ref.name+'wins')
     }
    }
  }

  getValidLetterGuess(char) {
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    return char.length === 1 && letters.includes(char) && this.guessLetters.has(has)

  }
  isGameOver() {
    return this.board.isComplete() || this.guessesRemaining === 0
  }


// function getValidLetterGuess() {
//   function guessIsValid(letter) {
//     return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase()
//   }
//   let letter = ""
//   while (!letter) {
//     let input = readline.question("Please enter your guess: ")
//     if (guessIsValid(input)) {
//       letter = input
//     } else {
//       console.log("Please enter a valid letter")
//     }
//   }
//   return letter.toLowerCase()
// }





// what is needed for hangman


// an Array of words

// check indices for each letter of word
// delete chosen used letters 
// print  correct letter to replace blanks

module.exports = game
let human =new HumanPlayer('deja')
let robo = new computerPlayer()
let game = new Game([ref:])