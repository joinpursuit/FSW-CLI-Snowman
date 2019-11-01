// Board
//
//     This would construct a board to the length.
//     It should check if the board is complete.
//     It should be able to add characters at differnect indicies.
const Computer = require ("./computerPlayer.js")
class Board  {
  constructor(length){
    this.randomWord;
    this.guessLetter = [];
    //this.secretWord = secretWord;
    this.length = new Array(length).fill("_")
    this.secretWord;
    this.letter = []
    //this.display = displayBoard()
    this.comp = new Computer
  }
  displayBoard(){
    return this.length
    }
    addLetter(letter){
      for(let i = 0; i < this.length; i++){
       if(this.letter === this.randomWord[i]){
         this.letter.push(this.guessLetter)
         }
       }
     }
}


let comp = new Computer()
let random = comp.randomWord()
//console.log('random word', random)

let board = new Board(random.length)
console.log(board.displayBoard())




//let displayBoard = comp.randomWord()

module.exports = Board
