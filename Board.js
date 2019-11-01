// 1. Board
//   * This would construct a board to the length. 
//   * It should check if the board is complete. 
//   * It should be able to add characters at differnect indicies. 

let {allTheWords} = require ('./words.js')

//class of board

const {ComputerPlayer} = require('./ComputerPlayer.js')

class Board{
// the constructor will take in a length of a word to create the board
    constructor(length){
   this.board = new Array(length).fill("_")
   }

   // addChar take in an array and char, places the charater on the board at the index numbers in the arrays
//    addChar(arr, char){
//     for (let i = 0; i < arr.length; i++){
//         this.board[i] = char
//     }
//    }

   //addChar takes in user's guessLetter adds that letter on the board at the same index it appears on the word
   addChar(word, letter) {
    for(let i = 0; i < word.length; i++){
        if(word[i] === letter){
            this.board[i] = letter;
        }
    }
}

    //checks to see if the board is complete by comparing it to the word - boolean return
    isComplete(word){
        if(this.board.join("") === word){
            return true;
        } else {
            return false;
        }
    }
    //displays the board
    displayBoard(){
        console.log(this.board.join(" "));
    }
}



module.exports = Board

