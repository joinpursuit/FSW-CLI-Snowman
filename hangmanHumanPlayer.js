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
    guessLetter() {
        let guess = readline.question("Please enter your guess (or press 0 to exit): ")
            if (guess === 0) {
            console.log("Endgame")
            } else if (guess.length !== 1 || typeof guess !== "string") {
            console.log("Please enter one letter.")
            guessLetter()
            } else {
            return guess
            }
    }
}

let player1 = new HumanPlayer ("Nilber")
console.log(player1)

module.exports = hangmanHumanPlayer
