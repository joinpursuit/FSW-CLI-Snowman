class View {
    constructor(game, el){
        this.game = game 
        this.el = el
        this.display()
        this.result()
        debugger
    }
    play() {
        while(!this.game.isGameOver()) {         
        }
    }
    display() {
        let message = document.createElement("h1")
        message.innerText = this.game["guesser"]["name"] + ", Guess a letter!"
        let input = document.createElement("input")
        let button = document.createElement("button")
        button.innerHTML = "SUBMIT"
        this.el.appendChild(input)
        this.el.appendChild(button)
        this.el.appendChild(message)
    }
    result() {
        let input = document.querySelector("input")
        let guess = input.value
        let button = document.querySelector("button")
        let guessedLetters = []
        button.addEventListener("click", () => {
            let li = document.createElement("li") 
            let ul = document.createElement("ul")    
            li.innerText =`${this.game.players["guesser"]} " has guessed.... ${guess}`
            ul.appendChild(li)
            guessedLetters.push(guess)
            let guesses = document.createElement("li")
            guess.innerText = guessedLetters
            ul.appendChild(guesses)
            guess = ""
            this.el.appendChild(ul)
        })
        this.el.appendChild(button)
        

    }
}

export default View;