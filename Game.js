const Board = require("./Board.js");
const HumanPlayer = require("./HumanPlayer.js");
const ComputerPlayer = require("./ComputerPlayer.js");
const readline = require('readline-sync');
const Dictionary = require("./dictionary.js");

class Game {
    constructor(guesser, referee) {
        this.guesser = guesser;
        this.referee = referee;
        this.player1;
        this.player2;
        this.board = new Board();
        this.dictionary = Dictionary;
        this.leaderboard = {
            player1: 0,
            player2: 0
        }
    } // End of constructor

    validNumberPlayers(playerInput) {
        let validInput = false;
        while(!validInput) {
            switch(playerInput) {
                case "2":
                    this.player1 = new HumanPlayer();
                    this.player2 = new HumanPlayer();
                    this.setPlayerNames();

                    console.clear();

                    this.setPlayerCharacter();

                    console.clear();

                    validInput = true;
                    break;

                case "1":
                    this.player1 = new HumanPlayer();
                    this.player2 = new ComputerPlayer();

                    this.setPlayerNames();

                    console.clear();

                    this.setSoloCharacter();

                    validInput = true;
                    break;

                default:
                    console.log("Please input a valid number of players.");
                    playerInput = readline.question("How many players? (1 or 2) ");
            } // End of playerInput switch

        } // End of validInput loop
    } // End of validNumberPlayers() function

    isTwoPlayers() {
        return this.player1 instanceof HumanPlayer && this.player2 instanceof HumanPlayer;
    } // End of isTwoPlayers() function

    setPlayerNames() {
        if(this.player2 instanceof HumanPlayer) {
            this.player1.name = readline.question("Player 1, input your name. ");
            this.player2.name = readline.question("Player 2, input your name. ");
            while(this.player1.name === "" || this.player2.name === "") {
                if(this.player1.name === "") {
                    this.player1.name = readline.question("Player 1, input your name. ");
                } else {
                    this.player2.name = readline.question("Player 2, input your name. ");
                }
            }
        } else {
            this.player1.name = readline.question("Input your name. ");
            while(this.player1.name === "") {
                this.player1.name = readline.question("Player 1, input your name. ");
            }
        }
    } // End of playerNames() function

    setPlayerCharacter() {
        let p1Choice = readline.question(`${this.player1.name} would you like to be the [1] guesser or the [2] referee? `);

        let validInput = false;
        while(!validInput) {
            switch(p1Choice) {
                case "1":
                    this.guesser = this.player1;
                    this.referee = this.player2;

                    validInput = true;
                    break;

                case "2": 
                    this.guesser = this.player2;
                    this.referee = this.player1;

                    validInput = true;
                    break;

                default: 
                    console.log("Please enter either 1 or 2.");
                    p1Choice = readline.question(`${this.player1.name} would you like to be the [1] guesser or the [2] referee? `);
            } // End of p1Choice switch
        } // End of validInput loop
    }  // End of twoPlayerCharacterChoice() function

    setSoloCharacter() {
        let playerChoice = readline.question("Would you like to be the [1] guesser or [2] referee? ");

        let playerChoiceComplete = false;
        while(!playerChoiceComplete) {
            console.clear();
            switch(playerChoice) {
                case "1": 
                    this.guesser = this.player1;
                    this.referee = this.player2;

                    this.difficultyChoice();
                    
                    playerChoiceComplete = true;
                    break;
                case "2":
                    this.guesser = this.player2;
                    this.referee = this.player1;

                    playerChoiceComplete = true;
                    break;
                default: 
                    console.log("Please input '1' for guesser or '2' for referee")
                    playerChoice = readline.question("Would you like to be the guesser or referee? ");
            } // End of playerChoice switch
        } // End of playerChoice check

        return playerChoice;

    } // End of guesserRefereeChoice() function

    difficultyChoice() {
        let diffChoice = readline.question("Choose a difficulty for the computer. (1 - 4) ");

        while(diffChoice !== "1" && diffChoice !== "2" && diffChoice !== "3" && diffChoice !== "4") {
            console.log("Enter a number between 1 and 4.");
            diffChoice = readline.question("Choose a difficulty for the computer. (1 - 4) ");
        } // End of diffChoice validity check

        this.referee.setDifficulty(Number(diffChoice));

        this.categoryChoice();
    } // End of difficultyChoice() function

    categoryChoice() {
        console.log(this.isRefereePlayer() ? `${this.referee.name} choose a category.` : `${this.guesser.name} choose a category.`);
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

        this.referee.setCategory(Number(catChoice));

    } // End of categoryChoice() function

    isGuesserWin() {
        return !this.board.board.includes("_")
    } // End of isGuesserWin() function

    findGuesserPlayer() {
        return this.guesser === this.player1 ? "player1" : "player2";
    } // End of findGuesserPlayer() function

    findRefereePlayer() {
        return this.referee === this.player1 ? "player1" : "player2"
    } // End of findRefereePlayer() function

    playerWin() {
        console.clear();
        this.board.buildVisualBoard();
        console.log(this.referee.revealWord(this.board));

        if(this.isGuesserWin()) {
            this.guesser.incrementWins();
            if(this.isGuesserPlayer()) {
                return `${this.guesser.name} has won! It took ${this.board.movesTaken} moves`;
            } else {
                return `Computer has won! It took ${this.board.movesTaken} moves`;
            }
        } else {
            this.referee.incrementWins();
            if(this.isGuesserPlayer()) {
                if(this.isRefereePlayer()) {
                    return `${this.guesser.name} lost! ${this.referee.name} won!`;
                } else {
                    return `${this.guesser.name} lost!`
                }
            } else {
                return "You won!"
            }
        }
    } // End of playerWin() function

    isGuesserComputer() {
        return this.guesser instanceof ComputerPlayer
    } // End of isGuesserComputer() function

    isGuesserPlayer() {
        return this.guesser instanceof HumanPlayer;
    } // End of isGuesserPlayer() function

    isRefereePlayer() {
        return this.referee instanceof HumanPlayer;
    } // End of isRefereePlayer() function

    computerGuesser() {
        while(!this.board.isGameOver(this.board.board)) {
            console.clear();
            
            this.board.printBoard(this.referee);

            let computerGuess = this.guesser.getMove(this.referee, this.board.guesses, this.board);
            this.board.placeLetter(computerGuess, this.referee.newWord);
            console.log(computerGuess);
            this.board.movesTaken++;

            readline.question("");

            this.board.isGameOver(this.board.board)

        } // End of gameplay loop

    }// End of computerGuesser() function

    playerGuesser() {
        while(!this.board.isGameOver(this.board.board)) {
            console.clear();

            this.board.printBoard(this.referee);

            console.log("Would you like to guess the word?");
            let guessWord = readline.question("(Y/N) ");

            while(guessWord.toUpperCase() !== "Y" && guessWord.toUpperCase() !== "N") {
                console.log("Please enter 'Y' or 'N'");
                guessWord = readline.question("");
            }

            if(guessWord.toUpperCase() === "Y") {
                console.log("If you guess wrong you will lose. Are you sure?");
                let areYouSure = readline.question("(Y/N) ");

                while(areYouSure.toUpperCase() !== "Y" && areYouSure.toUpperCase() !== "N") {
                    console.log("Please enter 'Y' or 'N'");
                    areYouSure = readline.question("");
                }

                if(areYouSure.toUpperCase() === "Y") {
                    this.board.guessWord(this.referee);
                }

                let pressEnter = readline.question("Press enter to continue.");
                if(this.board.isGameOver()) {
                    break;
                }
            }

            this.board.placeLetter(this.guesser.getMove(), this.referee.newWord);

            // while(!this.board.placeLetter(this.guesser.getMove(), this.referee.newWord)) {
            //     console.log("Please enter a letter guess.");
            //     this.board.placeLetter(this.guesser.getMove(), this.referee.newWord);
            // }
            
            this.board.movesTaken++;

            this.board.isGameOver();

        } // End of gameplay loop

    }// End of playerGuesser() function  
    
    isPlayAgain() {
        console.log("Would you like to play again? ");
        let playAgain = readline.question("(Y/N) ");
        while(playAgain.toUpperCase() !== "Y" && playAgain.toUpperCase() !== "N") {
            console.log("Please enter 'Y' or 'N'");
            playAgain = readline.question("");
        }
        switch(playAgain.toUpperCase()) {
            case "Y":
                return true;
            
            case "N":
                return false;
        }
    } // End of isPlayAgain() function

    displayLeaderboard() {
        let p1 = this.player1.name.toUpperCase();
        let p2 = this.player2.name ? this.player2.name : "CPU";
        console.table({
            [p1]: this.player1.wins,
            [p2]: this.player2.wins
        });
    } // End of displayLeaderboard() function

    play() {
        console.clear();
        let playerNumber = readline.question("How many players? (1 or 2) ");
        this.validNumberPlayers(playerNumber);

        let replay = false;
        while(!replay) {
            this.board.buildBoard(this.referee);

            if(this.referee.isCategoryMisc()) {
                this.board.setMoves(9);
            }

            if(this.isGuesserComputer()) {
                this.computerGuesser();
            } else {
                this.playerGuesser();
            }

            console.log(this.playerWin())

            this.displayLeaderboard();

            if(this.isPlayAgain()) {
                this.board.initializeBoard();
                if(this.isTwoPlayers()) {
                    this.setPlayerCharacter();
                } else {
                    this.setSoloCharacter();
                }
            } else {
                replay = true;
            }
        } // End of replay loop
    } // End of play() function

} // End of Game() class

new Game().play();