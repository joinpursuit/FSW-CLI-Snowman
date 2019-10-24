const Board = require("./Board.js");
const HumanPlayer = require("./HumanPlayer.js")
const ComputerPlayer = require("./ComputerPlayer.js")

class Game {
    constructor(player, computer){
        Object.assign(this, {player, computer});
    }
}