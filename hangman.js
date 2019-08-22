const readlineSync = require('readline-sync');
var randomWords = require('random-words');

let hiddenWord = [];
const test = '';

const maxTries = 9;
let remainingGuesses = 0;

function gameReset() {
  remainingGuesses = maxTries;

}

// this function generates a random word using a npm random word generator
const randomGen = () => {
  let word = randomWords()
  let wordGenerator = randomWords()
  let ranWordSplit = wordGenerator.split('');
  console.log(ranWordSplit, "the split word")
  return ranWordSplit
}

const underScore = (word) => {
  for (let i = 0; i < word.length; i++) {
    hiddenWord[i] = "_";
  }
  return hiddenWord
}
let randWord = randomGen()
let hideWord = underScore(randWord);

const validity = (arg1, arg2) => {
  // let randWord = randomGen(words)
  let attempt = 5;
  while (attempt > 0) {
    console.log(arg2);
    console.log(`you have ${attempt} left`);



    let char = readlineSync.question('It is time to guess a letter:\t')
    if (!arg1.includes(char)) {
      attempt--;

    } else {
      for (let l = 0; l < arg1.length; l++) {
        if (arg1[l] === char && arg2[l] === "_") {
          arg2[l] = char
          //console.log(arg2, "the arg2")
        }
      }
    }

    console.log(attempt);
  }

  if (hideWord === randWord) {
    return 'You won'
  }
}


const runGame = () => {
  validity(randWord, hideWord)
}


runGame()
// window.alert('i work')