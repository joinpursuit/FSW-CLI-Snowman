document.addEventListener("DOMContentLoaded", () => {
  pickAWord(wordList);
  displayWord(word);
  playerTurns(word);
  submitLetter();
});

let wordList = [
  "adjustment",
  "advertisement",
  "beautiful",
  "breath",
  "competition",
  "cushion",
  "destruction",
  "distance",
  "edge",
  "existence",
  "feather",
  "flag",
  "glass",
  "government",
  "hammer",
  "humour",
  "idea",
  "island",
  "jelly",
  "jump",
  "keep",
  "kettle",
  "lead",
  "limit",
  "market",
  "metal",
  "nail",
  "natural",
  "observation",
  "open",
  "page",
  "physical",
  "quality",
  "quite",
  "representative",
  "roof",
  "seat",
  "steel",
  "theory",
  "tight",
  "under",
  "unit",
  "view",
  "violent",
  "watch",
  "wood",
  "wool",
  "year",
  "yellow",
  "zebra",
  "zealot",
];

let word;
let hiddenWord;
let turnsNum;

const pickAWord = (wordList) => {
  let num = wordList.length;
  let random = Math.floor(Math.random() * num);
  word = wordList[random];
  turnsNum = word.length;
  console.log(word);
};

const displayWord = (word) => {
  hiddenWord = document.querySelector("#hiddenWord");
  let newStr = word.split("");
  for (let i = 0; i < newStr.length; i++) {
    newStr[i] = "_";
  }
  hiddenWord.innerText = newStr.join(" ");
};

const playerTurns = () => {
  let turns = document.querySelector("#turns");
  turns.innerText = `You have ${turnsNum} to guess the word`;
};

const guessLetter = (word) => {
  let letter = document.querySelector("#letter");
  let message = document.querySelector("#message");
  let letterVal = letter.value;
  let arr = word.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === letterVal) {
      console.log("letter match");
      let newHiddenWord = hiddenWord.innerText.split(" ");
      newHiddenWord[i] = letterVal;
      hiddenWord.innerText = newHiddenWord.join(" ");
      message.innerText = "Correct!! Guess Another Letter";
      letter.value = "";
      break;
    } else {
      message.innerText = "Wrong!! Guess Another";
      letter.value = "";
    }
  }
  turnsNum = turnsNum - 1;
  playerTurns();
};

const submitLetter = () => {
  let button = document.querySelector("#submit");
  button.addEventListener("click", () => {
    guessLetter(word);
  });
};
