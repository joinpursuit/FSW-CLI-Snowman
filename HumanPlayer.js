const readline = require('readline-sync');

class HumanPlayer {    
    constructor(name = "player", word) {
        this.newWord = word ? word.toLowerCase() : word;
        this.name = name;
    }

    secretWord() {
        return this.newWord.length;
    }

    getMove() {
        return readline.question("Choose a letter: ");
    }

    revealWord(board) {
        return `The word was "${board.answer.join("").toUpperCase()}".`;
    } // End of revealWord() function
}

module.exports = HumanPlayer;