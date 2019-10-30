class Board {
  constructor(length) {
    this.board = new Array(length).fill("_")
    this.MOVES = {
      a: "a",
      b: "b",
      c: "c",
      d: "d",
      e: "e",
      f: "f",
      g: "g",
      h: "h",
      i: "i",
      j: "j",
      k: "k",
      l: "l",
      m: "m",
      n: "n",
      o: "o",
      p: "p",
      q: "q",
      r: "r",
      s: "s",
      t: "t",
      u: "u",
      v: "v",
      x: "x",
      y: "y",
      z: "z"
  }
  }

  isComplete(){
    for(let i = 0; i < this.board.length; i++){
      if(this.board[i] === "_"){
        return false
      }
    
    }
    return true
  }

  placeMark(arr, letter){
    
  }



}
let board = new Board(4)
console.log(board.isComplete())