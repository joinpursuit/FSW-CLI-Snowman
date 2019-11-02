let {dictionary} = require('./word.js')

class ComputerPlayer {
    constructor(computerPlayer) {
        this.computerPlayer = computerPlayer
        this.word = dictionary[(Math.floor(Math.random() * dictionary.length)]
    }
    wordToBeGuessed(){
        let wordToBeGuessed = this.word
        return wordToBeGuessed.length
    }
    revealWord() {
        let revealWord = []
        return this.word
    }
    guessChar(char){
        let guessChar = []
        for (let i = 0; i < this.word.length; i++) {
            if (guessLetter === this.word[i]){
                guessChar.push(i)
            }
        }
    }
    return guessChar
}
let mac = new ComputerPlayer("mac")
console.log("mac")
module.exports = ComputerPlayer








// const myFunction = function(arr1, arr2, callback) {
//     let finalArr = []
//     for (let i = 0; i < arr1.length; i++) {
//      let arr1Element = arr1[i]
//      let arr2Element = arr2[i]
//      finalArr.push(callback(arr1Element, arr2Element))
//     }
//     return finalArr
//    }
   
//    const myCallbackFunction = function(num1, num2) {
//     return num1 * num2
//  }
   
//    const result = myFunction([1,3,5,6], [2,0,4,5], myCallbackFunction)
//    console.log(result)