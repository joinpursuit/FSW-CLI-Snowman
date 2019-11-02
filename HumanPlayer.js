const readline = require('readline-sync');

class HumanPlayer {    
    constructor(name, word) {
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
        return `The answer was "${board.answer.join("").toUpperCase()}".`;
    } 
}

module.exports = HumanPlayer;