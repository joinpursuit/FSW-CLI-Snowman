// 2. HumanPlayer 
//   * Will need to getMove from player. 
//   * Display the board. 
//   * Possibly a select secret word that returns the length. 
//   * Possibly a givePositions that returns an array of indicies. 
//   * Possibly a reveal word. 
  
const readline = require('readline-sync')

class HumanPlayer {
    constructor (name){
        this.name = name
    }
    guessLetter () {
        let guess = readline.question("Please enter your guess: ")
        return guess
    }
}

let player1 = new HumanPlayer ("Nilber")
console.log(player1)

module.exports = hangmanHumanPlayer
