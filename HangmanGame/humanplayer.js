const readline = require('readline-sync')

class HumanPlayer {
    constructor(name){
        this.name = name 
    }
    getMove() {
        return readline.question("What letter would you like? ")
    }
    
}

module.exports = HumanPlayer;