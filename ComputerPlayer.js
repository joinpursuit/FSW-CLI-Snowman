const {allTheWords} = require("./dictionary.js")

// const word = require ("./dictionary")
// //Using Russsian Roulette as an example
// class ComputerPlayer{
//     constructor(name = "Computer Ref"){
//         this.name = name;
//         this.word = word
//     }
//     hiddenWordLength(){
//         let hiddenWord = this.word;
//         return hiddenWord.length;
//     }
// }
// console.log(word)
// module.exports = ComputerPlayer


class ComputerPlayer{
    constructor(name = "Robo Bobo"){
        this.dictionary = allTheWords;
    }
    chooseSecretWord(){
        let idx = Math.floor(Math.random() * this.dictionary.length)
        this.secretWord = this.dictionary[idx];
        return this.secretWord.length;
    }
    checkGuess(char){
        let indicies = [];
        for(let i =0; i < this.secretWord.length; i++){
            if(this.secretWord[i] === char){
                indicies.push(i);
            }
        }
        return indicies
    }
    reveal(){
        return this.secretWord;
    }
}

module.exports = ComputerPlayer;

// let robo = new ComputerPlayer();
// console.log(robo.chooseSecretWord())
// console.log(robo);
// console.log(robo.reveal());
// console.log.log(robo.checkGuess("a"));