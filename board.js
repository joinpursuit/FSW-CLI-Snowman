const readline = require('readline-sync');

class Letter {
    constructor(value) {
        this.value = value;
        this.hidden = true;
        this.hide = function () {
            this.hidden = true;
        };
        this.show = function () {
            this.hidden = false;
        };
        this.render = function () {
            if (this.hidden) {
                return "_ ";
            }
            else {
                return this.value;
            }
            ;
        };
    }
}
;


class Word {
    constructor() {
        this.letters = [];
        this.getLetters = function (newWord) {
            let letters = newWord.split("");
            for (let i = 0; i < letters.length; i++) {
                let letterObject = new Letter(letters[i]);
                this.letters.push(letterObject);
            }
        };
        this.isFound = function () {
            for (let i = 0, length = this.letters.length; i < length; i++) {
                if (this.letters[i].hidden) {
                    return false;
                }
            }
            return true;
        };
        this.try = function (letter) {
            let found = false;
            for (let i = 0; i < this.letters.length; i++) {
                if (this.letters[i].value === letter) {
                    this.letters[i].show();
                    found = true;
                }
            }
            return found;
        };
        this.render = function () {
            let rendered = "";
            for (let i = 0; i < this.letters.length; i++) {
                rendered += this.letters[i].render();
            }
            return rendered;
        };
    }
}
;

let game = {
    guesses: 0,
    guessedLetters: [],
    words: [],
    currentWord: "",
    
    startGame: function(wordsArray) {
        this.guesses = 10;
        this.guessedLetters = [];
        this.words = [];
        this.words = wordsArray;
        var randomNumber = Math.floor(Math.random() * (this.words.length));
        this.currentWord = new Word();
        this.currentWord.getLetters(this.words[randomNumber]);
    },

    guess: function(letter) {
        if (this.guessedLetters.indexOf(letter) === -1) {
            this.currentWord.try(letter);
            this.guessedLetters.push(letter);
            this.guesses--;
        }
    },

    isOver: function() {
        return this.currentWord.isFound() || (this.guesses === 0);
    },

    overMessage: function() {
        if (this.currentWord.isFound()) {
            return "You won @_@ !!!!!!";
        }
        if (this.guesses === 0) {
            return "GAME OVER, THE USER WINS ^_^ ";
        }
        return "";
    },

    render: function() {
        console.log("HANGMAN TERMINAL GAME")
        console.log("Guesses Left: " + this.guesses);
        console.log(this.currentWord.render());
    }
};



let arrayOfWords = ["heart", "kingdom", "fantasy", "tales", "adventure"];


game.startGame(arrayOfWords);


while (!game.isOver()) {
    game.render();
    let letter = readline.question("Please enter your guess: ");
    if (letter.length !== 1) {
        console.log("Try to guess one letter at a time maybe...");
        console.log("Keep trying!")
    } else {
        game.guess(letter);
    };
    console.log("-------------------");
}

console.log(game.overMessage());
