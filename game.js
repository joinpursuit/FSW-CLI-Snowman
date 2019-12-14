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
            console.log(this.board.board);
            console.log(`Guessed Letters:${this.guessedLetters}`)
            this.guesser.getMove()
            console.log(this.ref.secretWord)
            if(this.moveIsValid()){
                this.ref.givePosition(this.ref.secretWord,this.guesser.currentMove)
                
                this.board.addCharacter(this.guesser.currentMove,this.ref.currentPostionsArr)
                this.board.correctLettersCount +1
                this.guessedLetters.push(this.guesser.currentMove)
                
                
                this.ref.currentPostionsArr = []
                console.clear()

                
            }else{
                this.guessesRemaining -=1
                this.guessedLetters.push(this.guesser.currentMove)
                console.clear()
                this.play()
            }
        }
    }
    moveIsValid(){
        if(this.ref.secretWord.includes(this.guesser.currentMove)){
          return true
        } else {
          return false
        }  
    }
}

let game1 = new Game()
console.log(game1.gameStart())