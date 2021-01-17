const readline = require('readline-sync');
const chalk = require('chalk')
const dictionary = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"]

let word = dictionary[Math.floor(Math.random() * dictionary.length)] 
let wordSplit = word.split("") 
let board = displayUnderscores() 
let guess = 7
let gameData = {
  guessedLetters: "",
  incorrectGuessedLetter: ""
}
let removeDups = [] 



const getValidLetterGuess = () => {
  const guessIsValid = (letter) => {
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase() 
    && !board.includes(letter.toLowerCase()) && !gameData.incorrectGuessedLetter.includes(letter.toLowerCase())
  }
  
  let letter = ""
  while (!letter) {
    console.log(board.join(" "));
    let input = readline.question("Please enter your guess: ")
    if (guessIsValid(input)) {
      letter = input
      console.clear()
      console.log(updateData(letter));
      updateBoard(letter)
    } else {
      console.clear()
      console.log(updateData(letter));
      console.log("Please enter a valid letter\n")
    }
  }
  return letter.toLowerCase()
}



const updateBoard = (letter) => {
  for (let i = 0; i < wordSplit.length; i++) {
    if (letter.toLowerCase() === wordSplit[i]) {
      board[i] = wordSplit[i]
    }
  }
}



const isBoardFull = () => !board.includes("_")
 


function displayUnderscores() {
  return wordSplit.map(el =>  el = "_")
}



const rightGuesses = (guess) => {
  if (guess === 7) {
    return guess = removeDups.length
  } else {
    return (7 - guess) + removeDups.length
  }
}



const noDuplicates = () => {
  for (let i = 0; i < wordSplit.length; i++) {
    const element = wordSplit[i];
    if (!removeDups.includes(element)) {
      removeDups.push(element)
    }
  }
  return removeDups
}



const updateData = (userInput) => {
  noDuplicates()
  for (let i = 0; i < removeDups.length; i++) {
    const element = removeDups[i];
    if (userInput.toLowerCase() === element && !board.includes(element)) {
      gameData["guessedLetters"] += element + ", "
    } 
  } 
  if (!wordSplit.includes(userInput.toLowerCase()) && !gameData.incorrectGuessedLetter.includes(userInput.toLowerCase())) {
      gameData["incorrectGuessedLetter"] += userInput.toLowerCase() + ", "
      guess--
    }
  
  return `Guessed Letters: ` + gameData.guessedLetters + "\n" 
  + `Incorrect Letters: ` + gameData.incorrectGuessedLetter + "\n"
}



const startGame = () => {
  console.log(`Welcome to the Snowman Game!!` + chalk.gray(`\nCreated by Jordan Bobadilla\n`));
  let userName = readline.question(`Enter your name: `)
  console.clear()
  console.log(`\nHey, ${userName}!! It's time to have some fun!!`);
  console.log(`\nYour mission is to discover a ` + chalk.yellow(`random rord`) + ` from the dictionaire letter by letter,`);
  console.log(`but you only will have ` + chalk.yellow(7) + ` chances to make mistakes.\n`);
  if (readline.keyInYN(`Do you want to start?`)) {
    console.clear()
    mainGame()
  } else {
    console.clear()
    quitGame()
  }
}



const mainGame = () => {

  console.log(`Guessed Letters: ` + gameData.guessedLetters + "\n" 
  + `Incorrect Letters: ` + gameData.incorrectGuessedLetter + "\n");

  while (guess >= 0) {
    
    if (isBoardFull()) {
      console.clear()
      console.log(chalk.yellow(`Congratulations!!`) + ` You won!!\n`);
      console.log(`The right word is ` + chalk.yellow(`"${wordSplit.join("")}"`));
      console.log(`You completed the board in ` + chalk.yellow(`${rightGuesses(guess)} guesses!! `));
      if (readline.keyInYN(`\nDo you want to play again?\n`)) {
        console.clear()
        word = dictionary[Math.floor(Math.random() * dictionary.length)] 
        wordSplit = word.split("") 
        board = displayUnderscores() 
        guess = 7
        gameData = {
          guessedLetters: "",
          incorrectGuessedLetter: ""
        }
        removeDups = []
        mainGame()
      } else {
        console.clear
        quitGame()
      }
    } else if (guess === 7) {
      console.log(`\nYou have ` + chalk.yellow(`${guess}`) + ` opportunities to make mistakes\n`);
      
    } else if (guess > 1) {
      console.log(`\nYou have ` + chalk.yellow(`${guess}`) + ` chances left\n`);
    } else if (guess === 1) {
      console.log(`\nYou have ` + chalk.yellow(`${guess}`) + ` chance left\n`);
    } else {
      console.clear()
      console.log(`You ran out of chances\n`);
      console.log("The right word was " + chalk.yellow(`"${wordSplit.join("")}"`));
      console.log(`Sorry!! You have ` + chalk.yellow(`lost!!\n`));
      if (readline.keyInYN(`Do you want to play again?\n`)) {
        console.clear()
        word = dictionary[Math.floor(Math.random() * dictionary.length)] 
        wordSplit = word.split("") 
        board = displayUnderscores() 
        guess = 7
        gameData = {
          guessedLetters: "",
          incorrectGuessedLetter: ""
        }
        removeDups = []
        mainGame()
      } else {
        console.clear()
        quitGame()
      }
    }
    getValidLetterGuess() 
  }
}



const quitGame = () => {
  console.log(`\nPerfect. See you next time!\n`);
  process.exit()
}



startGame()