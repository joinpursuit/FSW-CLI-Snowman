class Board {
  constructor(wordLength){
    this.board = new Array(wordLength).fill("_")
  }
  isBoardComplete(){
    return this.board.every((el) => el !== "_")
  }
  displayBoard(){
    console.log(this.board)
  }
}

module.exports = Board