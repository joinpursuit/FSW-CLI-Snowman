const readlineSync = require("readline-sync")
const Board = require('./Board.js')

class Game{
    constructor(words){
       this.words = words 
       this.chances = 6

    }
    playGame(){
        let possibleWord = getWord(words)
        let hidden = pickWord(possibleWord)
        console.log(hidden.join(""))
        let chances = 6
        while(chances>0 && hidden.join("" !==possibleWord)){
            const currWord = readline.question("type a letter please")
            if(currLetter(currWord,possibleWord)){
                console.log("that is correct")
                possibleWord = nextLetter(currWord,possibleWord,hidden)
                console.log(hidden)
            }else{
                console.log("that is incorrect")
                console.log(`you have ${chances -1}left`)
                chances --
            }

        }
    }
    
}
module.exports = Game;