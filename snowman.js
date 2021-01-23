/**
 * Logic of game 
 *  
 * 1. game generates a random word and creates an array with the same index amount of the random word and siplays it 
 * 1.A if guess has already been used display 
 * 
 * 2. checks to see if this is a valid answer - conditional is to 
 * check ; one letter; not more than one letter; no repeated values; no numbers 
 * 
 * 3. filters through given word to check for target in original word and where 
 * 
 * 4.A if target found then create new array with target in its correcr index place 
 * and returns this new array and record value of target used inside object called correct guesses 
 * 4.B if target not found, record the value of the target used in object called incorrect guesses 
 * 
 * 5. display word with only the correct guesses showing 
 * 
 * 6. loop to the beginning to check another word and decreases guess count by one 
 * 
 * 7. determine if you won or lost 
 * 
 * should log this after every user answer ( correct)
 * unfinishes array 
 * guessed letters 
 * guesses remaining 
 * asks for new word 
 * 
 * functions needed  - start, end, invalid guess, correct guess, only one letter, repeated guess 
 * consts neened - word to guess str , guess count num , correct guesses arr, wrong guesses arr 
 * 
 * 
 */



const readline = require('readline-sync');
const dictionary = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"]


  let word = ""            // word to guess str ,
  let theHiddenWord = ""    //blocking view of word      
  let inputLetter 
  let tempHiddenWordArr
  let correctIndex 
  let inputLetterCorrect 
  let userData = {
   guessCount : 10,     // guess count num , 
   correctGuesses : "",   // correct guesses arr, 
   wrongGuesses : ""    // wrong guesses arr 
  }


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
      console.log(`Please enter a valid letter \n`)
    }
  }
  return letter.toLowerCase()
}


    

 const gameLoop = () =>{
  randomWord()
  hideWord(word)
  console.log(` Lets melt the truth out by playing this guessing game! \n
  You get ${userData.guessCount} guesses and here we go!\n`)
  console.log(theHiddenWord + `\n`)
  while(userData.guessCount > 0){
    inputLetter = getValidLetterGuess()
    console.log(`\n`)
    checkTarget(word, inputLetter)
    checkIfWon(word,theHiddenWord) 
    console.log(`Guessed Letters: ${userData.wrongGuesses+ userData.correctGuesses} \n`)
    console.log(`Your guess count: ${userData.guessCount} \n`)
  }
  console.log(`The correct word was ${word} \n`)
  
  endGame()
 }

 const randomWord = ( ) =>{
   word = dictionary[ Math.floor(Math.random() * dictionary.length)]
   return word  // string 
 }

 const hideWord = ( word ) =>{  //string
   for(let i = 0; i < word.length; i++){
     theHiddenWord += "*" 
   }
   return theHiddenWord  // string 
 }

 const endGame = () =>{
  console.log("It is time to go, Goodbye!")
  process.exit()

 }

 const checkTarget = (str, target) =>{  // strings 
  let tempWordArr = str.split("")
     if(str.includes(target)){
       inputLetterCorrect = inputLetter  
       if(userData.correctGuesses.includes(target)){
          return console.log("invalid guess try again")
       }else{
          for(let i = 0; i < tempWordArr.length; i++){
            if(tempWordArr[i]=== target){
              userData.correctGuesses = target + userData.correctGuesses
              correctIndex = i
              userData.guessCount--
              theHiddenWord = replaceCorrectWord(correctIndex,theHiddenWord,inputLetterCorrect)
            } 
          }return 
        }
      }else if( userData.wrongGuesses.includes(target)){
        return console.log(`Invalid guess try again! \n`)
      }else if(!userData.wrongGuesses.includes(target)){
        userData.wrongGuesses = target + userData.wrongGuesses
        userData.guessCount--
      }else{
       return -1
      }
     return
  }
     
 
const checkIfWon = (str1,str2) =>{
  if (str1 === str2) {
    console.log(`congrats you won, it took you ${10 - userData.guessCount} guesses`)
    console.log(`The  correct word was ${word}`)
    endGame()
  }else{
    console.log(str2 + `\n`)
    return console.log(`Keep trying, youre still not done \n`)
  }
}

const replaceCorrectWord = (index,theHiddenWord,inputLetterCorrect) =>{
   tempHiddenWordArr = theHiddenWord.split("")
   tempHiddenWordArr[index] = inputLetterCorrect
   theHiddenWord = tempHiddenWordArr.join("")
return theHiddenWord
}


gameLoop()