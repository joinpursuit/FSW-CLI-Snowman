// 4. Game 
//   * Should have guesser and referee. 
//   * Should have guesses remaining. 
//   * Should have a play function. 
//   * Should check for validity of guess. 
//   * Should have an isGameOver. 

const readline = require('readline-sync')
const ComputerPlayer = require('./ComputerPlayer.js')
const HumanPlayer = require('./HumanPlayer.js')
const Board = require('./Board.js')

class Game{
    constructor(name){
        this.computer = new ComputerPlayer()
        this.human = new HumanPlayer(name)
        this.board = new Board(this.computer.lengthSecretWord())
        this.guessRemaining = 5
   }

   // takes in the guesses remaing and put the lil dude at at index 
   displayAlien(num){
   
    let alien = [["🛸"],
            [],
            [],
            [],
            [],
            []]
    
    alien[num] = "🕴"

    for (let i = 0; i < alien.length; i++){
        console.log((alien[i].toString()));
    
    }
}

    //method that would run the game
   isGameOver(){
    if (this.guessesRemaining <= 0 || this.board.isComplete(this.computer.word)){
        return true;
    } else {
        return false;
    }
}

    // Main Play function 
playGame(){
    
    let allguessLetters = []
    let secretWord = this.computer.word
    let message = "Guess the word or your coming with me!"


while(!this.isGameOver()){

    console.clear()
    this.displayAlien(this.guessRemaining)
    this.board.displayBoard();
    console.log(allguessLetters.join())  
    console.log(message)
    console.log(`You have ${this.guessRemaining} remaining`)
    // console.log(secretWord) 


    let guess = this.human.getMove()

if (this.isValid(guess) && (!allguessLetters.includes(guess)) ){
    
    if(secretWord.includes(guess)){
        console.log(secretWord)
        this.board.addChar(this.computer.word, guess);
        allguessLetters.push(guess)
        message = "You Guessed Right"
    }else{
    allguessLetters.push(guess)
    this.guessRemaining -= 1
    message = "You Guessed Wrong "
    }

}else{
    message = "Invalid Move"
}
if(this.guessRemaining === 0){
    console.clear()
    this.board.displayBoard();
    console.log(`HA! the word was ${this.computer.revealWord()}`)
    console.log(`No more guesses ${name} 👽 time to start testing!`)
     break;
 }
if(this.board.isComplete(this.computer.word)){
    console.clear()

    this.board.displayBoard();
    // let secretWord = this.computer.word
    console.log(`UGH! ${name} YOUR FREE TO GO! RUN! GO ON!`)
     break;

    }


}

}
    
   //checks to see if the guess letter is in the alphabet, lowercase
isValid(guess){
    let valid = false
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    if(alphabet.includes(guess.toLowerCase())){
        valid = true
    } else {
        valid = false
    }
    return valid
}

//checks if gam is over
isGameOver(){
    if (this.guessesRemaining <= 0 || this.board.isComplete(this.computer.word)){
        return true;
    } else {
        return false;
    }
}
}


let name = readline.question("👾 Hi there Human, What is your name?")
let game = new Game(name)


game.playGame()

