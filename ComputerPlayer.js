const readline = require("readline-sync");
let dictionary = ["oh", "yes", "find", "where", "please","welcome", "is", "duck","nine", "company", "fresh", "road", "visit", "frequent", "search", "count", "slow", "fine", "doll", "teeny", "lovely", "jelly", "deserted", "unknown", "whisper", "bat", "pies", "afternoon", "brush", "cream", "fold", "airport", "relation", "hole", "hands", "lake", 
"flimsy", "bath", "female", "decide", "bounce", "volleyball", "pull", "bike", "woozy", "prickly", "egg", "grease", "ready", "property", "plain", "milk", "rapid", "oceanic"];
let secretWord = [];
let guess = undefined;


class ComputerPlayer {
    constructor(name) {
        this.name = name;
        this.secretWord = secretWord;
        this.dictionary = dictionary;
        this.guess = guess
    }
    getWord(){
        secretWord = dictionary[Math.floor(Math.random()*(dictionary.length))];
        return secretWord.length
    }
    getReveal(){
        return secretWord
    }
    getMove (){ 
        return guess = readline.question("Enter your guess   ");
    }
    // getPostion(guess){
    //     if(this.secretWord.includes(this.guess)){
    //         return (`we have ${this.guess}`)  
    //     }
    //     else{
    //         return ("Didnt have any in the word") + this.secretWord.includes(this.guess) + console.log(this.guess)
    //     }
    // }
}


let referee = new ComputerPlayer("Referee")

// console.log(referee.getWord())
// console.log(referee.getReveal())
// // console.log(referee.getMove())
// console.log(referee.getPostion(referee.getMove()))
// console.log(referee.getPostion(referee.getMove()))
// console.log(ComputerPlayer())

module.exports = ComputerPlayer;
