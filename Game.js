const HumanPlayer = require("./HumanPlayer.js")
const ComputerPlayer = require("./ComputerPlayer.js")
const Board = require("./Board.js")

class Game{
    constructor(){
        this.ComputerPlayer = new ComputerPlayer();
        this.HumanPlayer = new HumanPlayer;
        this.Board = new Board();
        this.winner = undefined;
    }

    gameOver(){
        if(this.ComputerPlayer.reamining === 0){
            return this.winner = "you lose the game"
        }else{
           return this.winner = "you are the Winner";
        }
    }

    play(){
        let game2 = new Board(this.ComputerPlayer.getWord());
        while(!this.winner){
            console.log(game2);
            console.log(this.ComputerPlayer.getReveal());
            console.log(this.ComputerPlayer.getMove());
            if(this.ComputerPlayer.goodGuess){
                game2.placeCharacter(this.ComputerPlayer.secretWord.indexOf(this.ComputerPlayer.goodGuess),
                this.ComputerPlayer.goodGuess)
            }else{
                console.log(this.ComputerPlayer.badGuess)
            }
            console.log(game2);
        }
    }
}
let game1 = new Game();
game1.play()
