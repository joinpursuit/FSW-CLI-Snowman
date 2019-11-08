const readline = require('readline-sync');
const Moves = require("./moves.js");
const VisualBoard = require("./VisualBoard.js")
const HumanPlayer = require("./HumanPlayer.js");
const chalk = require("chalk");

class Board {
    constructor() {
        this.board = []; 
        this.guesses = [];
        this.movesRemaining = 6; 
        this.movesTaken = 0;  
        this.visualBoard = VisualBoard;
    } // End of constructor

    buildBoard(referee) {
        if(referee instanceof HumanPlayer) {
            referee.setCategory();
            referee.setWord(this.validWord(referee))
        } else {
            referee.secretWord();
        }
        
        for(let i = 0; i < referee.newWord.length; i++) {
            if(referee.newWord[i] !== " ") {
                this.board.push("_");
            } else {
                this.board.push(" ");
            }
        }

    } // End of buildBoard() function

    buildVisualBoardMisc() {
        this.visualBoard[this.movesRemaining]();
    } // End of buildVisualBoardMisc() function;

    buildVisualBoard() {
        this.visualBoard[this.movesRemaining + 3]();
    } // End of buildVisualBoard() function

    setMoves(num) {
        this.movesRemaining = (num);
    } // End of setMoves() function

    initializeBoard() {
        this.board = [];
        this.guesses = [];
        this.movesRemaining = 6;
        this.movesTaken = 0;
    } // End of initializeBoard()

    printBoard(referee) {
        if(referee.isCategoryMisc()) {
            this.buildVisualBoardMisc();
        } else {
            this.buildVisualBoard()
        }
        
        switch(referee.category) {
            case "musicArtists":
            case 4:
                console.log("category: Music Artists");
                break;

            case "misc":
            case 3:
                console.log("category: Miscellaneous");
                break;

            case "tvShows":
            case 2:
                console.log("category: TV Shows");
                break;

            case "movies":
            case 1:
                console.log("category: Movies");
                break;

            case "books":
            case 5:
                console.log("category: Books");
                break;

            case "games":
            case 6:
                console.log("category: Video Games");
                break;

        }
        console.log(this.board.join(" "));
        console.log(`guesses: ${this.guesses.join(", ")}`);
        console.log(`Moves remaining: ${this.movesRemaining}`);
    } // End of printBoard() function

    isMoveLong(guess) {
        return guess.length > 1 || guess.length === 0
    } // End of isMoveLong() function

    isGuessNumber(guess) {
        return !isNaN(guess);
    } // End of isGuessNumber() function

    isGuessUndefined(guess) {
        return guess === undefined;
    } // End of isGuessUndefined

    isGuessGuessed(guess) {
        return this.guesses.includes(guess.toLowerCase());
    }

    isValidMove(guess) {
        let isGuessNum = this.isGuessNumber(guess);
        let isGuessUndf = this.isGuessUndefined(guess);
        let isLong = this.isMoveLong(guess);
        let isGuessed = this.isGuessGuessed(guess);

        if(isGuessUndf || isGuessNum || isLong || isGuessed) {
            if(isGuessUndf || isLong) {
                console.log(chalk.red("Please enter 1 letter."));
            } else if(isGuessNum) {        
                console.log(chalk.red("Numbers aren't accepted!"));
            } else {
                console.log(chalk.red("You guessed that already!"));
            }

            return false;

        } else {
            for(let i = 0; i < guess.length; i++) {
                if(!Moves[guess[i].toUpperCase()]) {
                    console.log(chalk.red("That character isn't valid!"));
                    return false;
                }
            }
            return true;

        }
    } // End of isValidMove() function

    validWord(referee) {
        let inputWord = readline.question(`${referee.name} please input a word: `);

        let wordValidity = false;
        while(!wordValidity) {
            let invalidChar = false;
            for(let i = 0; i < inputWord.length; i++) {
                if(!Moves[inputWord[i].toUpperCase()] && inputWord[i] !== " ") {
                    invalidChar = true;
                }
            } // Check for invalid character

            if(!isNaN(Number(inputWord)) || invalidChar) {
                console.clear();
                console.log("Please enter a valid word.");
                inputWord = readline.question("Input a word: ");

            } else {
                wordValidity = true;
                break;

            }
        } // End of validWord validity check

        return inputWord.toLowerCase();
    } // End of validWord() function

    placeLetter(guess, answer) {
        if(this.isValidMove(guess)) {
            for(let i = 0; i < answer.length; i++) {
                if(answer[i] === guess.toLowerCase()) {
                    this.board[i] = guess.toLowerCase();
                }
            }

            if(!this.board.includes(guess.toLowerCase())) {
                this.movesRemaining -= 1;
            }

            this.guesses.push(guess.toLowerCase());
        } else {
            return false;
        }// End of ifValidMove check & placement
    }// End of placeLetter() function

    doesGuessHaveNums(guess) {
        let nums = [0,1,2,3,4,5,6,7,8,9]
        for(let i = 0; i < guess.length; i++) {
            if(nums.includes(guess[i])) {
                return true;
            }
        }
        return false;
    } // End of doesGuessHaveNums() function

    isValidGuess(guess) {
        if(guess === undefined || guess.length !== this.board.length || this.doesGuessHaveNums(guess)) {
            return false;
        } else {
            return true;
        }
    } // End of isValidGuess() function

    guessWordComputer(referee, guesser) {
        let guess = guesser.randomGuess();

        if(!this.isValidGuess(guess)) {
            let validGuess = false;
            while(!validGuess) {
                guess = guesser.randomGuess();
            }
        }

        for(let i = 0; i < referee.newWord.length; i++) {
            if(referee.newWord[i] !== guess[i]) {
                this.movesRemaining = 0;
                return "The computer guessed wrong!";
            };
        }

        this.board = [...referee.newWord];
        return "The computer guessed correctly!";
    } // guessWordComputer() function

    guessWord(referee) {
        let guess = readline.question("Input your word guess: ");

        if(!this.isValidGuess(guess)) {
            let validGuess = false;
            while(!validGuess) {
                console.log("please enter a valid word guess.");
                guess = readline.question("");
                if(this.isValidGuess(guess)) {
                    validGuess = true;
                    break;
                }
            }
        }      

        for(let i = 0; i < referee.newWord.length; i++) {
            if(referee.newWord[i] !== guess[i].toLowerCase()) {
                this.movesRemaining = 0;
                return "You guessed wrong!";
            }
        }

        this.board = [...referee.newWord];
        return "You guessed the word!";
    } // End of guessWord() function

    isGameOver() {
        if(this.movesRemaining === 0) {
            return true; // If there are no moves remaining
        } else {
            return this.board.every((el) => el !== "_"); // If there are no underscores remaining
        }
    } // End of isGameOver() function
} // End of Board class

module.exports = Board;