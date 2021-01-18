const rls = require('readline-sync');

const dictionary = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"]

let playerName = "";
let answerArray = [];
let remainingAttempts = 0;
let takenAttempts = 0;
let lettersObj = [{}, {}]

const playGame = () => {
  
  let word = dictionary[Math.floor(Math.random()*dictionary.length-1)]
  takenAttempts = 0;
  remainingAttempts = word.length + 2;
  
  answerArray = [];
  for(let i=0; i < word.length; i++){
    answerArray[i] = "_"
  }

  while(remainingAttempts > 0){
    console.clear();

    if(answerArray.includes("_")){
      console.log(`\t\t\tYou have ${remainingAttempts} number of remaining attempts.`);
      console.log(`\t\t\t${answerArray.join(" ")}`);
      checkGuess(word, getValidLetterGuess());
    }else{
      console.log(`\t\t\t${answerArray.join(" ")}`);
      console.log(`\t\t\tCongrats! You took ${takenAttempts} number of attempts to guess ${word}.`);
      saveGuessedWord(word)
      rls.keyInYN("\t\t\tDo you want to play again?") ? welcomeAgain() : quitGame();
    }

    
  }

  console.clear();
  console.log("\t\t\tYou Lose! You have consumed all your attempts: The answer was " + word);
  saveNotGuessedWord(word)
  rls.keyInYN("\t\t\tDo you want to play again?") ? welcomeAgain() : quitGame();

}
const checkGuess = (word, letter) => {
  if(word.split("").includes(letter)){
    for(let i = 0; i<word.length; i++){
      if(word[i] === letter){
        answerArray[i] = letter;
      }
    }
    takenAttempts += 1;
  }else{
    remainingAttempts -= 1;
    takenAttempts += 1;
  }
  return answerArray
}

const saveGuessedWord = (word) => {
  if(word in lettersObj[0]){
    lettersObj[0][word]++
  }else{
    lettersObj[0][word] = 1
  }
}
const saveNotGuessedWord = (word) => {
  if(word in lettersObj[1]){
    lettersObj[1][word]++
  }else{
    lettersObj[1][word] = 1
  }
}

const getValidLetterGuess = () => {
  function guessIsValid(letter) {
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase()
  }

  let letter = ""

  while (!letter) {
    let input = rls.question(`\t\t\t${playerName}! Please enter your guess: `)
    if (guessIsValid(input)) {
      letter = input
    } else {
      console.log(`\t\t\tEnter a valid input.`);
      console.log(`\t\t\tNeed an English Alphabet letter.`);
      console.log(`\t\t\tYou have ${remainingAttempts} number of remaining attempts.`);
    }
  }
  return letter.toLowerCase()
}

const welcomeAgain = () => {
  console.clear();
  
  console.log(`\t\t\t!!!!!!!!WELCOME TO SNOWMAN!!!!!!!!\n`);
  console.log("\tRules:\n\t\t\t(i)The Computer will have a secret word.\n");
  console.log("\t\t\t(ii)The player will enter a valid guess letter.\n");
  console.log("\t\t\t(iii)The player's progress will be displayed after each attempt.\n");
  console.log("\t\t\t(iv)The player will have 2 extra the word's length number of attempts.\n\t\t\ti.e. For 'snake' 7 number of attempts\n");
  
  playGame();

}
const quitGame = () => {
  console.clear();
  console.log(`\t\t\t\t\t\t!!!Good Bye!!!`);
  console.log(`\t\t\t\t\t\tIt is sad to see you leaving!\n\t\t\t\t\t\tHope to see you soon.`)
  console.log(`\t\t\t${playerName} has successfully guessed following words: `);
  if(isNotEmpty(lettersObj[0])){
    for(const key in lettersObj[0]){
      console.log(`\t\t\t${key}:${lettersObj[0][key]} times`)
    }
  }else{
    console.log(`You guessed no words.`)
  }
  console.log(`\t\t\t${playerName} has failed to guess following words: `)
  for(const key in lettersObj[1]){
    console.log(`\t\t\t${key}:${lettersObj[1][key]} times`)
  }
  process.exit();
}

const isNotEmpty = (objct) => {
  for(var proprty in objct) {
    if(proprty in objct) {
      return true;
    }
  }

  return false
}
const main = () => {
  console.clear();
  
  console.log(`\t\t\t!!!!!!!!WELCOME TO SNOWMAN!!!!!!!!\n`);
  console.log("\tRules:\n\t\t\t(i)The Computer will have a secret word.\n");
  console.log("\t\t\t(ii)The player will enter a valid guess letter.\n");
  console.log("\t\t\t(iii)The player's progress will be displayed after each attempt.\n");
  console.log("\t\t\t(iv)The player will have 2 extra the word's length number of attempts.\n\t\t\ti.e. For 'snake' 7 number of attempts\n");
  
  
  if(rls.keyInYN(`\t\t\tAre you ready?`)){
      console.clear();
      playerName = rls.question(`\t\t\tEnter Your Name: \n\t\t\t`);
      playerName = playerName.toUpperCase();
      playGame();
  }else{
      quitGame();
  }
}

main();

