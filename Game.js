// const HumanPlayer = require("./HumanPlayer.js")
// const ComputerPlayer = require("./ComputerPlayer.js")
// const Board = require("./Board.js")

// class Game{
//     constructor(player){
//         this.player = player;
//         this.board = new Board()
//     }
//     play(){
//         while(this.ComputerPlayer.checkBoard() === false){
//             this.board.displayBoard();
//             // console.log(this.player.name, "Its your turn")
//             let move = this.player.getMove();
//             this.board.addLetter();
//             if(this.board.checkBoard() === true){
//                 console.log("Congrats you guessed the word")
//             }
//         }
//     }
//     gameOver(){
//         if (this.movesRemaining === 0){
//             break;
//             console.log("Game over, you lose")
//         }
//     }
// }

// let player = new HumanPlayer ("You");
// let ref = new ComputerPlayer ();
// let game = new Game([player, ref])
// game.play

const Board = require ("./Board.js")
const HumanPlayer = require ("./HumanPlayer.js")
const ComputerPlayer = require ("./ComputerPlayer.js")

class Game{
    constructor(players){
        this.ref = players["ref"]
        this.guesser = players["guesser"]
        this.guessesRemaining = 6;
        this.guessLetters = [];
    }
    play(){
        let boardLength = this.ref.chooseSecretWord()
        this.board = new Board(boardLength);
        while(!this.isGameOver()){
            console.log("Letters guessed so far");
            console.log("Guessed so far" + this.guessLetters);
            this.guesser.displayBoard(this.board);
            let guess = "0";
            while(!this.isValidGuess(guess))
            guess = this.guesser.getMove();
            if(!this.isValidGuess(guess)){
                console.log("INVALID GUESS")
            }
            this.guessLetters.add(guess)
        let positions = this.ref.checkGuess(guess);
        if(positions.length === 0){
            this.guessesRemaining --;
        }
        this.board.addChar(postions, guess);
    }
    if(this.guessesRemaining > 0){
        console.log(this.guesser.name + " wins!")
        } else {
            console.log(this.ref.name + " wins!")
        }
    }
    isValidGuess(char){
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        return char.length === 1 && alphabet.includes(char) && !this.guessLetters.includes(char);
    }
    isGameOver(){
        return this.board.isComplete() || this.guessesRemaining === 0
    }
}

let human = new HumanPlayer("corey")
let robo = new ComputerPlayer();
let game = new Game()
game.play()