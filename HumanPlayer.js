// 2. HumanPlayer 
//   * Will need to getMove from player. 
//   * Display the board. 
//   * Possibly a select secret word that returns the length. 
//   * Possibly a givePostioins that returns an array of indicies. 
//   * Possibly a reveal word. 

const readline = require("readline-sync");


class HumanPlayer {
   constructor(name) {
       this.name = name;
   }
   getLetter() {
       return readline.question("Enter Your Letter!")
   }

    displayBoad(board) {
        return board.map((el) => {
            this.board[el]
        })
        return board
    }


}



let HangmanContestant = new HumanPlayer("")
// console.log(HangmanContestant.getLetter())































// module.exports = HumanPlayer;








