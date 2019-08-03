let listOfWords = "able, about, account, acid, across, addition, adjustment, advertisement, after, again, against, agreement, almost, among, amount, amusement, angle, angry, animal, answer, apparatus, apple, approval, arch, argument, army, attack, attempt, attention, attraction, authority, automatic, awake, baby, back, balance, ball, band, base, basin, basket, bath, beautiful, because, before, behaviour, belief, bell, bent, berry, between, bird, birth, bite, bitter, black, blade, blood, blow, blue, board, boat, body, boiling, bone, book, boot, bottle, brain, brake, branch, brass, bread, breath, brick, bridge, bright, broken, brother, brown, brush, bucket, building, bulb, burn, burst, business, butter, button, cake, camera, canvas, card, care, carriage, cart, cause, certain, chain, chalk, chance, change, cheap, cheese, chemical, chest, chief, chin, church, circle, clean, clear, clock, cloth, cloud, coal, coat, cold, collar, colour, comb, come, comfort, committee, common, company, comparison, competition, complete, complex, condition, connection, conscious, control, cook, copper, copy, cord, cork, cotton, cough, country, cover, crack, credit, crime, cruel, crush, current, curtain, curve, cushion, damage, danger, dark, daughter, dead, dear, death, debt, decision, deep, degree, delicate, dependent, design, desire, destruction, detail, development, different, digestion, direction, dirty, discovery, discussion, disease, disgust, distance, distribution, division, door, doubt, down, drain, drawer, dress, drink, driving, drop, dust, early, earth, east, edge, education, effect, elastic, electric, engine, enough, equal, error, even, event, ever, every, example, exchange, existence, expansion, experience, expert, face, fact, fall, false, family, farm, father, fear, feather, feeble, feeling, female, fertile, fiction, field, fight, finger, fire, first, fish, fixed, flag, flame, flat, flight, floor, flower, fold, food, foolish, foot, force, fork, form, forward, fowl, frame, free, frequent, friend, from, front, fruit, full, future, garden, general, girl, give, glass, glove, goat, gold, good, government, grain, grass, great, green, grey, grip, group, growth, guide, hair, hammer, hand, hanging, happy, harbour, hard, harmony, hate, have, head, healthy, hear, hearing, heart, heat, help, high, history, hole, hollow, hook, hope, horn, horse, hospital, hour, house, humour, idea, important, impulse, increase, industry, insect, instrument, insurance, interest, invention, iron, island, jelly, jewel, join, journey, judge, jump, keep, kettle, kick, kind, kiss, knee, knife, knot, knowledge, land, language, last, late, laugh, lead, leaf, learning, leather, left, letter, level, library, lift, light, like, limit, line, linen, liquid, list, little, living, lock, long, look, loose, loss, loud, love, machine, make, male, manager, mark, market, married, mass, match, material, meal, measure, meat, medical, meeting, memory, metal, middle, military, milk, mind, mine, minute, mist, mixed, money, monkey, month, moon, morning, mother, motion, mountain, mouth, move, much, muscle, music, nail, name, narrow, nation, natural, near, necessary, neck, need, needle, nerve, news, night, noise, normal, north, nose, note, number, observation, offer, office, only, open, operation, opinion, opposite, orange, order, organization, ornament, other, oven, over, owner, page, pain, paint, paper, parallel, parcel, part, past, paste, payment, peace, pencil, person, physical, picture, pipe, place, plane, plant, plate, play, please, pleasure, plough, pocket, point, poison, polish, political, poor, porter, position, possible, potato, powder, power, present, price, print, prison, private, probable, process, produce, profit, property, prose, protest, public, pull, pump, punishment, purpose, push, quality, question, quick, quiet, quite, rail, rain, range, rate, reaction, reading, ready, reason, receipt, record, regret, regular, relation, religion, representative, request, respect, responsible, rest, reward, rhythm, rice, right, ring, river, road, roll, roof, room, root, rough, round, rule, safe, sail, salt, same, sand, scale, school, science, scissors, screw, seat, second, secret, secretary, seed, seem, selection, self, send, sense, separate, serious, servant, shade, shake, shame, sharp, sheep, shelf, ship, shirt, shock, shoe, short, shut, side, sign, silk, silver, simple, sister, size, skin, skirt, sleep, slip, slope, slow, small, smash, smell, smile, smoke, smooth, snake, sneeze, snow, soap, society, sock, soft, solid, some, song, sort, sound, soup, south, space, spade, special, sponge, spoon, spring, square, stage, stamp, star, start, statement, station, steam, steel, stem, step, stick, sticky, stiff, still, stitch, stocking, stomach, stone, stop, store, story, straight, strange, street, stretch, strong, structure, substance, such, sudden, sugar, suggestion, summer, support, surprise, sweet, swim, system, table, tail, take, talk, tall, taste, teaching, tendency, test, than, that, then, theory, there, thick, thin, thing, this, thought, thread, throat, through, through, thumb, thunder, ticket, tight, till, time, tired, together, tomorrow, tongue, tooth, touch, town, trade, train, transport, tray, tree, trick, trouble, trousers, true, turn, twist, umbrella, under, unit, value, verse, very, vessel, view, violent, voice, waiting, walk, wall, warm, wash, waste, watch, water, wave, weather, week, weight, well, west, wheel, when, where, while, whip, whistle, white, wide, will, wind, window, wine, wing, winter, wire, wise, with, woman, wood, wool, word, work, worm, wound, writing, wrong, year, yellow, yesterday, young";

let allTheWords = listOfWords.split(', ');

const coloring = require('chalk');
  
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
  let step6 = coloring.redBright(`
    ====|=====||
        |     ||
       ( )    ||
       /|\\    ||
      / | \\   ||
       / \\    ||
     _/   \\_  ||
              ||
  ============||
  `);
  
  
  let randomWord; // a random word from our array of words
  let tryCounter = 0; // counter for the failed tries
  let userAnswer; // This will be the user's answer formated
  let displayedWord = ''; // What will be displayed at each step of the game;
  let gameOver = false;
  let state = [step0, step1, step2, step3, step4, step5, step6];
  let strikes = '';
  let won = 0;
  let lose = 0;
  let orange = coloring.keyword('orange');
  
  
  // Displays the current step of the game
  const textPicture = () => {
    const rl = require('readline');
    rl.cursorTo(process.stdout, 0, 0);
    rl.clearScreenDown(process.stdout);

    console.log(coloring.gray.dim(`\nFOR TEST PURPOSE ONLY`,randomWord, `\n\n\n\n\n`)) // this line is for the test purpose, it has to be deleted after
    
    console.log(`If you wish to quit at anytime, press "control" and "c" to end the game (^c)\n\n`);
    console.log(`Guess the word, it has `, randomWord.length, ` characters! ... Good luck :) \n`);
    console.log(`Entre one character at the time\n\n\n`);
    console.log(coloring.cyan.bold(`General Game progress : \n`, coloring.green(`WINS : `, won, orange('   Fails : ', lose))))
    console.log(coloring.bold.bgRed(`\n\n\nSTRICKES : `), orange.bold(strikes),`\n\n`, state[tryCounter]);
    console.log('Tries left :', 6 - tryCounter, '\n');
    console.log(coloring.green.bold(displayedWord));
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
    textPicture();
  }
  
  
  

  const readFromTheConsole = require('readline');
  const readLine = readFromTheConsole.createInterface({
    input : process.stdin,
    output : process.stdout});
  
  
  initPlay();
  
  readLine.question(``, (userInput)=> {
    userAnswer = (userInput.trim()).toLowerCase();
      
    if (userAnswer.length > 1) {
        tryCounter++;
        textPicture();
        console.log(orange(`\nYou have to entrer the characters one by one\n`));
        keepPlaying();
    } else if (charIsPartOfTheWord(userAnswer)) {
        textPicture();
        console.log(`\nGreat starting !!\n`);
        keepPlaying();
    } else {
        tryCounter++;
        strikes += userAnswer.toUpperCase() +'. ';
        textPicture();
        console.log(`\nThe character `, coloring.red(userAnswer.toUpperCase()), `is not whitin the word to guess\n`);
        keepPlaying();
      }
  })
  
  readLine.on('close', ()=> {
      console.log(coloring.yellow.bold(`\nTHANK YOU FOR PLAYING`));
  })
  

  function startOver() {
      gameOver = true;
      userAnswer = 'PAUSE';
      readLine.setPrompt(`Would you like to play again ? Y / N ? : `);
      readLine.prompt();
  }

  function isRepeatedGuess() {
      return ((displayedWord.toLowerCase()).includes(userAnswer) && userAnswer != '_');
  }

  function isRepeatedMistake() {
    return ((strikes.toLowerCase()).includes(userAnswer) && userAnswer != '');
}
  
  function keepPlaying() {
    readLine.setPrompt(`What's your next guess : `);
    readLine.prompt();
    readLine.on('line', (userInput)=> {
      userAnswer = (userInput.trim()).toLowerCase();

      if (!gameOver){

          if (userAnswer.length > 1) {
              tryCounter++;
              textPicture();
              console.log(orange(`\nRemember, you have to entre the characters one by one`));

          } else if (isRepeatedGuess()) {
              textPicture();
              console.log(`\n`, coloring.red(`You've already guessed `, coloring.white.bold(userAnswer.toUpperCase())));

          } else if (isRepeatedMistake()) {
              textPicture();
              console.log(`\n`, coloring.red(coloring.white.bold(userAnswer.toUpperCase()), `is already a strike !!!`));

          } else if (charIsPartOfTheWord(userAnswer)) {
              textPicture();
              console.log(`\nGood guess`);
              if (!displayedWord.includes('_')) {
                  won++;
                  textPicture();
                  console.log(coloring.green.bold(`\nCONGRATULATION !!! YOU WON\nIt took you `, coloring.white.bold(randomWord.length + tryCounter), ` guesses\n`));
                  startOver();
              }

          } else {
              tryCounter++;
              strikes += userAnswer.toUpperCase() +'. ';
              textPicture();
              console.log(coloring.red.bold(`\n\n${userAnswer.toUpperCase()}`), `is a bad guess...`);
          }

          if (!gameOver) {
              if (tryCounter < 6) {
                  readLine.setPrompt(`Next guess : `);
                  readLine.prompt();
              } else {
                  lose++;
                  textPicture();
                  console.log(coloring.red.bold(`\nGAME OVER !!\n\The solution was : `, coloring.white(randomWord.toUpperCase()), `\n\n`));
                  startOver();
              }
          }

      } else {
          if (userAnswer == 'y') {
              gameOver = false;
              tryCounter = 0;
              displayedWord = '';
              strikes = '';
              initPlay();
          } else if (userAnswer == 'n') {
              readLine.close();
          } else if (userAnswer !== 'PAUSE') {
              readLine.setPrompt(`Invalid answer, please type "Y" if you wish to continue OR "N" if you want to exit the game\n`);
              readLine.prompt();
          }
      }

    })
  }
  