const readline = require('readline-sync');

class HumanPlayer {    
    constructor(word) {
        this.word = word;
    }

    getMove() {
        return readline.question("Choose a letter: ");
    }
}

module.exports = HumanPlayer;