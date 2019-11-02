const word = require ("./dictionary")
//Using Russsian Roulette as an example
class ComputerPlayer{
    constructor(name = "Computer Ref"){
        this.name = name;
        this.word = word
    }
    hiddenWordLength(){
        let hiddenWord = this.word;
        return hiddenWord.length;
    }
}
console.log(word)
module.exports = ComputerPlayer