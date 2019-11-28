let {words} = require("./Words.js")

class ComputerPlayer {
    constructor(name = "Roger That") {
        this.name = name
        this.dictionary = words
    }
    selectWord() {
        let index = Math.floor(Math.random() * this.dictionary.length)
        this.word =  this.dictionary[index]
        return this.word.length
    }
    reveal() {
        return this.word
    }
    checkLetter(letter) {
        let indicies = []
        for(let i = 0; i < this.word.length; i++) {
            if(this.word[i] === letter) {
                indicies.push(i)
            }
        }
        return indicies
    }
}


module.exports = ComputerPlayer