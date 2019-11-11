const Board = require("./Board.js");
const HumanPlayer = require("./HumanPlayer.js");
const ComputerPlayer = require("./ComputerPlayer.js");
const readline = require('readline-sync');
const Dictionary = require("./dictionary.js");
const chalk = require("chalk")

class Game {
    constructor() {
        this.guesser;
        this.referee;
        this.player1;
        this.player2;
        this.board = new Board();
        this.dictionary = Dictionary;
        this.leaderboard = {
            player1: 0,
            player2: 0
        }
    } // End of constructor

    userInput(question) {
        return readline.question(chalk.yellow(question));
    } // End of userInput() function

    isValidInput(userInput, ...args) {
        return args.includes(userInput.toUpperCase());
    } // End of isValidInput() function

    isYesOrNo() {
        let yn = this.userInput(chalk.yellow("(Y/N) "));

        while(!this.isValidInput(yn, "Y", "N", "YES", "NO")) {
            console.log(chalk.red("Please enter 'Y' or 'N'"));
            yn = this.isYesOrNo();
        }

        return yn;
    } // End of isYesOrNo() function;

    validNumberPlayers(playerInput) {
        while(!this.isValidInput(playerInput, "2", "1")) {
            console.log(chalk.red("Please input a valid number of players."));
            this.userInput("How many players? (1 or 2) ");
        }

        switch(playerInput) {
            case "2":
                this.player1 = new HumanPlayer("Player 1")
                this.player2 = new HumanPlayer("Player 2")
                this.setPlayerNames();

                console.clear();

                this.setPlayerCharacter();

                console.clear();

                break;

            case "1":
                this.player1 = new HumanPlayer();
                this.player2 = new ComputerPlayer();

                this.setPlayerNames();

                console.clear();

                this.setSoloCharacter();

                break;
                    
            } // End of playerInput switch
    } // End of validNumberPlayers() function

    isTwoPlayers() {
        return this.player1 instanceof HumanPlayer && this.player2 instanceof HumanPlayer;
    } // End of isTwoPlayers() function

    playerNameLong(player) {
        console.log(chalk.red(`${player.name} your name is too long!`));
        return this.userInput(`${player.name} input your name. `);
    } // End of playerNameLong() function

    noNameInput(player) {
        console.log(chalk.red(`No name was inputted for ${player.name}.`))
        return this.userInput(`${player.name}, input your name. `);
    } // End of noNameInput() function

    isNameInvalid(name) {
        return name === "" || name.length > 10 
    } // End of isNameInvalid() function

    setPlayerNames() {
        if(this.player2 instanceof HumanPlayer) {
            let name1 = this.userInput("Player 1, input your name. (10 characters or less) ");
            let name2 = this.userInput("Player 2, input your name. (10 characters or less) ");

            while(this.isNameInvalid(name1) || this.isNameInvalid(name2)) {
                while(name1 === "" || name2 === "") {
                    if(name1 === "") {
                        name1 = this.noNameInput(this.player1);
                    } else {
                        name2 = this.noNameInput(this.player2);
                    }
                } // End of undefined name check

                while(name1.length > 10 || name2.length > 10) {
                    if(name1.length> 10) {
                        name1 = this.playerNameLong(this.player1);
                    } else {
                        name2 = this.playerNameLong(this.player2);
                    }
                } // End of long name check
            } // End of invalid name check
            
            this.player1.setName(name1);
            this.player2.setName(name2);

        } else {
            let name = this.userInput("Input your name. (10 characters or less) ");

            while(this.isNameInvalid(name)) {
                while(name === "") {
                    name = this.noNameInput(this.player1);
                } // End of undefined name check

                while(name.length > 10) {
                    name = this.playerNameLong(this.player1);
                } // End of long name check
            } // End of invalid name check

            this.player1.setName(name);

        }
    } // End of playerNames() function

    setPlayerCharacter() {
        let p1Choice = this.userInput(`${this.player1.name} would you like to be the [1] guesser or the [2] referee? `);

        while(!this.isValidInput(p1Choice, "1", "2")) {
            console.log(chalk.red("Please enter either 1 or 2."));
            p1Choice = this.userInput(`${this.player1.name} would you like to be the [1] guesser or the [2] referee? `);
        }

        switch(p1Choice) {
            case "1":
                this.guesser = this.player1;
                this.referee = this.player2;

                break;

            case "2": 
                this.guesser = this.player2;
                this.referee = this.player1;

                break;
            } // End of p1Choice switch
    }  // End of twoPlayerCharacterChoice() function

    setSoloCharacter() {
        let playerChoice = this.userInput("Would you like to be the [1] guesser or [2] referee? ");
        console.clear();

        while(!this.isValidInput(playerChoice, "1", "2")) {
            console.log("Please input '1' for guesser or '2' for referee")
            playerChoice = this.userInput("Would you like to be the guesser or referee? ");
        }

        switch(playerChoice) {
            case "1": 
                this.guesser = this.player1;
                this.referee = this.player2;

                this.difficultyChoice();
                    
                break;
            case "2":
                this.guesser = this.player2;
                this.referee = this.player1;

                break;
            } // End of playerChoice switch
            return playerChoice;
    } // End setSoloCharacter() function

    difficultyChoice() {
        let diffChoice = this.userInput("Choose a difficulty for the computer. (1 - 4) ");

        while(!this.isValidInput(diffChoice, "1", "2", "3", "4")) {
            console.log(chalk.red("Enter a number between 1 and 4."));
            diffChoice = this.userInput("Choose a difficulty for the computer. (1 - 4) ");
        } // End of diffChoice validity check

        this.referee.setDifficulty(Number(diffChoice));

        this.categoryChoice();
    } // End of difficultyChoice() function

    displayCategories() {
        console.log(chalk.magenta("[1] Movies"));
        console.log(chalk.magenta("[2] TV shows"));
        console.log(chalk.magenta("[3] Miscellaneous"));
        console.log(chalk.magenta("[4] Musicians"));
        console.log(chalk.magenta("[5] Books"));
        console.log(chalk.magenta("[6] Video Games"));
    } // End of displayCategories() function

    categoryChoice() {
        console.log(this.isRefereePlayer() ? chalk.yellow(`${this.referee.name} choose a category.`) : chalk.yellow(`${this.guesser.name} choose a category.`));
        this.displayCategories();
        let catChoice = this.userInput("");

        while(!this.isValidInput(catChoice, "1", "2", "3", "4", "5", "6")) {
            console.clear();
            console.log(chalk.red("Enter a number between 1 & 6"));
            this.displayCategories();
            catChoice = this.userInput("");
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

    guesserWin() {
        this.guesser.incrementWins();
        if(this.isGuesserPlayer()) {
            return `${this.guesser.name} has won! It took ${this.board.movesTaken} moves`;
        } else {
            return `Computer has won! It took ${this.board.movesTaken} moves`;
        }
    } // End of guesserWin() function

    refereeWin() {
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
    } // End of refereeWin() function

    playerWin() {
        console.clear();
        this.referee.category === "misc" ? this.board.buildVisualBoardMisc() : this.board.buildVisualBoard();
        console.log(this.referee.revealWord());

        if(this.isGuesserWin()) {
            console.log(this.guesserWin());
        } else {
            console.log(this.refereeWin());
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

    computerWordGuess() {
        // Depending on computer difficulty will get the computers guess at different points
    } // End of computerWordGuess() function

    computerGuesser() {
        while(!this.board.isGameOver(this.board.board)) {
            console.clear();
            
            this.board.printBoard(this.referee);

            if(this.board.movesTaken === 8) {
                this.board.guessWordComputer(this.referee, this.guesser);
                this.userInput(chalk.yellow("Press enter to continue."));
            }

            let computerGuess = this.guesser.getMove(this.referee, this.board.guesses, this.board);
            this.board.placeLetter(computerGuess, this.referee.newWord);
            console.log(computerGuess);
            this.board.movesTaken++;

            this.userInput("");

            this.board.isGameOver(this.board.board)

        } // End of gameplay loop

    }// End of computerGuesser() function

    guessWord() {
        console.log(chalk.yellow("Would you like to guess the word?"));
        let guessWord =  this.isYesOrNo();
        if(guessWord.toUpperCase() === "Y") {
            this.guessWordSure();
        }

    } // End of guessWord() function

    guessWordSure() {
        console.log(chalk.yellow("If you guess wrong you will lose. Are you sure?"));
        let areYouSure = this.isYesOrNo();

        if(areYouSure.toUpperCase() === "Y") {
            console.log(this.board.guessWord(this.referee));
        }

        this.userInput(chalk.yellow("Press enter to continue."));
    } // End of guessWordSure() function

    playerGuesser() {
        while(!this.board.isGameOver()) {
            console.clear();

            this.board.printBoard(this.referee);

            if(this.board.movesTaken % 3 === 0) {
                this.guessWord();
            }
            
            if(this.board.isGameOver()) {
                break;
            }

            let guess = this.guesser.getMove();
            while(!this.board.isValidMove(guess)) {
                guess = this.guesser.getMove();
            }

            this.board.placeLetter(guess, this.referee.newWord);
            
            this.board.movesTaken++;

            this.board.isGameOver();

        } // End of gameplay loop

    }// End of playerGuesser() function  
    
    isPlayAgain() {
        console.log(chalk.yellow("Would you like to play again? "));
        let playAgain = this.isYesOrNo();

        return playAgain.toUpperCase() === "Y";
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
        let playerNumber = this.userInput("How many players? (1 or 2) ");
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

            this.playerWin()

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