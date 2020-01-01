// This would construct a board to the length.
// It should check if the board is complete.
// It should be able to add characters at differnect indicies.
let allTheWords = require("./words.js")
let hangmanPics = require("./hangman-pics.js")
class Board {
    constructor(word) {
        this.board = new Array(word).fill("_")
        this.movesLeft = 10
    }
    guesser(word, letter){
        for(let i = 0; i < word.length; i++){
            if(word[i]===letter){
                this.board[i] = letter
            }
        }
        return this.board
    }
    isComplete(word){
        if(this.board.join("") === word){
            return true;
        } else {
            return false
        }
    }
    
    displayBoard(){
        console.log(this.board.join(" "))
    }
}
module.exports = Board;