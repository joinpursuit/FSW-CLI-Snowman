const readline = require("readline-sync");
class humanPlayer{
    constructor(){
        this.name = name;
    }
    getMove(){
        return readline.question("Please Enter Your Guess: ")   
    }
    displayBoard(){
        return this.board
    }
}
let corey = new humanPlayer("C-Dog")
console.log(corey.getMove())

module.exports = HumanPlayer