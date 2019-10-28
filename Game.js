const Board = require("./Board.js");
const HumanPlayer = require("./HumanPlayer.js");
const ComputerPlayer = require("./ComputerPlayer.js");

class Game {
    constructor(guesser, referee) {
        this.guesser = guesser;
        this.referee = referee;
    } // End of constructor

    playerWin(board, referee) {
        console.clear();
        console.log(referee.revealWord(board));

        if(!board.board.includes("_")) {
            return "Player has won!";
        } else {
            return "You lost!";
        } // End of ifPlayerWon
    } // End of playerWin() function

    play(board, guesser, referee) {
        board.buildBoard(referee);

        while(!board.isGameOver(board.board)) {
            console.clear();
            console.log(board.board.join(" "));
            console.log(`guesses: ${board.guesses.join(", ")}`);
            console.log(`Moves remaining: ${board.movesRemaining}`)
            board.placeLetter(guesser.getMove(), board.answer)
            board.isGameOver(board.board);
        } // End of gameplay loop

        console.log(this.playerWin(board, referee))
    } // End of play() function
}

const cpu = new ComputerPlayer();
const player = new HumanPlayer();
const newGame = new Game(player, cpu);
let hangman = new Board();
console.log(cpu.getMove())
// newGame.play(hangman, player, cpu);
