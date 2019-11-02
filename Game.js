// 4. Game 
//   * Should have guesser and referee.
//   * Should have guesses remaining. 
//   * Should have a play function.
//   * Should check for validity of guess. 
//   * Should have an isGameOver. 

const HumanPlayer = require("./HumanPlayer.js")
const Board = require("./Board.js")
const ComputerPlayer  = require("./ComputerPlayer.js")

class Game {
    constructor(guesser, referee) {
        this.guesser = guesser;
        this.referee = referee;
    }
    guessesRemaining() {
        this.isComplete();
    }
    
}

let Referee = new ComputerPlayer("Marbin");


  console.log(Referee);