const HumanPlayer = require("./HumanPlayer")
const Board = require("./Board")
class Game {
    constructor() {
        this.board = new Board()
    }
    gameOver(){ // if out of moves
        if(this.movesremaining === 0){
            return "You lost try again"
        }
    }
    play(){
        while(!this.gameOver()){
            this.board;
            move = this.human.getMove();
            this.board.placeMark(move)
        }
    }
}

let game = new Game(new HumanPlayer())
game.play()