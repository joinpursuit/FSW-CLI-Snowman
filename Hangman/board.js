// class Board {
//     constructor() {
//         this.board = [
// // set up the board here 
//         ]
//     }
// }

// function Board(length) {
//     this.board = new Array(length.fill("_"))
// }



// Board.prototype.addCharacter = function(idx, letter)
// Board.addCharacter(1, "o")
// let board = new Board 
// console.log(board);


// 1. Board
//   * This would construct a board to the length. 
//   * It should check if the board is complete. 
//   * It should be able to add characters at differnect indicies. 
let {allTheWords} = require ('./words.js')
//class of board
class Board {
    //constructor includes word/board
    constructor(){
        this.word = " " // word is choosen using random fuction
        this.board = [] //starting board is the length of the word
        
  
    }
    randomWord(){
       let word = allTheWords[(Math.floor(Math.random() * allTheWords.length))]
       
       this.word = word
    //    this.board = new Array (this.word.length)
    }
    fillBoard (){
        for(let i in this.word) this.board[i] = "-" 
    //    this.board = this.board.join("") 
    //   this.board.forEach((el,i)  => this.board[i] = '-')
    }
  addChar(letter) {
       
        for(let i = 0; i < this.word.length; i++){
            if(this.word[i] === letter){
                this.board[i] = letter
            }
        }
    }
    completedGame(){
        
        if (this.board.join() === this.word ) {
            return true
        }else{
            return false
        }
    }
    
}
let board1 = new Board();
board1.randomWord()
console.log(board1.board)
console.log(board1.word)
board1.fillBoard()
console.log(board1.board)
let letter = "a"
board1.addChar(letter)
console.log(board1.board)
console.log(board1.completedGame())