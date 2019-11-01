// Board
//   This would construct a board to the length. 
//   It should check if the board is complete. 
//   It should be able to add characters at different indices.

class Board {
  constructor(length) {
    this.board = new Array(length).fill("_");
  }

  isComplete(word) {
      if (word === this.board.join("")) {
        return true;
      } else {
        return false;
      }
    }
  
  addLetter(word, letter) {
    for (let i = 0; i < word.length; i++) {
      if (letter === word[i]) {
        this.board[i] = letter;
      }
    }
  }  

  display() {
    console.log(this.board)
  }
}

module.exports = Board;