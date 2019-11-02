/*Game
Should have guesser and referee.
Should have guesses remaining.
Should have a play
function.
Should check
for validity of guess.
Should have an isGameOver.*/

const readline = require("readline-sync");
const randomWordsList = require("./randomWordList.js")
const HumanPlayer = require("./humanPlayer.js")
const ComputerPlayer = require("computerPlayer.js")
const Board = require("./board.js");

class Game {
    constructor(playerOne) {
        this.playerOne = playerOne;
        this.computer = new ComputerPlayer();
        this.currPlayer = currPlayer;
        this.board = new Board();
    }
    switchPlayers({
            this.currPlayer === this.playerOne ? this.computer : this.playerOne
        }
        Play() {
            while (!this.gameOver()) {
                this.board.displayBoard();
                let move = false;
                while (!this.board.isValidGuess(move)) {
                    move = this.currPlayer.getMove();
                }
                this.board.winner === this.playerOne.letter) {
                console.log(this.pllayerOne.name + "wins!!");
            } else if (this.board.winner === this.computer.letter) {
                console.log(this.computer.name + "wins!!");
            }
            isGameOver() {
                if (this.board.isComplete(this.computer.secretWordLength) || this.guess)
            }

        }
    }
)
}
}