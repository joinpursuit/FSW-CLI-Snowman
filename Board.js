class Board{
    constructor(length){
        this.board = new Array(length).fill("_");
    }
    characDiffInd(word,letter){
        let i = 0;
        while(i < word.length){
            if(word [i] === letter){
                this.board[i] = letter 
            }
            i++;
        }
        return this.board
    }
    displayDaBoard(){
        return this.board.join("")
    }
    isItComplete(word){
        if(this.board.join("") === word){
            return true
        }else {
            return false
        }
    }
}

module.exports = Board;