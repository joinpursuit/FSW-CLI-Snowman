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
  addCharacter(character) {
        for(let i = 0; i < this.word.length; i++){
            if(this.word[i] === character){
                this.board[i] = character
            }
        }
    }
    gameTermination(){
        if (this.board.join() === this.word ) {
            return true
        }else{
            return false
        }
    }
    
}



module.exports = hangmanBoard