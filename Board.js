var fs = require("fs");
var text = fs.readFileSync("./words.txt", "utf-8");
var dictionary = text.split(",");                   // dictionary of words read in from text file

class Board {
    constructor (){
        this.board = [];
        this.secretWord = dictionary[Math.floor(Math.random() * dictionary.length)];
        for(let i = 0; i < this.secretWord.length; i++){
            this.board.push(this.secretWord[i]);
        }
    }

    // should be able to display the board
    displayBoard(){
        let result = ""
        this.board.forEach(letter => result += " _ ");
        return result;
    }

    // should be able to check if board whether board is complete or not
    isComplete(){
        
    }
}

let board = new Board();

// test displayBoard
console.log(board.board);
console.log(board.displayBoard());



module.exports = Board;

