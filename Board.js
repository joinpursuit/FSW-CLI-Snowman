let {allTheWords} = require ('./words.js')
const {ComputerPlayer} = require('./ComputerPlayer.js')


class Board{
    constructor(length){
   this.board = new Array(length).fill("_")
   }



addLetter(word, letter) {
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



module.exports = Board
