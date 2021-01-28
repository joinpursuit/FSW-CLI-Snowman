const chalk = require("chalk");
const readline = require("readline-sync");
const dictionary = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"]


let hiddenWord = "";
let guessLetter = ""
let hiddenWordArr = []

let playerObj = {
  guessCount: 8,
  guessesLeft: 8,
  guessesNumber: 0,
  guessHistory: [],
  chosenWord: "",
  displayWord: "",
  guessedWord: []
 
};

function getValidLetterGuess() {
  function guessIsValid(letter) {
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase() && !playerObj.guessHistory.includes(letter)
  }
  let letter = "";
  while (!letter) {
    let input = readline.question("Please enter your guess: ");
    if (guessIsValid(input)) {
      letter = input;
    } else {
      console.log("Please enter a valid letter");
    }
  }
  return letter.toLowerCase();
}


// quitGame
const quitGame = () => {
  console.log("Good bye");
  process.exit();

};
// start game, instructions. If wanna play = yes, then start game. if not, quitGame

const wannaPlay = () => {
  let answer = readline.keyInYN(
    "Welcome to Snowman game. Would you like to play? \n"
  );
  if (answer) {
    startGame();
  } else {
    quitGame();
  }
};

//start game, show guesses left
const startGame = () => {
  console.log(
    "Here are the instructions: You have " + playerObj.guessCount + " guesses to reveal a secret word"
  );
  hideWord();
  gameLoop();
};

// computer will pick random word from dictionary, user will see - - -
//playerObj.chosenWord = pickAWord();

function pickAWord() {
  playerObj.chosenWord =
    dictionary[Math.round((dictionary.length - 1) * Math.random())];
  // (Math.random() * (6 - 3) + 3)
  return playerObj.chosenWord;
  
}
//console.log("line 77", playerObj.chosenWord)


// hide random word behind blanks
function hideWord() {
  playerObj.chosenWord = pickAWord();
  //randomWord = pickAWord()
  console.log("Secret word is: ", playerObj.chosenWord)
  for (let i = 0; i < playerObj.chosenWord.length; i++) {
    if (i === 0) {
      hiddenWord = hiddenWord + "_";
    } else {
      hiddenWord = hiddenWord + " _";
    }
  }
  //console.log("line 92", hiddenWord)
}

const reStart = () => {
  let answer = readline.keyInYN("Would you like to play again?");
  if (answer) {
    hiddenWord = "";
    guessLetter = "";
    hiddenWordArr = [];
    playerObj = {
      guessCount: 8,
      guessesLeft: 8,
      guessesNumber: 0,
      guessHistory: [],
      chosenWord: "",
      guessedWord: [],
    };
    

   
    startGame();
  }
  quitGame();
  process.exit();
};

// user will enter guesses
// if guess is invalid, display message. Invalid guesses don't count against number of guesses
// display guesses left
// display letters that are guessed already
// display hiddenWord with guessed letters instead of _
// The game should continue until the user has won or lost
// Once the full word is guessed, the game should display how many guesses it took and display a victory message
// If the user runs out of guesses, the full word should be revealed and the game should display a defeat message

const gameLoop = () => {
  hiddenWordArr = hiddenWord.split("");
  let chosenWordArr = playerObj.chosenWord.split("");
  console.log(chalk.hex('ecc6ec').bold(hiddenWord));

  while (playerObj.guessesLeft > 0) {
    let guessLetter = getValidLetterGuess();
    for (let i = 0; i < playerObj.chosenWord.length; i++) {
      if (guessLetter === playerObj.chosenWord[i]) {
        hiddenWordArr[i * 2] = chosenWordArr[i];
        playerObj.guessedWord[i] = chosenWordArr[i];
      }
    }

    if (playerObj.chosenWord.split("").includes(guessLetter)) {
      playerObj.guessesNumber += 1;
      playerObj.guessHistory.push(guessLetter);
      console.log(chalk.hex('ffff00')("Your guess is correct"));
    } else {
      playerObj.guessesLeft -= 1;
      playerObj.guessesNumber +=1;
      playerObj.guessHistory.push(guessLetter);
      console.log(chalk.hex('ff0000')("Your guess is wrong"));
    }

    playerObj.displayWord = hiddenWordArr.join("");
    guessedWordStr = playerObj.guessedWord.join("");

    if (guessedWordStr === playerObj.chosenWord) {
      console.log(chalk.hex('ffff00').bold(`Congrats, you won! You revealed the secret word ${playerObj.chosenWord} with ${playerObj.guessesNumber} guesses.`));
      reStart()
    }
    console.log(chalk.hex('ecc6ec')(playerObj.displayWord));
    console.log(chalk.hex('b3ffcc')("Guessed letters: " + playerObj.guessHistory));
    console.log(`You have ${playerObj.guessesLeft} guesses left`);
  }
  console.log(chalk.hex('e60000').bold(`You lost. The secret word was ${playerObj.chosenWord}`));
  reStart()
};




wannaPlay();
