import Board from "./Board.js"
import ComputerPlayer from "./ComputerPlayer.js"
import HumanPlayer from "./HumanPlayer.js"
import Game from "./Game.js"
import View from "./View.js"

document.addEventListener("DOMContentLoaded", () => {
    let el = document.querySelector("#hangman");
    let computerPlayerA = new ComputerPlayer();
    let board1 = new Board(computerPlayerA.getSecretWord());
    let game1 = new Game(new HumanPlayer(nameInput), computerPlayerA, board1);
    new View(el, game1);
})