class Board {
  constructor() {
    this.board = []
    this.guessesRemaining = 9
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
      w: "w",
      x: "x",
      y: "y",
      z: "z"
  }
    this.guesses = []
  }

  isComplete(){
    for(let i = 0; i < this.board.length; i++){
      if(this.board[i] === "_"){
        return false
      }
    }
    return true
  }

  isValidMove(move){
    if(!this.MOVES[move] || this.guesses.includes(move)){
      return false
    } else {
      return true
    }
    
  }
    

  placeMark(move, ref){
    for( let i = 0; i < ref.newWord.length; i++){
      if(ref.newWord[i] === move) {
        this.board[i] = move
      } 
    }
    if(!this.board.includes(move)){
      this.guessesRemaining -= 1
    }
    this.guesses.push(move)
  }


  displayBoard(referee) {
    let newWordLength = referee.secretWord()
    console.log(referee.newWord)
    this.board = new Array(newWordLength).fill("_")
  }
    

}

module.exports = Board