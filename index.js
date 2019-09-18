// Global Variables(
const content = document.getElementById("content")
const control = document.getElementById("control")
const message = document.getElementById("message")
const heading = document.getElementById("heading")

// Events 

control.addEventListener("click", (event) => {
    //changes the state after startgame button is clicked
    if (event.target.matches(".js-start")) {
        start()
    }
    if (event.target.matches(".js-submit")) {
        submit()
    }
    if (event.target.matches(".js-reset")){
        start()
    }
})

//Helpers

const getWord = () => {
    return state.words[Math.floor(Math.random() * state.words.length)];
}

const start = () => {
    const word = getWord()
    state.play = true
    state.selectedWord = word
    state.displayWord = createBlanks(word)
    state.guesses = []
    state.turns = 6
    render()
    return;
}

const createBlanks = (word) => {
    const displayWord = []
    for (let i = 0; i < word.length; i++) {
        displayWord.push("_ ")
    }
    return displayWord
}

const submit = () => {
    const getInput = document.getElementsByClassName("js-input")[0]
    let input = getInput.value
    checkLetters(input)

}
const renderContent = () => {
    return `
     <h4>Remaining Turns:${state.turns}</h4>
     <h4>Incorrect Letters:</h4>
     <p>${state.guesses.join(", ")}</p>
     <p>${state.displayWord.join("")}</p>`;
}

const renderControl = () => {
    return `<label>Please enter your letter</label>
    <input type="text" class= "js-input"> 
    <button class ="js-submit">Submit</button>
    <br/>
    <label>Click to choose a new word</label>
    <button class ="js-reset">Reset</button>`
}

const checkLetters = (input) => {
    let doesNotExist = true
    //check input against selectedWord
    //if it does, replace dash with letter
    for (let i = 0; i < state.selectedWord.length; i++) {
        if (input === state.selectedWord[i]) {
            state.displayWord[i] = state.selectedWord[i]
            doesNotExist = false
        }
    }
    if (doesNotExist) {
        state.turns = state.turns - 1
        state.guesses.push(input)
    }
  
    render()

}


//State
const state = {
    play: false,
    words: ["apple", "mango", "grapes", "cherries", "lemons"],
    selectedWord: "",
    displayWord: [],
    guesses: [],
    turns: 6
}


//Render
const render = () => {
    if (state.play === false) {
        heading.style.color = "blue"
        content.innerHTML = "<h2>Welcome to My Game</h2>"
        control.innerHTML = "<button class='js-start'>Start Game</button>"
        message.innerText = "Press start to begin your game"
        return;
    }
    if(state.turns > 0){
        heading.innerHTML = "Hangman Game"
        content.innerHTML = renderContent()
        control.innerHTML = renderControl()
        message.innerText = ""
        console.log(state);
     }else {
        heading.innerHTML = "You've Lost!!!"
        heading.style.color = "red"
        content.innerHTML = ""
        control.innerHTML =  `<label>Click to restart game</label>
        <button class ="js-reset">Restart</button>`
        message.innerText = ""
       

     }

    

}
render()