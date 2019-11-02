function Board(length){
    this.board = new Array(length).fill('__')
}
Board.prototype.addChar=function(i, letter){
    this.board[i] =letter

}
let board = new Board(5)
board.addChar(1,'0')
console.log(board)
module.exports = board;