import Board from "./Board.js";
import HumanPlayer from "./HumanPlayer.js"
import ComputerPlayer from "./CompPlayer"
import View from "./View.js";
import Game from "../Russian_Roulette/Game.js";
document.addEventListener("DOMContentLoaded", () => {
  let human = new HumanPlayer("Player")
  let compPlayer =  new ComputerPlayer()
  let game = new Game({ref:compPlayer, guesser: human})
  let hm = document.querySelector("#hm")
  let view = new View(game, hm)
})