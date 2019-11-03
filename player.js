const readline = require('readline-sync')
class HumanPlayer {
    constructor(name) {
        this.name = name
    }
    length(){
        return this.board.length
    }
    get (idx){
        return this.board[idx]
    }
    getMove(){
        return readline.question( 'would make a move here').toLowerCase()
       
    }
     displayBoard(board){
         let output = ''
        for(let i = 0; i < board.length(); i++){
            output +=board.get(i)+ " "
        }
        console.log(output)
    }
    
}








module.exports = player;
let board = require('./board.js')
let test = new Board(6)
let deja = new HumanPlayer('deja')
console.log(deja.getMove())
deja.displayBoard(test)