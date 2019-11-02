
// Board
// * This would construct a board to the length. 
// * It should check if the board is complete. 
// * It should be able to add characters at differnect indicies. 


  
class Board {
    constructor(length){
        this.board = new Array(length).fill("_")
    }

    addChar(word, letter) {
        for(let i = 0; i < word.length; i++){
            if(word[i] === letter){
                this.board[i] = letter;
            }
        }
    }

    isComplete(word){
        if(this.board.join("") === word){
            return true;
        } else {
            return false;
        }
    }

    displayBoard(){
        console.log(this.board.join(" "));
    }

}

module.exports = Board;