let readlineSync = require('readline-sync')

let allTheWords = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"]

let guessRemaining = 7

const getRandomWord = (array) => {
  // let randomWord = Math.floor(Math.random() * words.length - 0) +0)
  let random = Math.floor(Math.random() * array.length - 1);
  return array[random]
}
let randomWord = getRandomWord(allTheWords)
console.log(randomWord)
// let hiddenWord = ""
// for (let i = 0; i < randomWord.length; i++) {
//   hiddenWord += "_"
// }
let hiddenWord = []
for (let i = 0; i < randomWord.length; i++) {
  hiddenWord.push("_")
}



let letter = ""
let wrongGuess = []


while (guessRemaining > 0) {
  if (hiddenWord.join("") === randomWord) {
    break;
  }
  letter = readlineSync.question(' Type Letter ')
  console.log(" You type letter ", letter)

  letter = letter.toLowerCase();
  if (randomWord.includes(letter)) {
    if (hiddenWord.includes(letter)) {
      wrongGuess.push(letter)
    } else {
      for (let i = 0; i < randomWord.length; i++) {
        if (letter === randomWord[i]) {
          hiddenWord[i] = letter
        }
      }

    }
  } else {
    wrongGuess.push(letter)
  }
  console.log(hiddenWord.join(""))
  console.log(`Already Guessed:${wrongGuess.join(", ")}`)

}






if (guessRemaining > 0) {
  console.log(`Congratulation, you have won!!Your word is ${randomWord} and your remaining guess are ${guessRemaining}.`)
} else {
  console.log(`Sorry try again, you have loss!!Your word was ${randomWord}`)
}




//console.log(userMessage) console.log("hodden word", hiddenWord) console.log("guesses remaining", guessRemaining)
// function askInput() {
//   if (guessRemaining > 0) {
//     readlineSync.question('Type Letter')
//   }
// }

/* class Practice

const readlineSync = required ('')
let words = ['daddy','bubble', 'button', 'cart']// words.length
console.log(getRandomWord(allTheWords));

const getRandomIndex = (word) => {
let getRandomIndex =
let getRandomIndex


const createHiddenWord = (word) => {
let hiddenWord = word.split('').map (char =>{return '_'})
return hiddenword
}

const isLetterInWord = (letter, word) => {
return word.includes(letter)

// 2. Replace underscore where match is found

const replaceMatches = (letter, randomWord, hiddenWord) => {
 for (let i = 0 i < randomWord.lenght; i ++) {
 let crrChar = randomWord [i]
 if(crrChar === letter) {
 hiddenWord[i]= letter;
  }
}
return hiddenWord
}

// ' c a r ' = ['_' ,'_' ,'_']
     0 1 2      0     1    2

let result = replaceMatches('a', 'car', ['_', '_', '_])
let result2 = replaceMatches('z', 'car', result)
let result3 = replaceMatches('F', 'car', result2)
let result4 = replaceMatches('c', 'car', result3)// its ingnored b/c its not part
console.log(result4 );

let

console.log(result2)

)
const startGame= ()=> {
let randomWord = getRandomWord(word);
let hiddenWord = createHiddenWord(randomWord)
console.log(hiddenWord.join(''));

}
let tries = 6;
while( tries >  || hiddenWord.join('') === randomWord)) {
console.log('======================');
console.log( '=> Tries: $(tries)');
console.log(randomWord);
console.log('=> hiddenWord.join(''))
  const answer = readlinesync.question('Type a letter:')

//.1 check user answer against randomWord

if( isLetterInWord(answer, randomWord),) {
  hiddenWord = replacematches(answer, randomWord, hiddenWord)
  // console.log('Yay, that word is in the word')
} else {
  tries --;
  console.log('Nope ! that letter is NOT in the word')
  }
}

// console.log('Your typed =>', answer)

//1.check user answer against randomWord
//2. Replace underscore where match is found
//3. Replace underscore where match is found
r*/


// let hiddenWord=[]
// for(let i = 0; i < randomWord.length; i ++) {