const readline = require("readline-sync");
let dictionary = ["oh", "yes", "find", "where", "please","welcome", "is", "duck","nine", "company", "fresh", "road", "visit", "frequent", "search", "count", "slow", "fine", "doll", "teeny", "lovely", "jelly", "deserted", "unknown", "whisper", "bat", "pies", "afternoon", "brush", "cream", "fold", "airport", "relation", "hole", "hands", "lake", 
"flimsy", "bath", "female", "decide", "bounce", "volleyball", "pull", "bike", "woozy", "prickly", "egg", "grease", "ready", "property", "plain", "milk", "rapid", "oceanic"];
// let secretWord = null;
// let guess = undefined;


class ComputerPlayer {
    constructor(name) {
        this.name = name;
        this.secretWord = null;
        this.dictionary = dictionary;
        this.reamining = 9;
        this.guess = null;
        this.goodGuess = null;
        this.badGuess = null;
    }

    getWord(){
        this.secretWord = dictionary[Math.floor(Math.random()*(dictionary.length))];
        return this.secretWord.length
    }

    getReveal(){
        return this.secretWord
    }

    getMove (){ 
        this.guess = readline.question("Enter your guess   ");
        if(this.secretWord.includes(this.guess)){
                this.goodGuess = this.guess;
                return (`we have "${this.guess}" and move reamining ${this.reamining-=1}`)
            }
            else{
                    this.badGuess= this.guess;
                    return (`We dont have any "${this.guess}" in the word` + ` and move reamining ${this.reamining-=1}`)
                }
            }
    }
              
            
            let referee = new ComputerPlayer("Referee")
            
            console.log(referee.getWord())
            console.log(referee.getReveal())
            console.log(referee.getMove())
            module.exports = ComputerPlayer;
            