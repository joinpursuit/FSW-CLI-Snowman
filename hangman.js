var readlineSync = require('readline-sync');

/*This will test the input and check whether it is a valid character.
If it is then then it'll change its value to true.
Otherwise it'll increase the count.*/

/*This next part will turn the word or phrase into an object*/
const wrdObj = (wrd) => {
  let wrdObj = {}
  for (let i = 0; i < wrd.length; i++) wrdObj[wrd[i].toLowerCase()] = false
  return wrdObj
}

/*This next part will turn the word or phrase into an array*/
const wrdArr = (wrd) => {
  let wrdArr = []
  for (let i = 0; i < wrd.length; i++) wrdArr.push(wrd[i].toLowerCase())
  return wrdArr
}
let choiceOfWrd = `MichaelAmparo`
let hangWrd = wrdObj(choiceOfWrd)
let hangWrdArr = wrdArr(choiceOfWrd)
let displayArray = []
for (let i = 0; i < hangWrdArr.length; i++) hangWrd[i] ? displayArray.push(hangWrd[i]) : displayArray.push(`_`)
let tries = {}
let incorrect = []
for (var count = 0; count < 7; count++) {
  let guess = readlineSync.keyIn(`Guess the next letter.\n`)//take guess
  if (tries[guess] !== undefined) {
    console.log(`You've already guessed: ${guess}`);
    console.log(`Try again.\n`);
    count--
    continue;
  }
  if (hangWrd[guess] !== undefined) {
    hangWrd[guess] = true
    count--
  } else incorrect.push(guess)
  for (let i = 0; i < hangWrdArr.length; i++) if (hangWrd[hangWrdArr[i]]) displayArray[i] = hangWrdArr[i]
  console.log(displayArray.join(``));
  console.log(`You have ${6 - count} attempts left.\n`);
  tries[guess] = true
  if (displayArray.every(e => e !== `_`)) {
    console.log(`Congrats you won!!!!`);
    break;
  }
}

if (count === 7) console.log(`Ha LOSER!!!\nTry again!`)
