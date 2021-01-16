const readline = require('readline-sync');
const dictionary = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"]


let guessCount = {maxGuess: 8, usedLetter: []}
let secretAnswer = []
let secretWordsArr = []

//Welcome function
const welcomeToStartGame = () => { // Added a welcome function! 
  console.log ("Hello, welcome to The Snowman Game")
  yourName = readline.question("What's your name?")
  if(readline.keyInYN(`${yourName}! What an awesome name! Are you ready play?`)){
    console.clear();
     secretVocab();
  } else {
    leaveGame();
  }
}

//secretVocab 
const secretVocab = () => {
  console.log("Great! Let's Go!!!")
  let secretWord = dictionary[Math.floor(Math.random() * dictionary.length)]
  let dash = "" // assigning a varible to dash and giving it an actual "_"
  for (let i = 0; i < secretWord.length; i++){ // running a loop through every letter in the word 
    dash += "_" + " " // would print out dashes instead of the word 
   
  } 
  console.log(dash) // I am console logging here because it will print the words in dashes 
  guessTheSecret(); // I am calling to anoter function 
//console.log("Here's your word" + " " +secretWord) // This just logs the word. Need to learn how to get the word to print in secret! 
}

//guessTheSecret
const guessTheSecret = () => {
  if(guessCount.maxGuess === 1) { // I am setting the condition that if the key in object of max guess have been reached 
    console.log(`You have ${guessCount.maxGuess} guess left`) // it would log the 1 guess that the player would have left 
  } else {
    console.log(`You have ${guessCount.maxGuess} guesses left`) // or it would log the many guesses that the player would have left 
  }
  guess = getValidLetterGuess() //Assigning guess so that guess could be the getValidLetterGuess function
  if(guessCount.usedLetter.includes(guess)) { // Here I set the condition that the value of the guess is being entered again
    console.log("Sorry you already used that letter! Try again!!") // here I am console logging the message for the player that they have already entered the previous letter. 
    guessTheSecret(); //I am calling it back to this function how that after the player input the letter it will come back here
  }
  rightOrWrongGuess(guess) //Calling the function to run to through the next function 
}


//rightOrWrongGuess
const rightOrWrongGuess = (guess) => { //With the "guess" param i am able to fun this function through the getValidLetter function. 
  if(secretWordsArr.includes(guess)) {
    guessRight(secretWordsArr, guess)
  } else {
    guessWrong()
  }
}

// //guessRight
const guessRight= (secretWordsArr, guess) => {
  let letterOfWord = []
  secretWordsArr.forEach((letter, i) => {
    if (letter === guess){
      letterOfWord.push(i)
    }
  })
  letterOfWord.forEach((letter) => {
    secretAnswer.splice(letter, 1, guess)
  }) 
  answer = secretAnswer.join(" ")
  guessCount.usedLetter.push(guess)
  usedLettersTogether = guessCount.usedLetter.join(" ") 
  console.log(`What you've guessed so far: ${usedLettersTogether}`)
  console.log(answer)
  if (dash < 0) { 
    console.log('Hey!!! You Won!!!')
  } else {
    guessTheSecret();
  }
}
//guessWrong
const guessWrong = (guess) => {
  guessCount.usedLetter.push(guess)
  allTheLetters = guessCount.usedLetter.join (" ")
  console.log(`Letters you have used : ${allTheLetters}`)
  guessCount.maxGuess --
  console.log("Yikes! Try again!")
  console.log(answer)
  if (guessCount.maxGuess === 0) {
    console.log(`Dang! You have no chances left! You lose!`)
    console.log(`Better luck next time ${yourName}`) 
    if (readline.keyInYN(`Would you like another chance to prove that this machine is infirior to you ${yourName}`)){
      secretVocab();
    } else {
      leaveGame();
    } 
  } else {
    guessTheSecret();
  }
}

//getValidLetterGuess
function getValidLetterGuess() {
  function guessIsValid(letter) {
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase()
  }
  let letter = ""
  while (!letter) {
    let input = readline.question("Please enter your guess: ")
    if (guessIsValid(input)) {
      letter = input
      guessRight();
    } else {
      console.log("Please enter a valid letter")
    }
  }
  return letter.toLowerCase()
}

//leaveGame
const leaveGame = () => {
  console.log ("Thank you for playing the game!")
  process.exit()
}

welcomeToStartGame();