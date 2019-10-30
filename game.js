const Player = require("./hangman.js")
const Board = require("./Board.js")
const cpuPlayer = require("./cpu.js")

class Game{
    constructor(wordUsed){
        this.wordUsed = wordUsed;
        this.letterused =new Player()
        this.board = new Board(wordUsed)
        this.cpu = new cpuPlayer()
        
    }
    gameOver(){
        return this.cpu.winOrLose(this.wordUsed);
    }
    play(){
        let num = 0;
        let makeBlank = this.board.blankLetters()
        console.log(": "+makeBlank)
        while(!this.gameOver()){
            let letter =this.letterused.getLetter();
            console.log(this.wordUsed)//to see the word
            let lIndex = this.cpu.checkLetter(letter,this.wordUsed)
            // console.log("Letterindex on Board = "+ lIndex)//see index on the board
            makeBlank = this.board.blankLetters(letter,lIndex)
            console.log("word: "+makeBlank)
            // console.log(this.board.checkLetter(letter))
            num++
    }

}
}
let cpuPlay = new cpuPlayer()
let nWord = new Game(cpuPlay.cpuWord())
// ^^ cpuPlay.cpuWord()
// console.log(cpuPlay.cpuWord())
nWord.play();
//The CPu should provide the word