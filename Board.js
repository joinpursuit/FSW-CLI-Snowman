let sym = " _ "
console.log(winningWord)

class Board{
  constructor(){
    this.board = [sym.repeat(winningWord.length)];
    this.movesRemaining = 6;
  }
  checkBoard(board){
    for(let i = 0; i < arr.length; i++)
    if(board[i] !== "_"){
      return false
    }
  }
  placeMark(move){
    winningWord.length.forEach((index, letter) =>{
      if(move === letter){
        this.board[index] = letter
      }
    })
    }
}
// let board1 = new Board(this.board)
// console.log(board1)
module.exports = Board