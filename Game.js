const HumanPlayer = require("./HumanPlayer.js")
const ComputerPlayer = require("./ComputerPlayer.js")
const Board = require("./Board.js")

class Game{
    constructor(){
        this.ComputerPlayer = ComputerPlayer;
        this.HumanPlayer = new HumanPlayer;
        this.Board = new Board;
        this.winner = undefined;
    }
    gameOver(){
        if(this.ComputerPlayer.reamining === 0){
            this.winner = "you lose the game"
        }else{
            this.winner = HumanPlayer;
        }
    }
    play(){
        while(!this.gameOver()){
            this.Board.displayBoard();

        }
    }
}

let game1 = new Game();
console.log(game1)