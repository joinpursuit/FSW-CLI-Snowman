const readline = require('readline-sync');
const chalk = require("chalk");
const Dictionary = require("./dictionary.js");

class HumanPlayer {    
    constructor(name = "player", word) {
        this.newWord = word ? word.toLowerCase() : word;
        this.name = name;
        this.category;
        this.wins = 0;
        this.dictionary = Dictionary;
    } // End of constructor()

    setName(name) {
        this.name = name
    } // End of setName() function

    secretWord() {
        return this.newWord.length;
    } // End of secretWord() function

    getMove() {
        return readline.question("Choose a letter: ");
    } // End of getMove() function

    chooseCategory() {
        console.log(chalk.yellow(`${this.name} choose a category:`));
        console.log(chalk.magenta("[1] Movies"));
        console.log(chalk.magenta("[2] TV shows"));
        console.log(chalk.magenta("[3] Miscellaneous"));
        console.log(chalk.magenta("[4] Musicians"));
        console.log(chalk.magenta("[5] Books"));
        console.log(chalk.magenta("[6] Video Games"));
        let catChoice = readline.question("");

        while(catChoice !== "1" && catChoice !== "2" && catChoice !== "3" && catChoice !== "4" && catChoice !== "5" && catChoice !== "6") {
            console.clear();
            console.log(chalk.red("Enter a number between 1 & 6"));
            console.log(chalk.yellow(`${this.name} choose a category:`));
            console.log(chalk.magenta("[1] Movies"));
            console.log(chalk.magenta("[2] TV shows"));
            console.log(chalk.magenta("[3] Miscellaneous"));
            console.log(chalk.magenta("[4] Musicians"));
            console.log(chalk.magenta("[5] Books"));
            console.log(chalk.magenta("[6] Video Games"));
            catChoice = readline.question("");
        }

        this.category = Number(catChoice);
        this.setCategory();
    } // End of chooseCategory() function

    setCategory() {
        this.category = this.dictionary["cats"][this.category - 1];
    } // End of setCategory() function

    setWord(word) {
        this.newWord = word;
        if(!this.dictionary[this.category].includes(word)) {
            this.dictionary[this.category].unshift(word);
        }
    } // End of setWord() function

    revealWord() {
        return `The word was "${this.newWord.toUpperCase()}".`;
    } // End of revealWord() function

    incrementWins() {
        this.wins += 1;
    } // End of incrementWins() function

    isCategoryMisc() {
        return this.category === "misc";
    } // End of isCategoryMisc() function
} // End of HumanPlayer() class

module.exports = HumanPlayer;