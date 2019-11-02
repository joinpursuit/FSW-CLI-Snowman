



class ComputerPlayer {
    constructor(){
    } 
    dictionary(wordArr){
        this.dictionary = wordArr
        this.secretWord = this.dictionary[Math.floor(Math.random() * this.dictionary.length)]
        
    }
    secretWordLength(){
        return this.word.length

    }
    reveal(){
        return this.word
    }

    
    
} 


let allWords = ['hello','bee','kick','komuchi']
let compute = new ComputerPlayer()
compute.dictionary(allWords)

console.log(compute.secretWord())