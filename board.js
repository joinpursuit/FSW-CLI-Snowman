


class Board {
    constructor(length){
      this.board = new Array(length).fill('_')
      this.correctLettersCount = 0
    } 
          
    isBoardComplete(){
        if (this.board.length === this.correctLettersCount){
            console.log("you win")
            return true 
        } else {
            return false
        }
        
    } 
   
    addCharacter(character,indexArr){
      indexArr.forEach(el => {
        this.board[el] = character 
      })  
      this.correctLettersCount += 1

       
    }
                                            
}

// let board1 = new Board(6)
// board1.addCharacter("d",[1,2])
// console.log(board1["board"])

module.exports = Board;
