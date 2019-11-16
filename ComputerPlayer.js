const Dictionary = require("./dictionary.js");
const Moves = require("./moves.js");

class ComputerPlayer {
    constructor() {
        this.dictionary = Dictionary;
        this.newWord = "";
        this.category = "";
        this.MOVES = Moves;
        this.difficulty;
        this.wins = 0;
    } // End of constructor

    getValidGuess(referee) {
        let cat = referee.category;
        let answer = referee.newWord;
        return this.dictionary[cat].filter((word) => word.length === answer.length);
    } // End of getValidGuess() function

    randomGuess(referee) {
        let validGuesses = this.getValidGuess(referee);
        let guessIdx = Math.floor(Math.random() * validGuesses.length);
        return validGuesses[guessIdx];
    } // End of randomGuess() function

    secretWordDiff(lengthArr) {
        this.newWord = this.dictionary[this.category][Math.floor(Math.random() * this.dictionary[this.category].length)];

        if(lengthArr[1]) {
            while(this.newWord.length < lengthArr[0] || this.newWord.length > lengthArr[1]) {
                this.newWord = this.dictionary[this.category][Math.floor(Math.random() * this.dictionary[this.category].length)];
            }
        } else {
            while(this.newWord.length < lengthArr[0]) {
                this.newWord = this.dictionary[this.category][Math.floor(Math.random() * this.dictionary[this.category].length)];
            }
        }   
    } // End of secretWordDiff() function

    setCategory(categoryChoice) {
        this.category = this.dictionary["cats"][categoryChoice - 1];
    } // End of setCategory() function

    secretWord() {
        let difficulty = { 
            1: [11],
            2: [8, 10],
            3: [5, 7],
            4: [0, 4]
        }

        this.secretWordDiff(difficulty[this.difficulty])

        for(let i = 0; i < this.newWord.length; i++) {
            if(this.newWord[i] !== " ") {
                this.newWordLength++;
            }
        }

        return this.newWordLength;
    } // End of secretWord() function

    revealWord() {
        return `The word was "${this.newWord.toUpperCase()}".`;
    } // End of revealWord() function

    randomLetter() {
        return this.MOVES[Math.floor(Math.random() * 27) - 1];
    } // End of randomLetter() function

    getMove(referee, guessesArr, board) {
        let newWord = referee.newWord;
        let guess = this.randomLetter();
        
        let guessNotRepeat = false;
        while(!guessNotRepeat) {
            if(!newWord.includes("a") && !newWord.includes("e") && !newWord.includes("i") && !newWord.includes("o") && !newWord.includes("u")) {
                guess = this.getMoveNoVowels(["a", "e", "i", "o", "u"]);

                if(guessesArr.includes(guess) || !board.isValidMove(guess)) {
                    guess = this.getMoveNoVowels(["a", "e", "i", "o", "u"]);
                } else {
                    guessNotRepeat = true;
                    break;
                }
            }

            if(guess === undefined || guessesArr.includes(guess) || !board.isValidMove(guess)) {
                guess = this.randomLetter();
            } else {
                guessNotRepeat = true;
                break;
            }
            
        } // End of guessNotRepeated
        return guess;
    } // End of getMove() function

    getMoveNoVowels(vowels, guess) {
        while(vowels.includes(guess) || guess === undefined) {
            guess = this.randomLetter();
        } // End of loop if randomLetter() returns a vowel

        return guess;
    } // End of getMoveNoVowels() function

    setDifficulty(difficulty) {
        this.difficulty = difficulty;
    } // End of setDifficulty() function

    incrementWins() {
        this.wins += 1;
    } // End of incrementWins()

    isCategoryMisc() {
        return this.category === "misc";
    } // End of isCategoryMisc()
}

module.exports = ComputerPlayer;