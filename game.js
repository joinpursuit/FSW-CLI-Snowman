const Board = require("./board.js")
const HumanPlayer = require("./humanPlayer")
const ComputerPlayer = require("./computerPlayer")
const {hangManPics} =  require("./hangmanpics")



class Game {
    constructor(){
        this.guesser = new HumanPlayer("danny")
        this.ref = new ComputerPlayer("jimmy")
        this.guessesRemaining = 6
        this.guessedLetters = []
    }
    
    gameStart(){
        this.ref.getWord()
        this.board = new Board(this.ref.secretWord.length)
        
        this.play()

    }

    isGameover(){
        if(this.board.isBoardComplete() || this.guessesRemaining === 0){
            return true
        } else {
            return false
        }
    }
    play(){
        while(!this.isGameover()){
            console.log(`You have ${this.guessesRemaining} guess's remaining`);
            console.log(this.guesser.displayBoard(this.ref.reveal()));
            this.guesser.getMove()
            if(this.moveIsValid()){
                this.ref.givePosition()
            }else{
                this.guessesRemaining +=1
                this.play()
            }
        }
        
        

    }
    moveIsValid(){
        if(this.guesser.currentMove){
          return true
        } else {
          return false
        }
    }
    
    
}

let game1 = new Game()
console.log(game1.gameStart())