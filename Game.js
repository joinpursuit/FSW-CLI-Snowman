// * Should have guesser and referee. 
//   * Should have guesses remaining. 
//   * Should have a play function. 
//   * Should check for validity of guess. 
//   * Should have an isGameOver. 
const HumanPlayer = require("./HumanPlayer.js")
const Board = require("./Board.js").default
const ComputerPlayer = require("./ComputerPlayer.js")

class Game {
    constructor(){
        this.word = word
        this.player = new HumanPlayer()
        this.guessRemaining = board.length + 3
        this.board = new Board(word)
        this.cpuPlayer = new ComputerPlayer()
    }
    play(){
        let letter = this.player.getLetter()
        while(this.guessRemaining > 0){
            let letter = this.player.getLetter()
            if

            this.board.displayBoard()
            if(this.board.isBoardComplete === true){
                console.log("YOU HAVE WON, THE WORD IS " + this.word)
            }else 
        }
    }
    isGameOver() {
        while(isBoardComplete() === false){
            if(this.guessRemaining === 0){
                return this.cpuPlayer.revealWord()
            }  
        }  
    }
}