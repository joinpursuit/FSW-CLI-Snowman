var fs = require("fs");
var text = fs.readFileSync("./words.txt", "utf-8");
var dictionary = text.split(",");                   // dictionary of words read in from text file

class Board {
    constructor (){
        this.board = [];
        let secretWord = dictionary[Math.floor(Math.random() * dictionary.length)];
        for(let i = 0; i < secretWord.length; i++){
            this.board.push(secretWord[i]);
        }
    }

    // should be able to check if board whether board is complete or not
    isComplete(){
        
    }
}

// test board
let board = new Board();    // new board instance
console.log(board.board);
// console.log(displayBoard());



module.exports = Board;

