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

                    this.guesser.word = this.board.validWord();
                    
                    playerChoiceComplete = true;
                    break;
                case "2":
                    this.guesser = cpu;
                    this.referee = player;

                    playerChoiceComplete = true;
                    break;
                default: 
                    console.log("Please input '1' for guesser or '2' for referee")
                    playerChoice = readline.question("Would you like to be the guesser or referee? ");
            } // End of playerChoice switch
        } // End of playerChoice check

        return playerChoice;

    } // End of guesserRefereeChoice() function

    playerWin(board) {
        console.clear();
        console.log(this.referee.revealWord(this.board));

        if(!board.board.includes("_")) {
            return `Player has won! It took you ${11 - this.board.movesRemaining} moves`;
        } else {
            return "You lost!";
        } // End of ifPlayerWon

    } // End of playerWin() function

    play() {
        const player = new HumanPlayer();
        const cpu = new ComputerPlayer();

        this.guesserRefereeChoice(player, cpu);

        this.board.buildBoard(this.referee);

        while(!this.board.isGameOver(this.board.board)) {
            console.clear();
            console.log(this.board.board.join(" "));
            console.log(`guesses: ${this.board.guesses.join(", ")}`);
            console.log(`Moves remaining: ${this.board.movesRemaining}`)
            this.board.placeLetter(this.guesser.getMove(this.referee), this.board.answer)
            this.board.isGameOver(this.board.board);
        } // End of gameplay loop

        console.log(this.playerWin())

    } // End of play() function
}

const newGame = new Game();
newGame.play();
