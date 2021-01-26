const readline = require('readline-sync');
const dictionary = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"]
const randomWord = dictionary[Math.floor(Math.random() * dictionary.length)]; 
let name = readline.question("Welcome! What is your name?\n")
let randomWordArr = [] //empty arr
let charNumArr = []




const StartGame = () => {
  console.log("Guess the mystery word " + name + " .\n")
  if (readline.keyInYN(`Ready to play Snowman?`)) {
    numOfChar();
  } else {
    leaveGame();
  }
};

function leaveGame() {
  console.log("Come back soon!");
  process.exit();
};

let stats = {
  guess : "",
  guessedLetterArr : [],
  numOfGuesses : randomWord.length
}

function getValidLetterGuess() {
  function guessIsValid(letter) {
    return letter.length === 1 && letter.toUpperCase() !== letter.toLowerCase()
  }
  let letter = ""
  while (!letter) {
    let input = readline.question("Please enter guess:")
    if(guessIsValid(input)) {
      letter = input
    }
    else {
      console.log("Please enter valid letter")
    }
  }
  //return letter.toLowerCase()
  stats.guess=letter.toLowerCase()
  return stats.guess
}; //

function gameLoop() {
  for(let i = 0; i < randomWordArr.length; i ++) {
    if (randomWordArr[i] === stats.guess) {
      charNumArr[i] = stats.guess
    }
  }
  guessCount();
  c= charNumArr.join('')
  if(randomWord !== c && stats.numOfGuesses !== 0) {
    getValidLetterGuess();
    gameLoop();
  } else if(stats.numOfGuesses === 0) {
    console.log(" Sorry, " + name + " you lost!")
    console.log(`\nThe word was : ${randomWord}`)
  } else {
    console.log("Congrats " + name + " you won!" )
    wonGame()
  }
};



function numOfChar() {
  for(let char of randomWord) {
    randomWordArr.push(char)
    charNumArr.push('_')
  }
}
console.log(charNumArr.join(' '))
console.log(`You have ${stats.numOfGuesses} guesses left in this game.\n`)
//};

function guessCount() {
  if(!randomWordArr.includes(stats.guess)) {
    stats.numOfGuesses-- //decriment 
  }
  console.log(charNumArr.join(' '))
  if (stats.numOfGuesses === 1) {
    console.log("You have " + stats.numOfGuesses + " guesses remaining.")
  }else {
    console.log("You have " + stats.numOfGuesses + " guesses remaining.")
  }
  lettersGuessed();
}

function lettersGuessed() {
  if (stats.guess) {
    stats.guessedLetterArr.push(stats.guess)
  }
  if(stats.guessedLetterArr.length > 1) {
    console.log(`\nGuessed Letters : ${stats.guessedLetterArr}\n`)
  } else {
    console.log(`\nGuessed Letter: ${stats.guessedLetterArr}\n`)
  }
};

function wonGame() {
  if(randomWord.length - stats.numOfGuesses === 0) {
    console.log(name + " You are winner! You lost" + (randomWord.length - stats.numOfGuesses) + " chances.") 
  } else if (randomWord.length - stats.numOfGuesses === 1) {
    console.log(name + " You only guessed wrong " + (randomWord.length - stats.numOfGuesses) + " times!")
  }else {
    console.log(name + ", You guessed wrong " + (randomWord.length - stats.numOfGuesses) + " times.")
  }
}



StartGame()
getValidLetterGuess()
gameLoop()

