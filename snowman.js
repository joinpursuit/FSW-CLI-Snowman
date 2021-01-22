const readline = require('readline-sync');
const dictionary = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"]

let object = {
  randomDictionaryWord: dictionary[Math.floor((dictionary.length -1) * (Math.random()))],
  randomDictionaryWordArray: [],
  underdash: [],
  entireUnderdash: "",
  letter: "",
  guessedLetters: "",
  guessedLettersArray: [],
  guesses: 8,
  guessesCounter: 0,
  arrayCurrentSolvedWord: [],
  currentSolvedWord: "",
  leaveOrNot: "",
}

console.log(object.randomDictionaryWord)

const restartGame = () => {
  leaveOrNot = readline.keyInYN("Would you like to play again?\n")
  if(leaveOrNot) {
    console.log("Another round!~")
    object = {
      randomDictionaryWord: dictionary[Math.floor((dictionary.length -1) * (Math.random()))],
      randomDictionaryWordArray: [],
      underdash: [],
      entireUnderdash: "",
      letter: "",
      guessedLetters: "",
      guessedLettersArray: [],
      guesses: 8,
      guessesCounter: 0,
      arrayCurrentSolvedWord: [],
      currentSolvedWord: "",
      leaveOrNot: "",
    }
    gameLoop()
  } else {
    quitGame()
  }
}


const quitGame = () => {
  console.log("Goodbye! Have a nice life! ~")
  process.exit()
}



function snowmanIntro () {
  let nameInput = readline.question ("\nWhat is your name?\n")
  console.log("\nHello! " + nameInput + ". Welcome to my guessing game!\n" +
  "\n Please enter a letter from A to Z when asked to guess!" + 
  "\n There will be 8 chances for you to guess the letters in the word." +
  "\n When the letter you guessed is correct, it will appeared in the corresponding spot." +
  "\n When the letter you guessed is not in the word, you will be prompted to guess again and lose a guessing chance." +
  "\n In order to win, you must guess all the letters in the word before your guessing chances reaches 0." +
  "\n Or else, you lose :(")
  let playOrNot = readline.question("\nWould you like to play? [Please enter: Yes(Y) or No(N)]\n")
  playOrNot.toLowerCase() === "yes" || playOrNot.toLowerCase() === "y" ? gameLoop() : quitGame()
}


function chooseAWord () {
  object.randomDictionaryWordArray = object.randomDictionaryWord.split("")
  object.randomDictionaryWordArray.forEach((elem) => {
    object.underdash.push ("_")
  })
  object.entireUnderdash = object.underdash.join(" ")
  console.log(`\n${object.entireUnderdash}`)
  console.log(`You have ${object.guesses} guesses to start with.`)
}



// loop and push 
const gameLoop = () => {
  chooseAWord()
  while (object.guesses !== 0) {
    getValidLetterGuess()
    object.randomDictionaryWordArray = object.randomDictionaryWord.split('')
    object.underdash = object.entireUnderdash.split('')
    //add letter to hidden word if correct letter is given
    for (let i = 0; i < object.randomDictionaryWord.length; i++) {
      if (object.randomDictionaryWord[i] === object.letter) {
        object.underdash[i * 2] = object.randomDictionaryWordArray[i]
        object.arrayCurrentSolvedWord[i] = object.randomDictionaryWordArray[i]
      }
    }
    //negate the subtraction from receiving a guess by adding a point to guessLeft if a correct guess is given
    for (let i = 0; i < object.randomDictionaryWord.length; i++) {
        if (object.randomDictionaryWord[i] === object.letter) {
          object.guesses = object.guesses + 1
            break
        }
    }
    //subtracting a point when guess is given
    object.guesses = object.guesses -1
    //need conditon to pass for you to move the gameLeft counter down if the letter is not guessed
    object.randomDictionaryWord = object.randomDictionaryWordArray.join('')
    object.entireUnderdash = object.underdash.join('')
    object.currentSolvedWord = object.arrayCurrentSolvedWord.join('')
    //win message when word is guessed
    if (object.currentSolvedWord === object.randomDictionaryWord) {
      console.log("Congrats! You won the game!")
      console.log("You won the game in " + object.guessesCounter + " guesses!")
      restartGame()
    }
    //print hidden word for user
    console.log(object.entireUnderdash)
    showGuessedWord()
  }
  guessLeftCounter()
}


// with guesses i would check if the guess is equal to a letter in my random word array loop through random word array to see if my guess is there so if my guess was a i would loop through your random word to look for a 
// then you replace it the underscore with a
//then if my join dash array check if it equal to random word so if its not equal number of chances are not zero then call the guess valid letter function again and then call your function  . guess that checks for the letter


function showGuessedWord() {
  console.log('These are the list of letters you have already guessed: \n')
  if (object.guessedLettersArray.length === 0) {
    object.guessedLettersArray.push(object.letter)
  }
  else {
    object.guessedLettersArray.push((', ' + object.letter))
  }
  object.guessedLetters = object.guessedLettersArray.join('')
  console.log(object.guessedLetters)
}
//counts how many words the user has left until loses
function guessLeftCounter() {
  console.log("You have " + object.guesses + " guesses remaining")
  if (object.guesses === 0) {
    console.log('You lose')
    console.log('The word was ' + object.randomDictionaryWord)
    restartGame()
  }
}



// Function was given 
function getValidLetterGuess() {
  guessLeftCounter()
  function guessIsValid(letter) {
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase() && !(object.guessedLetters.includes(letter))
  }
  object.letter = ""
  while (!object.letter) {
    let input = readline.question("\nPlease enter your guess: ")
    if (guessIsValid(input)) {
      object.letter = input
    } else {
      console.log("Please enter a valid letter from A -Z.")
    }
  }
  object.guessesCounter = object.guessesCounter + 1
  return object.letter.toLowerCase()
}



snowmanIntro()








// const winOrlose = () => {
//   if(object.guesses === 0) {
//     console.log("\nSorry! You ran out of guesses, you lost!")
//     console.log(`The word was ${object.randomDictionaryWord}`)
//     process.exit()
//   } else if (!object.randomDictionaryWordArray.includes("_")) {
//       console.log(`Yay! You won! The word was ${object.randomDictionaryWord}`)
//       process.exit()
//   }
// }


