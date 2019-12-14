const Board = require("./board.js")
const HumanPlayer = require("./humanPlayer")
const { allWords } = require("./dictionary")


class ComputerPlayer {
    constructor(){
        this.dictionary = allWords
        this.secretWord = "" 
    } 
    getWord(){
        this.secretWord = allWords[(Math.floor(Math.random() * (((allWords.length-1) - 0) + 0 )))]

    }  
    secretWordLength(){
        return this.secretWord.length

    }
    reveal(){
        return this.secretWord
    }
    givePosition(){
        for(let i=0;i < this.secretWord.length; i++){
         if (this.secretWord[i] === guesser.currentMove){
            return i
         } 
        }
    }
} 

// let danny = new HumanPlayer("danny")





// let ref = new ComputerPlayer()

// let guesser = new HumanPlayer("danny")
// console.log(ref.getWord())
// console.log(ref.secretWord)

// guesser.getMove()
// console.log(guesser.currentMove)

// console.log(ref.givePosition())

module.exports = ComputerPlayer;