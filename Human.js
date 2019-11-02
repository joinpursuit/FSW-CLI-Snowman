const readline = require('readline-sync')

class HumanPlayer {
    constructor(player){
        this.player = player
    }
    getMove(){
        let move = readline.question("Please choose a letter")
        move.toLowerCase()
        return move
    
    }

}
module.exports = HumanPlayer
// let rafid  = new HumanPlayer("rafid")
// console.log(rafid.getMove())
// console.log(rafid.getMove())