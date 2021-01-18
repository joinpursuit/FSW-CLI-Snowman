const readline = require('readline-sync');
const dictionary = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"]



dictionaryIndexNum = (zero, totalWords) => {//random number between 1 and dictionary.length
  let iNum = Math.floor(Math.random() * (totalWords - zero) + 1)
    return iNum;
}

const wordGrab = () => {//call rng and call the index of the dictionary array
  let i = dictionaryIndexNum(0, dictionary.length - 1)
  return dictionary[i]
}

let word = wordGrab().split('')//turn our new word into letters
console.log(word)
for (let i = 0; i < word.length; i++) {
  const hideWord = word[i].every(element){}
}
hideWord = word.replace(word[i],'_') 
// let hideWord = () => {
//   for (let i = 0; i < word.length; i++) {
//     const hideWord = word[i].every(replace(word[i], '_'))
//     console.log(hideWord[i])
//   }
//}
console.log(hideWord())
console.log(word.length)
guessCount = 0//should increase by 1 with every guess interaction

let chances = word.length; //total letters that need to be guessed derived from our rng word
console.log(chances) 









// const covertAnswer = () => {
//   for (let i = 0; i < answer.length; i++) {
//     let hiddenAnswer = answer[i].replace(answer[i], '_')
//     console.log(`Word to guess --> ${hiddenAnswer}`)
//     return hiddenAnswer
//   }
// }
console.log(covertAnswer())
let greet = readline.question('Hello! Enter name: ')

const gameLoop = (lives) => {
  while (lives >= 1) {
    let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '\\', '{', '}', '`', '~', '|', '?', '.']
    for (let i = 0; i <= symbols.length - 1; i++){
      symbol = symbols[i];
      console.log(symbol)
      return symbol;
    }
    let input = readline.question("Be my guest, take a guess: ")

    if (input === answer[i]) {
      guessCount++
      chances + 0
      covertAnswer()[i] = answer[i];//hidden array[index] = word array[index]?
    } else if (typeof input === typeof 1) {
      console.log('Whoops wrong input! Remember, letters only and one at a time!')
    } else if (input === symbol) {
      console.log('Whoops wrong input! Remember, letters only and one at a time!')
    } else if (typeof input === typeof {}) { 
      console.log('Whoops wrong input! Remember, letters only and one at a time!')
    } else {
      chances -= 1
      if (wrongCount < 1) {
        start()
      }
    }
 }//end of while
}

start = () => {//start the game with a greeting and a nameAsk. Must also initialise the gameLoop. Opp to quitGame
  console.log(`Hello ${greet}! Good luck!`)//call greet

  let starter = readline.keyInYN('Do you wanna build a Snowmannnn?')//we want a false here
  
  if (starter === n) {//Lumiere is the candelabra from Beuaty and the Beast, he does NOT appreciate snowmen.

    console.log('Lumiere: Bien, car les bonhommes de neige n\'aiment pas mes flammes. Good! Ze snowmen, zey do not like my fire!')
    gameLoop(chances)//gonna have an init problem here. 

  } else {
    quitGame();
  }
}
quitGame = () => {
  console.log('Lumiere: Au revoir mon aime, give a good Bonjour to Elsa for me!');
}




















  // if (input === answer[i]) {
  //   guessCount++;
  //   let answerSwap = answer[i].replace(answer[i], input)
  //  } else {
  //   guessCount++;
  
  //  }
  // }  

start()



/*
start = () => 
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
  return letter.toLowerCase()
}*/




