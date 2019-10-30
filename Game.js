const Board = require("./Board.js");
const HumanPlayer = require("./HumanPlayer.js");
const ComputerPlayer = require("./ComputerPlayer.js");
const readline = require('readline-sync');
const Dictionary = require("./dictionary.js");

class Game {
    constructor(guesser, referee) {
        this.guesser = guesser;
        this.referee = referee;
        this.board = new Board();
    } // End of constructor

    playerWin() {
        console.clear();
        console.log(this.referee.revealWord(this.board));

        if(!this.board.board.includes("_")) {
            if(this.guesser instanceof HumanPlayer) {
                return `${this.guesser.name} has won! It took ${11 - this.board.movesRemaining} moves`;
            } else {
                return `Computer has won! It took ${11 - this.board.movesRemaining} moves`;
            } // End of guesser check

        } else {
            if(this.guesser instanceof HumanPlayer) {
                if(this.referee instanceof HumanPlayer) {
                    return `${this.guesser.name} lost! ${this.referee.name} won!`;
                } else {
                    return `${this.guesser.name} lost!`
                }
            } else {
                return "You won!";
            }
        } // End of ifPlayerWon

    } // End of playerWin() function

    isGuesserComputer() {
        if(this.guesser instanceof ComputerPlayer) {
            return true;
        } else {
            return false;
        }

    } // End of isGuesserComputer() function

    computerGuesser() {
        while(!this.board.isGameOver(this.board.board)) {
            console.clear();
            console.log(this.board.board.join(" "));
            console.log(`guesses: ${this.board.guesses.join(", ")}`);
            console.log(`Moves remaining: ${this.board.movesRemaining}`)

            let computerGuess = this.guesser.getMove(this.referee, this.board.guesses, this.board);
            this.board.placeLetter(computerGuess, this.board.answer);
            console.log(computerGuess);

            let userContinue = readline.question("");

            this.board.isGameOver(this.board.board)

        } // End of gameplay loop

    }// End of computerGuesser() function

    playerGuesser() {
        while(!this.board.isGameOver(this.board.board)) {
            console.clear();
            console.log(this.board.board.join(" "));
            console.log(`guesses: ${this.board.guesses.join(", ")}`);
            console.log(`Moves remaining: ${this.board.movesRemaining}`);

            this.board.placeLetter(this.guesser.getMove(this.referee), this.board.answer);


            this.board.isGameOver(this.board.board);

        } // End of gameplay loop

    }// End of playerGuesser() function

    validNumberPlayers(playerInput) {
        let validInput = false;
        while(!validInput) {
            switch(playerInput) {
                case "2":
                    const p1 = new HumanPlayer();
                    const p2 = new HumanPlayer();
                    this.playerNames(p1, p2);

                    console.clear();

                    this.twoPlayerCharacterChoice(p1, p2);

                    console.clear();

                    this.referee.newWord = this.board.validWord(this.referee);

                    validInput = true;
                    break;

                case "1":
                    const player = new HumanPlayer();
                    const cpu = new ComputerPlayer();

                    this.playerNames(player);

                    console.clear();

                    this.guesserRefereeChoice(player, cpu);

                    validInput = true;
                    break;

                default:
                    console.log("Please input a valid number of players.");
                    playerInput = readline.question("How many players? (1 or 2) ");
            } // End of playerInput switch

        } // End of validInput loop
    } // End of validNumberPlayers() function

    playerNames(player1, player2) {
        if(player2) {
            player1.name = readline.question("Player 1, input your name. ");
            player2.name = readline.question("Player 2, input your name. ");
        } else {
            player1.name = readline.question("Input your name. ");
        }
    } // End of playerNames() function

    twoPlayerCharacterChoice(player1, player2) {
        let p1Choice = readline.question("Player 1 would you like to be the [1] guesser or the [2] referee? ");

        let validInput = false;
        while(!validInput) {
            switch(p1Choice) {
                case "1":
                    this.guesser = player1;
                    this.referee = player2;

                    validInput = true;
                    break;

                case "2": 
                    this.guesser = player2;
                    this.referee = player1;

                    validInput = true;
                    break;

                default: 
                    console.log("Please enter either 1 or 2.");
                    p1Choice = readline.question("Player 1 would you like to be the [1] guesser or the [2] referee? ");
            } // End of p1Choice switch
        } // End of validInput loop
    }  // End of twoPlayerCharacterChoice() function

    guesserRefereeChoice(player, cpu) {
        let playerChoice = readline.question("Would you like to be the [1] guesser or [2] referee? ");

        let playerChoiceComplete = false;
        while(!playerChoiceComplete) {
            console.clear();
            switch(playerChoice) {
                case "1": 
                    this.guesser = player;
                    this.referee = cpu;

                    this.difficultyChoice();
                    
                    playerChoiceComplete = true;
                    break;
                case "2":
                    this.guesser = cpu;
                    this.referee = player;
                    
                    this.referee.newWord = this.board.validWord(this.referee);

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

        switch(diffChoice) {
            case "1":
                this.referee.difficulty = 1;
                break;

            case "2":
                this.referee.difficulty = 2;
                break;

            case "3":
                this.referee.difficulty = 3;
                break;

            case "4":
                this.referee.difficulty = 4;
                break;
        } // End of diffChoice switch
    } // End of difficultyChoice() function

    play() {
        let playerNumber = readline.question("How many players? (1 or 2) ");
        this.validNumberPlayers(playerNumber);

        this.board.buildBoard(this.referee);

        if(this.isGuesserComputer()) {
            this.computerGuesser();
        } else {
            this.playerGuesser();
        }

        console.log(this.playerWin())

    } // End of play() function

} // End of Game() class

new Game().play();