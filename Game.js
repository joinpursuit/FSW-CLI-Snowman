const HumanPlayer = require("./HumanPlayer.js")
const ComputerPlayer = require("./ComputerPlayer.js")
const Board = require("./Board.js")

class Game{
    constructor(player){
        this.player = player;
        this.board = new Board()
    }
    play(){
        while(this.ComputerPlayer.checkBoard() === false){
            this.board.displayBoard();
            // console.log(this.player.name, "Its your turn")
            let move = this.player.getMove();
            this.board.addLetter();
            if(this.board.checkBoard() === true){
                console.log("Congrats you guessed the word")
            }
        }
    }
    gameOver(){
        if (this.movesRemaining === 0){
            break;
            console.log("Game over, you lose")
        }
    }
}

let player = new HumanPlayer ("You");
let ref = new ComputerPlayer ();
let game = new Game([player, ref])
game.play