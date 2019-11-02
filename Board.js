// * This would construct a board to the length. 
//   * It should check if the board is complete. 
//   * It should be able to add characters at differnect indicies.
// const ComputerPlayer = require("./ComputerPlayer.js")

class Board {
    constructor(length){
        this.length = getWordLength()
        this.board = new Array(this.length).fill("_")
        
    }
    
    isBoardComplete() {
        let complete = false
        this.board.every(el => {
            if(el !== "_"){
                return complete = true
            }
        })
    }
    displayBoard() {
        console.log(this.board)
    }
        
}




module.exports = Board;