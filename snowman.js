const readline = require('readline-sync');
const dictionary = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"]
let playerGuess = "";
let count = 10;
let dashSecret = "";
let gameStatus = false;
let incorrectLetter = [];
let correctLetter = [];
let activeWord = [];
let guessCount = 0;




function oneGuessLetter(incorrectLetter, correctLetter) {
  let merge = incorrectLetter.concat(correctLetter);
  let oneGuessArray = [];
  for (let i of merge) {
    if (oneGuessArray.indexOf(i) === -1) {
      oneGuessArray.push(i);
    }
    // console.log(`Oh Oh you have already tried that letter!`)
    //}
  }
  console.log(`These are your guessed letters: ${oneGuessArray.join(",")}`)

  //console.clear();
}
//console.clear();



const play = () => {
  console.log(`Thank you playing Snowman game.`);
  console.log(`The rules are simple enter the correct letters to guess the word \nwithin the amount of guesses you are allowed`)
  if (readline.keyInYN("Ready Set? ")) {
    startGame();
  } else {
    leaveGame();
  }
}

play();

const leaveGame = () => {
  console.log("Thanks for playing!")
  process.exit();
}


function displayWordInDash(word) {
  console.log(`Let's reveal the secret word: ${word}`);
}

function startGame() {
  activeWord = dictionary[Math.floor(Math.random() * dictionary.length)];
  makeBoard();
  while (!gameStatus) {
    console.log(activeWord);
    displayWordInDash(dashSecret.join(" "));
    console.log(`You have ${guessCount1()} remaining!`);
    console.log(`You have tried ${guessCount} times`);
    oneGuessLetter(incorrectLetter, correctLetter);
    // console.log(`You've guessed the following:${oneGuessLetter(incorrectLetter, correctLetter)}`);
    //console.log(`checking test array work ${test}`)
    playerGuess = getValidLetterGuess();
    replaceDash();
    //console.log(`Letter incorrect ${incorrectLetter}`);
    //console.log(`Letter correct ${correctLetter}`);
    //console.log(`You've guessed wrong: ${incorrectLetter}\nYou've guessed right: ${correctLetter}`)
  }
  //console.clear();
}

function guessCount1() {
  let counter = 10;
  incorrectLetter.forEach((el) => {
    if (el !== correctLetter) {
      counter -= 1
    } if (counter === 0) {
      console.log(`Sorry you have tried too many times!\nThe actual word is ${activeWord}`)
      process.exit();
    }
  })
  return counter;
}



function didWin() {
  if (!gameStatus);
  if (dashSecret.indexOf("_") < 0) {
    console.log(`Great job you reached the end!`)
    process.exit()
  }
}


function makeBoard() {
  dashSecret = [];
  for (let a = 0; a < activeWord.length; a++) {
    dashSecret.push("_");
  }
}


// function incorrectLetterGuess() {
//   if (incorrectLetter.includes(playerGuess)) {
//     console.log(`You have already used ${incorrectLetter}`);
//   } else {
//     console.log(`You guess ${playerGuess} is incorrect please try again!`);
//   }
//   return;
// }

function playerGuessIncludes() {
  if (!activeWord.includes(playerGuess)) {
    incorrectLetter.push(playerGuess);
    console.log(`${incorrectLetter} is incorrect!`)
  }
}


function replaceDash() {
  for (let p = 0; p <= activeWord.length; p++) {
    let currentLetter = activeWord[p];
    if (currentLetter === playerGuess) {
      console.log(`${playerGuess} is correct!`);
      correctLetter.push(currentLetter);
      dashSecret[p] = playerGuess;
    }
  }
  playerGuessIncludes();
  didWin()
  guessCount++
}


function getValidLetterGuess() {
  function guessIsValid(letter) {
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase()
  }
  let letter = ""
  while (!letter) {
    let input = readline.question("Please enter your guess: ")
    if (guessIsValid(input)) {
      letter = input
    } else {
      console.log("Please enter a valid letter")
    }
  }
  return letter.toLowerCase();
}


