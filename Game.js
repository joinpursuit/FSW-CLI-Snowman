const HumanPlayer = require("./HumanPlayer.js")
const Board = require("./Board.js")
const ComputerPlayer = require("./ComputerPlayer.js")
const {allTheWords} = require("./word.js")


class Game {
    constructor() {       
        this.words = allTheWords
        this.wrongMoves = 7
        this.guesser = new HumanPlayer("Bob")
        this.referee = new ComputerPlayer()
        this.board = new Board(length)
    }

    play() {
        while(this.wrongMoves > 0) {
            this.board(this.referee.secretWord().length)
            this.guesser.displayBoard(this.board)
            this.guesser.getMove()

        }

    }

}

let game = new Game()

console.log(game.play())