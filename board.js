// Board
//
//     This would construct a board to the length.
//     It should check if the board is complete.
//     It should be able to add characters at differnect indicies.
const Computer = require ("./computerPlayer.js")
class Board  {
  constructor(length){
    this.randomWord = randomWord
    //this.secretWord = secretWord;
    this.length = new Array(randomWord).fill("_")
    //this.display = displayBoard()
    //this.comp = new Computer
  }
  displayBoard(){
    return this.length
    }

}


let comp = new Computer()
randomWord = comp.randomWord()

let board = new Board()
console.log(board.displayBoard())




//let displayBoard = comp.randomWord()

module.exports = Board
