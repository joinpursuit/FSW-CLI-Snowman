const rls = require('readline-sync');
const chalk = require('chalk');
const dictionary = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"]
let obj = {
  name: [],
  tempLetter: "",
  guesses: 10,
  randomWrd: " ",
  randomWrdArr: [],
  blankSpc: [],
  blankSpc2: [],
  blankSpcStr: "",
  blankSpcStr2: "",
  wrongLetters: []
}
let winCard = {
  Winner: "",
  "Word": "",
  "Wrong Guesses": 0,
  "Total Guesses": 0,
  Prize: '🏆'
}
let loseCard = {
  Loser: "",
  "Word": "",
  "Right Guesses": 0,
  "Total Guesses": 0,
  Prize: '💩'
}
const initialQ = () => {
  obj.name = rls.question("Hi!\nWhat's your name? ")
  setTimeout(function () { console.log("Hi " + obj.name + ". Nice to meet you!") }, 300)
  setTimeout(function () { rls.keyInYNStrict("Good luck playing!\nAre you ready?") ? playGame() : quitGame() }, 1300)
}
const playGame = () => {
  obj.tempLetter = ""
  obj.guesses = 10
  obj.randomWrd = " "
  obj.randomWrdArr = []
  obj.blankSpc = []
  obj.blankSpc2 = []
  obj.blankSpcStr = ""
  obj.blankSpcStr2 = ""
  obj.wrongLetters = []
  obj.randomWrd = dictionary[Math.floor(Math.random() * dictionary.length)]
  obj.randomWrdArr = obj.randomWrd.split('')
  obj.blankSpc = obj.randomWrdArr.map((el) => {
    return el = "_"
  })
  obj.blankSpcStr = obj.blankSpc.join(" ");
  console.log(obj.randomWrd)
  getValidLetterGuess();

}
const getValidLetterGuess = () => {
  const guessIsValid = (letter) => {
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase()
  }
  console.log(`\n${obj.blankSpcStr}`)
  console.log(`Wrong letters:`, chalk`{red ${obj.wrongLetters.join(" ")}}`)
  console.log(`${obj.guesses} guesses remaining`)
  let letter = ""
  while (!letter) {
    let input = rls.question(`Please enter your guess: `)
    if (guessIsValid(input)) {
      letter = input
    } else {
      console.log(chalk`{yellow Please enter a valid letter.🤔}`)
    }
  }
  obj.tempLetter = letter.toLowerCase().split()
  let answer = obj.randomWrdArr.includes(obj.tempLetter[0])
  answer === true ? correctLetter() : wrongLetter()
}
const correctLetter = () => {
  let answerOne = obj.blankSpcStr2.includes(obj.tempLetter[0])
  answerOne === true ? console.log(chalk`{yellow Pay attention!}`) + getValidLetterGuess() : null
  for (i = 0; i < obj.randomWrdArr.length; i++) {
    if (obj.randomWrdArr[i] === obj.tempLetter[0]) {
      obj.blankSpc[i] = chalk`{green ${obj.randomWrd[i]}}`
      obj.blankSpc2[i] = obj.randomWrd[i]
    }
  }
  obj.blankSpcStr = obj.blankSpc.join(" ")
  obj.blankSpcStr2 = obj.blankSpc2.join(" ")
  let answerTwo = obj.blankSpc.includes("_")
  answerTwo === true ? getValidLetterGuess() : winnerFunc()
}
const wrongLetter = () => {
  let answer = obj.wrongLetters.includes(obj.tempLetter[0])
  answer === true ? console.log(chalk`{yellow Pay attention!}`) + getValidLetterGuess() : obj.guesses -= 1
  obj.wrongLetters.push(obj.tempLetter[0])
  if (obj.guesses === 0) {
    loseFunc()
  }
  getValidLetterGuess()
}
const winnerFunc = () => {
  let count = 0
  objA = {}
  obj.blankSpc.forEach((el) => {
    objA[el] = 1
  })

  for (let el in objA) {
    if (el !== "_") {
      count++
    }
  }
  winCard.Winner = obj.name
  winCard["Word"] = obj.randomWrd
  winCard["Wrong Guesses"] = obj.wrongLetters.length
  winCard["Total Guesses"] = obj.wrongLetters.length + count
  console.log(`Great Job ${obj.name}`)
  console.log(`\n${obj.blankSpcStr}`)
  console.table(winCard)
  quitGame()
}
const loseFunc = () => {
  let count = 0
  objA = {}
  obj.blankSpc.forEach((el) => {
    objA[el] = 1
  })
  for (let el in objA) {
    if (el !== "_") {
      count++
    }
  }
  loseCard.Loser = obj.name
  loseCard["Word"] = obj.randomWrd
  loseCard["Right Guesses"] = count
  loseCard["Total Guesses"] = count + obj.wrongLetters.length
  console.table(loseCard)
  quitGame()
}
initialQ()
const quitGame = () => {
  rls.keyInYNStrict("Play again?") ? playGame() : console.log("Goodbye!") + process.exit()
}



