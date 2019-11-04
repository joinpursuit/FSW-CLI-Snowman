const readline = require('readline-sync');

class HumanPlayer {    
    constructor(name = "player", word) {
        this.newWord = word ? word.toLowerCase() : word;
        this.name = name;
        this.category;
    }

    secretWord() {
        return this.newWord.length;
    }

    getMove() {
        return readline.question("Choose a letter: ");
    }

    setCategory() {
        console.log("Choose a category:");
        console.log("[1] Movies");
        console.log("[2] TV shows")
        console.log("[3] Miscellaneous");
        console.log("[4] Musicians");
        console.log("[5] Books");
        console.log("[6] Video Games");
        let catChoice = readline.question("");

        while(catChoice !== "1" && catChoice !== "2" && catChoice !== "3" && catChoice !== "4" && catChoice !== "5" && catChoice !== "6") {
            console.clear();
            console.log("Enter a number between 1 & 6")
            console.log("Choose a category:");
            console.log("[1] Movies");
            console.log("[2] TV shows")
            console.log("[3] Miscellaneous");
            console.log("[4] Musicians");
            console.log("[5] Books");
            console.log("[6] Video Games");
            catChoice = readline.question("");
        }

        this.category = Number(catChoice);
    }

    setWord(word) {
        this.newWord = word;
    }

    revealWord(board) {
        return `The word was "${this.newWord.toUpperCase()}".`;
    } // End of revealWord() function
}

module.exports = HumanPlayer;