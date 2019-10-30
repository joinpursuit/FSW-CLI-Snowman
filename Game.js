const Board = require("./Board.js");
const HumanPlayer = require("./HumanPlayer.js");
const ComputerPlayer = require("./ComputerPlayer.js");
const readline = require('readline-sync');

class Game {
    constructor(guesser, referee) {
        this.guesser = guesser;
        this.referee = referee;
        this.board = new Board();
    } // End of constructor

    guesserRefereeChoice(player, cpu) {
        let playerChoice = readline.question("Would you like to be the [1] guesser or [2] referee? ");

        let playerChoiceComplete = false;
        while(!playerChoiceComplete) {
            console.clear();
            switch(playerChoice) {
                case "1": 
                    this.guesser = player;
                    this.referee = cpu;
                    
                    playerChoiceComplete = true;
                    break;
                case "2":
                    this.guesser = cpu;
                    this.referee = player;
                    
                    this.referee.newWord = this.board.validWord();

                    playerChoiceComplete = true;
                    break;
                default: 
                    console.log("Please input '1' for guesser or '2' for referee")
                    playerChoice = readline.question("Would you like to be the guesser or referee? ");
            } // End of playerChoice switch
        } // End of playerChoice check

        return playerChoice;

    } // End of guesserRefereeChoice() function

    playerWin() {
        console.clear();
        console.log(this.referee.revealWord(this.board));

        if(!this.board.board.includes("_")) {
            if(this.guesser instanceof HumanPlayer) {
                return `Player has won! It took you ${11 - this.board.movesRemaining} moves`;
            } else {
                return `Computer has won! It took ${11 - this.board.movesRemaining} moves`;
            } // End of guesser check

        } else {
            if(this.guesser instanceof HumanPlayer) {
                return "You lost!";
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

    play() {
        const player = new HumanPlayer();
        const cpu = new ComputerPlayer();

        this.guesserRefereeChoice(player, cpu);

        this.board.buildBoard(this.referee);

        if(this.isGuesserComputer()) {
            this.computerGuesser();
        } else {
            this.playerGuesser();
        }

        console.log(this.playerWin())

    } // End of play() function

} // End of Game() class

const newGame = new Game();
newGame.play();
