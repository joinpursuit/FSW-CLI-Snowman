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
    
    gameOver() {
        if (movesRemaining === 0) {
            return readline.question("Aw too bad, you lose!");
        }
    }
    
        play() {
            console.log("Hey ${this.name} let's play hangman!");
            while (!this.gameOver()) {
                this.board.displayBoard();
                let guessLetter = this.player.getLetter();
                while (this.guessedWrd.includes(guessLetter)) {
                }
            } if (this.validGuess(guess)) {
                this.guessedWrd.push(guess)
                this.board.addCharacter(this.computerPlayer.word, guess);
                this.guessesRemaining -= 1;
            } else {
                guess = readline.question("")
            }
            if (this.guessesRemaining) {
                return this.computer.revealWord()

            } else {
                console.log("No more guesses! See ya next time!")
                console.log(this.computer.revealWord())
                this.gameOver()
            }
        }
   

}

let Referee = new ComputerPlayer("Marbin");


  console.log(Referee);