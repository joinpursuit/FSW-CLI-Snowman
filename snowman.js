const readline = require('readline-sync');
const dictionary = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"]

//set the objects
let snowmanObject = {
  chosenWord: '',
  hiddenWord: '',
  letter: '',
  arrayHiddenWord: [],
  listOfGuessedWords: '',
  arrayListOfGuessedWords: [],
  guessLeft: 6,
  currentSolvedWord: '',
  arrayCurrentSolvedWord: [],
  leaveChoice: '',
  guessCountNumber: 0
}
//quit the test after the user is done
const quitTest = () => {
  console.log("Goodbye!")
  process.exit()
}

//introducing the function
function introSnowman() {
  console.log('Welcome to my Snowman Game')
  let enterChoice = readline.keyInYN("Hello! Would you like to play the snowman game?")
    //to start the game
    if (enterChoice) {
        console.log("Let's start!")
        makeTheBlanks()
        gameLoop()

    }
    //if they do not want to take the test
    else {
        console.log("Wish you the best with your life!")
        quitTest()
    }
}
//To replace the hidden word with letters if guessed correctly
function gameLoop () {
  //make the functon run until no guesses left
  while (snowmanObject.guessLeft !== 0) {
    getValidLetterGuess()
    snowmanObject.arrayChosenWord = snowmanObject.chosenWord.split('') 
    snowmanObject.arrayHiddenWord = snowmanObject.hiddenWord.split('')
    //add letter to hidden word if correct letter is given
    for (let i = 0; i < snowmanObject.chosenWord.length; i++) {
      if (snowmanObject.chosenWord[i] === snowmanObject.letter) {
        snowmanObject.arrayHiddenWord[i * 2] = snowmanObject.arrayChosenWord[i]
        snowmanObject.arrayCurrentSolvedWord[i] = snowmanObject.arrayChosenWord[i]
      }
    }
    //negate the subtraction from receiving a guess by adding a point to guessLeft if a correct guess is given
    for (let i = 0; i < snowmanObject.chosenWord.length; i++) {
        if (snowmanObject.chosenWord[i] === snowmanObject.letter) {
          snowmanObject.guessLeft = snowmanObject.guessLeft + 1
            break
        }
    }
    //subtracting a point when guess is given
    snowmanObject.guessLeft = snowmanObject.guessLeft -1
    //need conditon to pass for you to move the gameLeft counter down if the letter is not guessed
    snowmanObject.chosenWord = snowmanObject.arrayChosenWord.join('') 
    snowmanObject.hiddenWord = snowmanObject.arrayHiddenWord.join('')
    snowmanObject.currentSolvedWord = snowmanObject.arrayCurrentSolvedWord.join('')
    //win message when word is guessed
    if (snowmanObject.currentSolvedWord === snowmanObject.chosenWord) {
      console.log("Congrats! You won the game!")
      console.log("You won the game in " + snowmanObject.guessCountNumber + " guesses!")
      restartTheGame()
    }
    //print hidden word for user
    console.log(snowmanObject.hiddenWord)
    showGuessedWord()
  }
  guessLeftCounter()
}
//restart function when user wins or loses
function restartTheGame() {
  leaveChoice = readline.keyInYN('Would you like to play again?')
  if (leaveChoice) {
    console.log("Let's start!")
    //recreate intital starting object
    snowmanObject = {
      chosenWord: '',
      hiddenWord: '',
      letter: '',
      arrayHiddenWord: [],
      listOfGuessedWords: '',
      arrayListOfGuessedWords: [],
      guessLeft: 6,
      currentSolvedWord: '',
      arrayCurrentSolvedWord: [],
      leaveChoice: '',
      guessCountNumber: 0
    }
    makeTheBlanks()
    gameLoop()
  }
  else {
    //user no longer wants to play
    console.log("Wish you the best with your life!")
    quitTest()
  }
}
//shows the words that the user already guessed
function showGuessedWord() {
  console.log('These are the list of letters you have already guessed: \n')
  if (snowmanObject.arrayListOfGuessedWords.length === 0) {
    snowmanObject.arrayListOfGuessedWords.push(snowmanObject.letter)
  }
  else {
    snowmanObject.arrayListOfGuessedWords.push((', ' + snowmanObject.letter))
  }
  snowmanObject.listOfGuessedWords = snowmanObject.arrayListOfGuessedWords.join('')
  console.log(snowmanObject.listOfGuessedWords)
}
//counts how many words the user has left until loses
function guessLeftCounter() {
  console.log("You have " + snowmanObject.guessLeft + " guesses remaining")
  if (snowmanObject.guessLeft === 0) {
    console.log('You lose')
    console.log('The word was ' + snowmanObject.chosenWord)
    restartTheGame()
  }
}

//picks a random word from the dictionary
function pickAWord() {
  return dictionary[Math.round((dictionary.length - 1) * (Math.random()))]
}

//turns the dictionary word into a hidden word
function makeTheBlanks() {
  snowmanObject.chosenWord = pickAWord()
  snowmanObject.hiddenWord = ''
  for (let i = 0; i < snowmanObject.chosenWord.length; i++) {
    if (i === 0) {
      snowmanObject.hiddenWord = snowmanObject.hiddenWord + '_'
    }
    else {
      snowmanObject.hiddenWord = snowmanObject.hiddenWord + ' _'
    }
  }
  console.log(snowmanObject.hiddenWord)
}

//recieves a valid guess
function getValidLetterGuess() {
  
  //put guessCounter here because user needs to be prompt about the number of guess remaining before asking for a guess
  guessLeftCounter()
  function guessIsValid(letterGiven) {
    //user cannot repeat the same letter so add a condition
    return (letterGiven.length === 1) && (letterGiven.toUpperCase() != letterGiven.toLowerCase()) && (!(snowmanObject.listOfGuessedWords.includes(letterGiven)))
  }
  //needs to stop taking in the same letter again
  snowmanObject.letter = ""
  while (!snowmanObject.letter) {
    let input = readline.question("Please enter your guess: ")
    if (guessIsValid(input)) {
      snowmanObject.letter = input
    } else {
      console.log("Please enter a valid letter")
    }
  }
  snowmanObject.guessCountNumber = snowmanObject.guessCountNumber + 1
  return snowmanObject.letter.toLowerCase()
}
//call the whole function
introSnowman()