class Board {
    constructor(length){
        this.board = new Array(length).fill("_")
    }

    // Board should be able to add a character 
    addChar(word, letter) {
        for(let i = 0; i < word.length; i++){
            if(word[i] === letter){
                this.board[i] = letter;
            }
        }
    }

    // should be able to check if board whether board is complete or not
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

 






