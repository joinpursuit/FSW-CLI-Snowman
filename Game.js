const Board = require("./Board.js");
const HumanPlayer = require("./HumanPlayer.js");
const ComputerPlayer = require("./ComputerPlayer.js");

class Game {
    constructor(guesser, referee) {
        this.guesser = guesser;
        this.referee = referee;
    }

    play() {
        while(!Board.isGameOver()) {
            console.log(Board.board);
            console.log(Board.placeLetter(HumanPlayer.getMove(), board.answer))
        }
    } 
}