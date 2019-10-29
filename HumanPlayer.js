const readline = require('readline-sync');

class HumanPlayer {    
    constructor(word) {
        this.newWord = word ? word.toLowerCase() : word;
    }

    secretWord() {
        return this.newWord.length;
    }

    getMove() {
        return readline.question("Choose a letter: ");
    }
}

module.exports = HumanPlayer;