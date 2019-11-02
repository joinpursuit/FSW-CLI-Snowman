const HumanPlayer = require("./HumanPlayer.js")
const Board = require("./Board.js")
const ComputerPlayer = require("./ComputerPlayer.js")
const {allTheWords} = require("./word.js")


class Game {
    constructor(players) {       
        this.words = allTheWords
        this.remainingLetters = ""
        this.wrongMoves = 7
        this.guesser = ""
        this.referee = ""
    }
}