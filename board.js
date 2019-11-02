


class Board {
    constructor(word){
       this.board = new Array(word.length).fill('_')
    } 
          
    ifBoardComplete(correctLetters){
        if (this.board.length === correctLetters.length){
            return true 
        } else {
            return false
        }
        
    } 
   
    displayBoard(word){
       for (let i = 0; i < word.length; i++){
        let blankLetter = i
        blankLetter = '_'
        this.board.push(blankLetter)
       }
       
    }
    addCharacter(character,index){
       this.board[index] = character
    }
                                            
}


module.exports = Board;




