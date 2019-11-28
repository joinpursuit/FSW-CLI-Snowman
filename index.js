import Board from "./Board.js"
import ComputerPlayer from "./ComputerPlayer.js"
import Game from "./Game.js"
import { hangmanPics } from "./hangmanPics.js"
import HumanPlayer from "./HumanPlayer.js"
import { allTheWords } from "./words.js"
import View from "./View.js"

document.addEventListener("DOMContentLoaded", () => {
    let marvin = new HumanPlayer("Marvin")
    let robo = new ComputerPlayer()
    let players = {}
    let hm = document.querySelector("#hm")
    players["ref"] = robo
    players["guesser"] = marvin
    let game = new Game(players)
    new View(game, hm)
    
})