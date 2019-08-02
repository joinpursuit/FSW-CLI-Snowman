let allTheWords = [
    'abruptly',
    'absurd',
    'abyss',
    'affix',
    'askew',
    'avenue',
    'awkward',
    'axiom',
    'azure',
    'bagpipes',
    'bandwagon',
    'banjo',
    'bayou',
    'beekeeper',
    'bikini',
    'blitz',
    'blizzard',
    'boggle',
    'bookworm',
    'boxcar',
    'boxful',
    'buckaroo',
    'buffalo',
    'buffoon', 
    'buxom', 
    'buzzard', 
    'buzzing', 
    'buzzwords', 
    'caliph', 
    'cobweb', 
    'cockiness', 
    'croquet', 
    'crypt', 
    'curacao', 
    'cycle', 
    'daiquiri', 
    'dirndl', 
    'disavow', 
    'dizzying', 
    'duplex', 
    'dwarves', 
    'embezzle', 
    'equip', 
    'espionage', 
    'euouae', 
    'exodus', 
    'faking', 
    'fishhook', 
    'fixable', 
    'fjord', 
    'flapjack', 
    'flopping', 
    'fluffiness', 
    'flyby', 
    'foxglove', 
    'frazzled', 
    'frizzled', 
    'fuchsia', 
    'funny', 
    'gabby', 
    'galaxy', 
    'galvanize', 
    'gazebo', 
    'giaour', 
    'gizmo', 
    'glowworm', 
    'glyph', 
    'gnarly', 
    'gnostic', 
    'gossip', 
    'grogginess', 
    'haiku', 
    'haphazard', 
    'hyphen', 
    'iatrogenic', 
    'icebox', 
    'injury', 
    'ivory', 
    'ivy', 
    'jackpot', 
    'jaundice', 
    'jawbreaker', 
    'jaywalk', 
    'jazziest', 
    'jazzy', 
    'jelly', 
    'jigsaw', 
    'jinx', 
    'jiujitsu', 
    'jockey', 
    'jogging', 
    'joking', 
    'jovial', 
    'joyful', 
    'juicy', 
    'jukebox', 
    'jumbo', 
    'kayak', 
    'kazoo', 
    'keyhole', 
    'khaki', 
    'kilobyte', 
    'kiosk', 
    'kitsch', 
    'kiwifruit', 
    'klutz', 
    'knapsack', 
    'larynx', 
    'lengths', 
    'lucky', 
    'luxury', 
    'lymph', 
    'marquis', 
    'matrix', 
    'megahertz', 
    'microwave', 
    'mnemonic', 
    'mystify', 
    'naphtha', 
    'nightclub', 
    'nowadays', 
    'numbskull', 
    'nymph', 
    'onyx', 
    'ovary', 
    'oxidize', 
    'oxygen', 
    'pajama', 
    'peekaboo', 
    'phlegm', 
    'pixel', 
    'pizazz', 
    'pneumonia', 
    'polka', 
    'pshaw', 
    'psyche', 
    'puppy', 
    'puzzling', 
    'quartz', 
    'queue', 
    'quips', 
    'quixotic', 
    'quiz', 
    'quizzes', 
    'quorum', 
    'razzmatazz', 
    'rhubarb', 
    'rhythm', 
    'rickshaw', 
    'schnapps', 
    'scratch', 
    'shiv', 
    'snazzy', 
    'sphinx', 
    'spritz', 
    'squawk', 
    'staff', 
    'strength', 
    'strengths', 
    'stretch', 
    'stronghold', 
    'stymied', 
    'subway', 
    'swivel', 
    'syndrome', 
    'thriftless', 
    'thumbscrew', 
    'topaz', 
    'transcript', 
    'transgress', 
    'transplant', 
    'triphthong', 
    'twelfth', 
    'twelfths', 
    'unknown', 
    'unworthy', 
    'unzip', 
    'uptown', 
    'vaporize', 
    'vixen', 
    'vodka', 
    'voodoo', 
    'vortex', 
    'voyeurism', 
    'walkway', 
    'waltz', 
    'wave', 
    'wavy', 
    'waxy', 
    'wellspring', 
    'wheezy', 
    'whiskey', 
    'whizzing', 
    'whomever', 
    'wimpy', 
    'witchcraft', 
    'wizard', 
    'woozy', 
    'wristwatch', 
    'wyvern', 
    'xylophone', 
    'yachtsman', 
    'yippee', 
    'yoked', 
    'youthful', 
    'yummy', 
    'zephyr', 
    'zigzag', 
    'zigzagging', 
    'zilch', 
    'zipper', 
    'zodiac', 
    'zombie'];
  
  let step0 = `
    ====|=====||
        |     ||
              ||
              ||
              ||
              ||
              ||
              ||
  ============||
  `;
  let step1 = `
    ====|=====||
        |     ||
       ( )    ||
              ||
              ||
              ||
              ||
              ||
  ============||
  `;
  let step2 = `
    ====|=====||
        |     ||
       ( )    ||
        |     ||
        |     ||
              ||
              ||
              ||
  ============||
  `;
  let step3 = `
    ====|=====||
        |     ||
       ( )    ||
      \\/|     ||
        |     ||
              ||
              ||
              ||
  ============||
  `;
  let step4 = `
    ====|=====||
        |     ||
       ( )    ||
      \\/|\\/   ||
        |     ||
              ||
              ||
              ||
  ============||
  `;
  let step5 = `
    ====|=====||
        |     ||
       ( )    ||
      \\/|\\/   ||
        |     ||
         \\    ||
          \\_  ||
              ||
  ============||
  `;
  let step6 = `
    ====|=====||
        |     ||
       ( )    ||
       /|\\    ||
      / | \\   ||
       / \\    ||
     _/   \\_  ||
              ||
  ============||
  `;
  
  
  let randomWord; // a random word from our array of words
  let tryCounter = 0; // counter for the failed tries
  let winning; // Boolean to determin if the player won or lose
  let userAnswer; // This will be the user's answer formated
  let displayedWord = ''; // What will be displayed at each step of the game;
  let gameOver = false;
  let state = [step0, step1, step2, step3, step4, step5, step6];
  
  
  // Displays the current step of the game
  const textPicture = () => {
    console.log(state[tryCounter]);
    console.log('Tries left :', 6 - tryCounter, '\n');
    console.log(displayedWord);
  }
  
  
  // Function to get a random word form our array of words
  const getRandomWord = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  
  // Function to format the word to guess using _ _ _ _ 
  const formatedWord = () => {
    for (let i = 0; i < randomWord.length; i++) {
      displayedWord += '_ ';
    }
    return displayedWord;
  }
  
  
  
  // Check if a character is within the target word and modify the displayed word
  // returns a boolean, true if the entred char is part of the word to guess
  const charIsPartOfTheWord = (char) => {
    let isPart = false
    let arr = displayedWord.split('')
    for (let i = 0; i< randomWord.length; i++) {
        if (randomWord[i] === char && arr[i*2] === '_') {
            arr[i*2] = char;
            isPart = true;
        }
    }
    displayedWord = (arr.join('')).toUpperCase();
    return isPart;
  }
  
  
  // Function for the initial launch
  const initPlay = () => {
    randomWord = getRandomWord(allTheWords);
    displayedWord = formatedWord();
  
    //console.log(randomWord, `\n\n\n`) // this line is for the test purpose, it has to be deleted after
    console.log(`if you wish to quit at anytime, press "control" and "c" to end the game (^c)\n\n`);
    console.log(`Guess the word, it has `, randomWord.length, ` characters! ... Good luck :) \n`);
    console.log(`Please remember to entre one character at the time\n\nYou have 6 tries\n\n`);
    textPicture();
  }
  
  
  
  const readFromTheConsole = require('readline');
  const readLine = readFromTheConsole.createInterface({
    input : process.stdin,
    output : process.stdout});
  
  
  initPlay();
  
  readLine.question(``, (userInput)=> {
    userAnswer = (userInput.trim()).toLowerCase();
      
    if (charIsPartOfTheWord(userAnswer)) {
        console.log(`\nAwesome starting !! keep guessing\n`)
        textPicture();
        keepPlaying();
    } else if (userAnswer.length > 1){
        tryCounterer++;
        console.log(`\nYou have to entrer the characters one by one\n`);
        textPicture();
        keepPlaying();
    } else {
        tryCounter++;
        console.log(`\nThe character ${userAnswer.toUpperCase()} is not whitin the word to guess\n`);
        textPicture();
        keepPlaying();
      }
  })
  
  readLine.on('close', ()=> {
    if (winning) {
      console.log(`CONGRATULATION !!! YOU WON`); 
    } else {
      console.log(`GAME OVER !!\nTHANK YOU FOR PLAYING`);
    } 
  })
  
  
  
  function keepPlaying() {
    readLine.setPrompt(`Next guess ...\n`);
    readLine.prompt();
    readLine.on('line', (userInput)=> {
      userAnswer = (userInput.trim()).toLowerCase();
  
      if (charIsPartOfTheWord(userAnswer) && !gameOver) {
        console.log(`Good guess\n\n`);
        textPicture();
        if (!displayedWord.includes('_')) {
          winning = true;
          readLine.close();
        }
      } else if (!gameOver) {
        if (userAnswer.length > 1) {
          tryCounter++;
          console.log(`\nRemember, you have to entrer the characters one by one\n`);
          //textPicture();
        } else {
          tryCounter++;
          //textPicture();
        }
        if (tryCounter < 6) {
          readLine.setPrompt(`${userAnswer.toUpperCase()} is not within the word to guess... Try again \n`);
          readLine.prompt();
          textPicture();
        } else { 
          textPicture();
          gameOver = true;
          userAnswer = 'PAUSE'
          console.log(`GAME OVER !!\n\nThe solution was : ${randomWord.toUpperCase()}\n\n`);
          readLine.setPrompt(`Do you wish to start over ? Y / N ?\n`);
          readLine.prompt();
        }
      } else {
        if (userAnswer == 'y'){
          gameOver = false
          tryCounter = 0;
          displayedWord = '';
          initPlay();
        } else if (userAnswer == 'n') {
          winning = false
          readLine.close();
        } else if (userAnswer !== 'PAUSE') {
          readLine.setPrompt(`Invalid answer, please type "Y" if you wish to continue OR "N" if you want to exit the game\n`);
          readLine.prompt();
        }
      }
    })
  }