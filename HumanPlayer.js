// import { builtinModules } from "module";
const readline = require('readline-sync')

class HumanPlayer {
    constructor(name){
        this.name = name;
    }
    getMove() {
        return readline.question("What is your letter guess: ")
    }
    displayBoard(board) {
        let output = "";
        for(let i = 0; i < board.length(); i++) {
            output += board.get(i) + " "
        }
        console.log(output)
    }
}

console
module.exports = HumanPlayer