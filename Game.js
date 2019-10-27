const Board = require("./Board.js");
const HumanPlayer = require("./HumanPlayer.js");
const ComputerPlayer = require("./ComputerPlayer.js");

class Game {
    constructor(guesser, referee) {
        this.guesser = guesser;
        this.referee = referee;
    }

    playerWin(board) {
        console.log(board.board)
        if(!board.board.includes("_")) {
            return "Player has won!";
        } else {
            return `The word was ${board.answer}. You lost!`;
        }
    }

    play(board,player) {
        while(!board.isGameOver(board.board)) {
            console.clear();
            console.log(board.board);
            console.log(board.movesRemaining)
            board.placeLetter(player.getMove(), board.answer)
            console.log(board.guesses);
            board.isGameOver(board.board);
        }
        console.log(this.playerWin(board))
    } 
}

const cpu = new ComputerPlayer();
const player = new HumanPlayer();
const newGame = new Game(player, cpu);
let hangman = new Board();
hangman.buildBoard(cpu);
newGame.play(hangman, player);
