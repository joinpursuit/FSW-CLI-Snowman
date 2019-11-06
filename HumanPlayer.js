const readline = require('readline-sync');

class HumanPlayer {    
    constructor(name = "player", word) {
        this.newWord = word ? word.toLowerCase() : word;
        this.name = name;
        this.category;
        this.wins = 0;
    } // End of constructor()

    secretWord() {
        return this.newWord.length;
    } // End of secretWord() function

    getMove() {
        return readline.question("Choose a letter: ");
    } // End of getMove() function

    setCategory() {
        console.log(`${this.name} choose a category:`);
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
            console.log(`${this.name} choose a category:`);
            console.log("[1] Movies");
            console.log("[2] TV shows")
            console.log("[3] Miscellaneous");
            console.log("[4] Musicians");
            console.log("[5] Books");
            console.log("[6] Video Games");
            catChoice = readline.question("");
        }

        this.category = Number(catChoice);
    } // End of setCategory() function

    setWord(word) {
        this.newWord = word;
    } // End of setWord() function

    revealWord() {
        return `The word was "${this.newWord.toUpperCase()}".`;
    } // End of revealWord() function

    incrementWins() {
        this.wins += 1;
    } // End of incrementWins() function

    isCategoryMisc() {
        return this.category === "misc";
    } // End of isCategoryMisc()
}

module.exports = HumanPlayer;