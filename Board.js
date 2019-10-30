class Board{
    constructor(){
        this.board = new Array (length).fill("_")
    }
 }
 Board.prototype.addChar = function(idx, letter){
    this.board[idx] = letter
 }


 let board = newBoard(5);
 board.addChar(1, "o")