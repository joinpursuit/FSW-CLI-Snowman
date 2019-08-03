var readlineSync = require('readline-sync');

const hangman = () => {
  const wrdObj = (wrd) => {
    let wrdObj = {}
    for (let i = 0; i < wrd.length; i++) wrdObj[wrd[i].toLowerCase()] = false
    return wrdObj
  }

  const wrdArr = (wrd) => {
    let wrdArr = []
    for (let i = 0; i < wrd.length; i++) wrdArr.push(wrd[i].toLowerCase())
    return wrdArr
  }

  let choiceOfWrd = `MichaelAmparo`.toLowerCase()
  let hangWrd = wrdObj(choiceOfWrd)
  hangWrd[choiceOfWrd] = false
  let hangWrdArr = wrdArr(choiceOfWrd)
  let displayArray = []

  for (let i = 0; i < hangWrdArr.length; i++) hangWrd[i] ? displayArray.push(hangWrd[i]) : displayArray.push(`_`)
  let tries = {}
  let incorrect = []

  let count = 0
  while (count < 7) {
    const guessFullWord = readlineSync.keyInYN('Would you like to guess the word?\n')

    const userInput = guessFullWord ?
      readlineSync.question(`What is your guess?`) :
      readlineSync.keyIn(`Guess the next letter.\n`);

    // Check that we haven't look at this before
    if (tries[userInput] !== undefined) {
      console.log(`You've already guessed: ${userInput}\nTry again.\n`);
      continue;
    }

    // Check that user input is valid
    if (hangWrd[userInput] !== undefined) {
      hangWrd[userInput] = true
    } else {
      count++;
      incorrect.push(userInput)
    }

    //This makes sure that we cant try this input again
    tries[userInput] = true

    for (let i = 0; i < hangWrdArr.length; i++) if (hangWrd[hangWrdArr[i]]) displayArray[i] = hangWrdArr[i]
    console.log(displayArray.join(``));
    console.log(`You have ${6 - count} attempts left.\n`);


    if (displayArray.every(e => e !== `_`) || hangWrd[choiceOfWrd]) {
      console.log(`Congrats you won!!!!`);
      break;
    }
  }
  if (count === 7) {console.log(`Ha LOSER!!!\nTry again!`); hangman()}
}

hangman()