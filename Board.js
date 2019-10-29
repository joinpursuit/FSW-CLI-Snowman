
const {dictionary} = require ('./dictionary.js');              // dictionary of words read in from dictionary.js file

class Board {
    constructor (){
        this.word = ""  // word is choosen using randomWord () function
        this.board = [];
        // let secretWord = dictionary[Math.floor(Math.random() * dictionary.length)];
        // for(let i = 0; i < secretWord.length; i++){
        //     this.board.push(secretWord[i]);
        // }
    }

    randomWord(){
        let word = dictionary[(Math.floor(Math.random() * dictionary.length))];
        this.word = word;   
    }

    fillboard(){
        for(let i in this.word){
            this.board[i] = " _ "
        }
        // this.board = this.board.join("");
    }

    addChar(letter) {
       
        for(let i = 0; i < this.word.length; i++){
            if(this.word[i] === letter){

                this.board[i] = letter
            }
        }
    }

    // should be able to check if board whether board is complete or not
    isComplete(){
        if(this.board.join() === this.board){
            return true;
        }
    }
}

// test board
let board = new Board();    // new board instance
board.randomWord();
board.fillboard();
console.log(board.board)
console.log(board.word)
let letter = 'a'
board.addChar(letter);

console.log(board.board);



module.exports = Board;

