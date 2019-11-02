/* HumanPlayer
Will need to getMove from player.
Display the board.
Possibly a select secret word that returns the length.
Possibly a givePostioins that returns an array of indicies.
Possibly a reveal word.*/


const readline = require("readline-sync");

class HumanPlayer {
    constructor(playerName) {
        this.playerName = playerName;
    }
    getMove() {
        return readline.question("Enter a letter")
        let playerGuess = readline.question("Please enter a letter!");
        return playerGuess.toLocaleLowerCase();
    }
}


module.exports = HumanPlayer;