// HumanPlayer
//
//     Will need to getMove from player.
//     Display the board.
//     Possibly a select secret word that returns the length.
//     Possibly a givePostioins that returns an array of indicies.
//     Possibly a reveal word.
const Computer = require ("./computerPlayer.js")

const readline = require('readline-sync');
class HumanPlayer{
  constructor(name){
    this.name = name;
  }

  guess(){
    let letter;
  while (!letter) {
    let input = readline.question("Please enter your guess: ")
  //   if (checkValidGuess(input)) {
  //     letter === input
  //   } else {
  //     console.log("Please enter a valid letter")
  //     }
  //   }
  // }
}
}
}

module.exports = HumanPlayer
let ohidur = new HumanPlayer("Ohidur")
let comp = new Computer()

ohidur.guess()
ohidur.checkValidGuess()
