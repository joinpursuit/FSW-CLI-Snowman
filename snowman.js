const readline = require('readline-sync');
const dictionary = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"]

let stats = {
 chosenWord: '',
 hidden: [],
 guesses: 0,
 guessLetter: '',
 underScores: '',
 rightOrWrong: false,
 wordFound: false,
 victory: 0,
 correctLetters: [],
 incorrectLetters: [],
 guessCount: 0
}

console.log("")
const playGame = () => {
    answer = readline.keyInYN("Do you want to play Snowman? \n")
    if(answer === true){
      console.log("")
      getValidLetterGuess()
    }
    
    else{
        console.log("")
        quitGame()
    }
}

function totalGuesses() {
  stats.guessCount = 0
  if(stats.chosenWord.length <= 10) {
  stats.guesses = stats.chosenWord.length + 4
  }
  else{
    stats.guesses = 10 + 2
  }
}

function hideWord() {
  let i = 0
  while(i < stats.chosenWord.length) {
    stats.hidden.push("_")
    i++
  }
  stats.underScores = stats.hidden.join(" ")
}

function getValidLetterGuess() {
  function guessIsValid(letter) {
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase()
  }

  stats.chosenWord = dictionary[Math.round(Math.random() * dictionary.length)]
  stats.hidden = []
  stats.wordFound = false
  stats.incorrectLetters = []
  stats.correctLetters = []

  totalGuesses()
  hideWord(stats.chosenWord)
  console.log("This is how long the word is: " + stats.underScores + "\n")
  let letter = ""
  console.log()
  while (stats.guesses > 0 && !(stats.wordFound)) {
    letter = ""
    console.log(`You have ${stats.guesses} guesses.\n`)
    console.log(`correct letters: ${stats.correctLetters}`)
    console.log(`incorrect letters: ${stats.incorrectLetters}`)
    let input = readline.question("Please enter your guess: ")
    console.log("")
    if (guessIsValid(input)) {
      letter = input
      stats.guessLetter = letter.toLowerCase()
      console.log(`You guessed: ${stats.guessLetter}\n`)
      checkLetterGuess(stats.guessLetter)
      checkVictoryStatus()
    } else {
      console.log("Please enter a valid letter")
    }
  }
  gameEnd()
}

function checkLetterGuess() {
  let i = 0
  let a = 0
  stats.rightOrWrong = false
  while(a < stats.correctLetters.length){
    if(stats.guessLetter === stats.correctLetters[a] || stats.guessLetter === stats.incorrectLetters[a]){
      console.log("You've already used this letter.\n")
      console.log(stats.underScores)
      console.log('')
      return
    }
    a++
  }
  while(i < stats.chosenWord.length){
    if(stats.chosenWord[i] === stats.guessLetter){
      stats.hidden = stats.underScores.split(" ")
      stats.hidden[i] = stats.guessLetter
      stats.underScores = stats.hidden.join(" ")
      stats.rightOrWrong = true
    }
    i++
  }
  if(stats.rightOrWrong === true) {
    stats.guessCount++
    stats.correctLetters.push(stats.guessLetter)
    console.log("You guessed right!\n")
    console.log(stats.underScores)
    console.log('')
    return
  }
  else{
    stats.guessCount++
    stats.incorrectLetters.push(stats.guessLetter)
    console.log("You guessed wrong.\n")
    console.log(stats.underScores)
    console.log('')
    stats.guesses--
    return
  }
}

function checkVictoryStatus() {
  if(!(stats.underScores.includes("_"))){
    stats.wordFound = true
  }
  return
}

function gameEnd() {
  if(stats.wordFound === false) {
    console.log("You are out of guesses. the word was: " + stats.chosenWord + "\n")
  }
  else{
    console.log((`You win! It took ${stats.guessCount} guesses to solve the word, ${stats.chosenWord}!`))
  }
  let question = readline.keyInYN("Would you like to play again? \n")
  if(question === true) {
    console.log('')
    getValidLetterGuess()
  }
  else{
    console.log('')
    quitGame()
  }
}

const quitGame = () => {
  console.log("That's too bad. Don't worry, we will patiently wait for your return!")
  process.exit()
  }

  playGame()
  // hideWord(chosenWord)