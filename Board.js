const Referee = require("./Referee.js");
const {dictionary} = require ('./dictionary.js');              // dictionary of words read in from dictionary.js file

class Board {
    constructor (){
        this.board = new Array(referee.word.length).fill("_")
    }

    addChar(letter) {
        for(let i = 0; i < referee.word.length; i++){
            if(referee.word[i] === letter){
                this.board[i] = letter;
            }
        }
    }

    // should be able to check if board whether board is complete or not
    isComplete(){
        if(this.board.join("") === referee.word){
            return true;
        } else {
            return false;
        }
    }
}

// test board
let referee = new Referee("computer");
let board = new Board();    // new board instance

// console.log(referee.reveal());

// console.log(referee.word);
// console.log(board.board)
// let letter = 'a'
// board.addChar(letter);

// console.log(board.board);
// console.log(board.isComplete());







module.exports = Board;

