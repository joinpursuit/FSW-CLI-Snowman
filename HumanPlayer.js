const readline = require('readline-sync');

class HumanPlayer {    
    constructor() {

    }

    getMove() {
        return readline.question("Choose a letter: ");
    }
}

module.exports = HumanPlayer;