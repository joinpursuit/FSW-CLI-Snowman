const readlineSync = require('readline-sync');


//intoGame function shall welcome the user and ask them if they want to play
const play = () => {
  
  // Welcome Message
  console.log('Welcome to the snowman game, with Supercars!');
  console.log('In this game, you will be guessing the name of a car maker.');
  console.log('You will have a set amount of guesses');

  // Collect the user’s information 

  const user = readlineSync.question('First, what is your Name?\n')
  console.log('Hi ‘ + user + ‘, nice to have you!'); 

  const age = readlineSync.question('What is your age, ‘ + user + ‘ ? \n')
  if (age >= 18) { 
    console.log('Okay great! At ‘ + age + ‘ years old, you are old enough to drive and play this game. Lets get started!');
    startGame();
  } else if (age < 18) {
    console.log('Sorry, you arent old enough to drive, come back again when you can drive');
    endGame();
  } else {
    console.log('Not a valid entry, lets try again'); 
    console.log('restarting……');
    play();
  }

}

console.log('hello')


//Function for when the player loses

const youLose = () => {
  console.log('Oh no!!! Sorry you ran out of guesses!')

  if (readlineSync.KeyInYN('Would you like to play again? \n')) {
    console.log('Okay, here we go!!')
    //Call function to restart
  } else {
    console.log('Okay, thanks for playing?')
    endGame() //Call function to end game
  }

}

const startGame = () => {



console.log('I am thinking of the name of a random car marker, can you guess it?');

//store the user guess as a string
let guessCount = 0; //Storing the number of guesses
let guessLimit = 5; // Ten Guesses
let outOfGuesses = true;
let remainingGuesses = guessLimit - guessCount;


// Creating a array of car names and generating the random world using math.random
const dictionary = ['Aston Martin’, ‘Audi’, ‘Bentley’, ‘Chrysler’, ‘Dodge’, ‘Ferrari’, “Gumpert”, ‘Jaguar’, ‘Lamborghini’, ‘Maserati’, ‘Pagani’, ‘Spyker'];
let randomWord = dictionary[Math.floor(Math.random()*dictionary.length)] //storing the random carmaker name that computer will pick

console.log(randomWord) //Randomword is logging a different word everytime - can’t create placeholder

//source: https://www.programiz.com/javascript/examples/generate-random-strings

console.log('The computer choose a random car maker name!')
console.log('You have 10 guesses to start');
console.log('Hint: Always start with a vowel. :)');

let userGuess = readlineSync.question('What is your guess? \n');


while (!userGuess == randomWord && !outOfGuesses) { //Keep looping while userGuess is not equal to randomWorld    
  if(guessCount < guessLimit) {
    console.log('Type your guess');   
    guess = keyboardInput;
    guesscount++; //Guess count goes up
  } else {
    outOfGuesses = true;
    console.log('You have ' + remainingGuesses + ' left')
  }
}






getValidLetterGuess()

function getValidLetterGuess() { 

  function guessIsValid(letter) {  //Param is a letter
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase()
  }
  let letter = ""
  while (!letter) {
    let input = readlineSync.question('What is your guess?')
    if (guessIsValid(input)) {
      letter = input //If input is a letter then it is value
    } else {
      console.log('Please enter a valid letter') //If not a letter, then not valid
    }
  }
  return letter.toLowerCase()
}

}


const endGame = () => { //
  console.log('terminating……')
  process.exit()
  }
  


play()