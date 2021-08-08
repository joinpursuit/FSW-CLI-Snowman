const readline = require('readline-sync');
const dictionary = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young",'zebra']

const wordGrab = () => {//call rng and call the index of the dictionary array to produce a word
  return dictionary[Math.floor(Math.random() * dictionary.length)]
}

let word = wordGrab()

let playStat = {
  chances: word.length+3,
  lettersGuessedAlready: [],//if player chooses a letter it goes here
  guesses: 0
}

const buildGameBoard = (inputWord) => {
  let hiddenWord = [];
  for (let i = 0; i < inputWord.length; i++) {
    hiddenWord.push('_')
  }
  return hiddenWord
}

let board = buildGameBoard(word)

const letterCheck = (letter) => {//have I seen letter before?
  letter = letter.toLowerCase()
  let guessedLetters = playStat['lettersGuessedAlready']
  for (let i = 0; i < guessedLetters.length; i++) {
    if (guessedLetters[i] === letter) {
      return true;
    } 
  }
  return false;
}
function start() {
  let starter = readline.keyInYN('D O   Y O U   W A N N A   B U I L D   A   S N O W M A N N N N ?')
  
  if (starter === false) {
    console.log('Welcome to Snowman!')
    console.log('Try to flip the blanks by guessing the right letters!')
    console.log('Mistakes will be kept in Snowballs, and all guesses will be counted!')
    gameLoop()
  } else {
    console.log('Ana is hurt. Now she\'s gonna grow up and almost marry a guy that wears gloves. Happy now?')
    process.exit()
   }
}


function getValidLetterGuess() {
  function guessIsValid(letter) {
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase()
  }
  let letter = ""
  
  while (!letter) {
    let input = readline.question("Please enter your guess: ")
    if (guessIsValid(input)) {
      if (!letterCheck(input)) {
        letter = input  
      } else {
        console.log('You\'ve guessed this letter already')
      }
    } else {
      console.log("Please enter a valid letter")
    }
  }
  return letter.toLowerCase()
}

const compareAnswerToWord = (theInput) => {
  let input = theInput
  let correctGuess = false
  for (let i = 0; i < word.length; i++) {
    if (theInput === word[i]) {
      board[i] = input
      correctGuess = true;      
    }
  }
  if (!correctGuess) {
    playStat['chances']--
    playStat['guesses']++   
  }
}

function gameLoop() {
 
  while (playStat['chances'] > 0) {
    
    let displayBoard = board.join(''); 
    console.log(displayBoard);
    let input = getValidLetterGuess()
    compareAnswerToWord(input)
    if (playStat['lettersGuessedAlready'].includes(input)) {
      playStat['lettersGuessedAlready'].filter(input)
    } else {
      playStat['lettersGuessedAlready'].push(input)
      console.log(`${playStat['chances']} chances left!`)
    }
    console.log(playStat['lettersGuessedAlready'])

      if (displayBoard === word) {
      console.log('||||||           ||||||  |||||||||||||||||||||  |||||  /////////||| ')
      console.log('||||||  |||||||  ||||||  |||||||      ||||||||  |||||//////////|||| ')
      console.log('||||||  |||||||  ||||||       //      //        |||||         ||||| ')
      console.log('||||||  |||||||  ||||||       //      //        |||||         ||||| ')
      console.log(' ||||//////////////|||   |||||||      ||||||||  |||||         ||||| ')
      console.log(' //////  /////  //////   |||||||||||||||||||||  |||||         ||||| ')
      start() 
      gameLoop()
    } else if (playStat['chances'] === 0) {
      console.log(`Your word was ${word}! `)

      console.log('|||||         |||||||||||||||||  |||||||||||||||||  ||||||||||||||||   ')
      console.log('|||||         |||||||||||||||||  |||||||||||||||||  ||||||||||||||||   ')
      console.log('|||||         ||||||     ||||||  ||||||             ||||||             ')
      console.log('|||||         ||||||     ||||||  ||||||||||||||||   |||||||||          ')
      console.log('|||||         ||||||     ||||||           |||||||   |||||||||          ')
      console.log('|||||         ||||||     ||||||           |||||||   ||||||             ')
      console.log('||||||||||||  |||||||||||||||||  ||||||||||||||||   ||||||||||||||||   ')
      console.log('||||||||||||  |||||||||||||||||  ||||||||||||||||   ||||||||||||||||   ')
      start()
    }
  }
}
//word = wordGrab()
start()

