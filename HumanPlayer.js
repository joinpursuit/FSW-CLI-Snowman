const readline = require("readline-sync");

class HumanPlayer{
    constructor(name){
        this.name = name;
    }
    getMove(){
        return readline.question("What is your guess? ")
    }
}
const player = new HumanPlayer ("You")
player.getMove()

module.exports = HumanPlayer