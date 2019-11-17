const ComputerPlayer = require("./ComputerPlayer.js")


class Board {
    constructor (){
        this.guessWord = "guessWord"
        this.displyWord = []
        this.guessedLetters = []
        this.wordFound = false
    }
    
    disply(){
        return this.displyWord = Array(this.guessWord.length).fill("_");
    }
    
    replace(letter){

        for(let i = 0; i <= this.guessWord.length-1;i++){
            if(this.guessWord[i] === letter){
                this.displyWord[i] = letter
            }
        }
    }
    isValidGuess(letter){
        if(this.guessWord.includes(letter) && !this.guessedLetters.includes(letter)){
            this.guessedLetters.push(letter);
            return true
        } else {
            this.guessedLetters.push(letter);
            return false
        }
    }
    
    fillSpace(letter){
        if(this.isValidGuess(letter) === true){
            this.replace(letter)
        } else {
            console.log("try again")
        }
    }
    wordCheck(){
        if(this.displyWord.join("") === this.guessWord){
            this.wordFound = true
        }
    }

    
}


module.exports = Board
