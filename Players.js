const readline = require("readline-sync");
class HumanPlayer{
    constructor(){
        this.human = human;
    }
    getMove(){
        return readline.question("Please Enter Your Guess: ")   
    }
    displayBoard(){

    }
}
module.exports = HumanPlayer