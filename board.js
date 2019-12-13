


class Board {
    constructor(length){
      this.board = this.board = new Array(length).fill('_')
      this.correctLettersCount = 0
    } 
          
    isBoardComplete(){
        if (this.board.length === this.correctLettersCount){
            return true 
        } else {
            return false
        }
        
    } 
   
    addCharacter(character,index){
        
    this.board[index] = character
    this.correctLettersCount += 1

       
    }
                                            
}

module.exports = Board;
