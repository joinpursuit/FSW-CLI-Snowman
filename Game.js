const HumanPlayer = require("./HumanPlayer.js")
const ComputerPlayer = require("./ComputerPlayer.js")
const Board = require("./Board.js")

class Game{
    constructor(){
        this.ComputerPlayer = ComputerPlayer;
        this.HumanPlayer = new HumanPlayer;
        this.Board = new Board;
    }
    gameOver(){
        if(this.HumanPlayer.reamining === 0)
    }
}