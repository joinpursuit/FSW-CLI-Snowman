// 1. Board
//   * This would construct a board to the length. 
//   * It should check if the board is complete. 
//   * It should be able to add characters at differnect indicies. 
const readline = require('readline-sync')

class Board {
    constructor(){
        this.word = ""
        this.board = []
    }
    populateBoard(){ 
        for(let i = 0; i < this.word.length; i++){
        this.board[i] = "_"
        this.board = this.board.join("")
    }
  addChar(letter) {
        for(let i = 0; i < this.word.length; i++){
            if(this.word[i] === letter){
                this.board[i] = letter
            }
        }
    }
    completedGame(){
        if (this.board.join() === this.word ) {
            return true
        }else{
            return false
        }
    }
    
}
let board1 = new Board();
board1.randomWord()
console.log(board1.board)
console.log(board1.word)
board1.fillBoard()
console.log(board1.board)
let letter = "a"
board1.addChar(letter)
console.log(board1.board)
console.log(board1.completedGame())



module.exports = hangmanBoard