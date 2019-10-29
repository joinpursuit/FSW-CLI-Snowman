// HumanPlayer
//
//     Will need to getMove from player.
//     Display the board.
//     Possibly a select secret word that returns the length.
//     Possibly a givePostioins that returns an array of indicies.
//     Possibly a reveal word.

const readline = require('readline-sync');
class HumanPlayer{
  constructor(name){
    this.name = name;

  }
  getGuess(letter){
  while (!letter) {
    let input = readline.question("Please enter your guess: ")
    if (guessIsValid(input)) {
      letter = input
    } else {
      console.log("Please enter a valid letter")
    }
}
}

module.exports = HumanPlayer
