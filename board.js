class Board{
    constructor(length){
        this.board = new Array(length).fill('__')
    }
    isComplete(){
        return this.board.every(el =>el  !=="_")
    }
    addChar(indicies,char){
        for(let i of indicies){
            this.board[i]=char
            
        }

    }
    
}

// Board.prototype.addChar=function(i, letter){
//     this.board[i] =letter

// }
module.exports = board;

let board = new Board(6)
console.log(board)
console.log(board.isComplete())
board.addChar([1,2,3,4,5], 'h')
console.log(board.isComplete())
board.addChar([0], 'l') 
console.log(board.isComplete())

console.log(board)
