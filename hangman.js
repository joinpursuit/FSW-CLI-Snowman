
const readline = require('readline-sync');

function getValidLetterGuess() {
  function guessIsValid(letter) {
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase()
  }
  let letter = "";
  while (!letter) {
    let input = readline.question('Please enter your guess: ');
    if (guessIsValid(input)) {
      letter = input
    } else {
      console.log("Please enter a valid letter");
    }
  }
  return letter.toLowerCase();
}

// var readlineSync = require('readline-sync');
//
// // Wait for user’s response.
// var userName = readlineSync.question('May I have your name?');
// console.log('Hi '  + userName + '!');
//
// // Handle the secret text (e.g. password).
// var favFood = readlineSync.question('What is your favorite food? ', {
//   hideEchoBack: true // The typed text on screen is hidden by `*` (default).
// });
//
// console.log('Oh, ' + userName + ' loves ' + favFood + '!');

// let allTheWords = 'able, about, account, acid, across, addition, adjustment, advertisement, after, again, against, agreement, almost, among, amount, amusement, angle, angry, animal, answer, apparatus, apple, approval, arch, argument, army, attack, attempt, attention, attraction, authority, automatic, awake, baby, back, balance, ball, band, base, basin, basket, bath, beautiful, because, before, behaviour, belief, bell, bent, berry, between, bird, birth, bite, bitter, black, blade, blood, blow, blue, board, boat, body, boiling, bone, book, boot, bottle, brain, brake, branch, brass, bread, breath, brick, bridge, bright, broken, brother, brown, brush, bucket, building, bulb, burn, burst, business, butter, button, cake, camera, canvas, card, care, carriage, cart, cause, certain, chain, chalk, chance, change, cheap, cheese, chemical, chest, chief, chin, church, circle, clean, clear, clock, cloth, cloud, coal, coat, cold, collar, colour, comb, come, comfort, committee, common, company, comparison, competition, complete, complex, condition, connection, conscious, control, cook, copper, copy, cord, cork, cotton, cough, country, cover, crack, credit, crime, cruel, crush, current, curtain, curve, cushion, damage, danger, dark, daughter, dead, dear, death, debt, decision, deep, degree, delicate, dependent, design, desire, destruction, detail, development, different, digestion, direction, dirty, discovery, discussion, disease, disgust, distance, distribution, division, door, doubt, down, drain, drawer, dress, drink, driving, drop, dust, early, earth, event, east, edge, education, effect, elastic, electric, engine, enough, equal, error, even, ever, every, example, exchange, existence, expansion, experience, expert, face, fact, fall, false, family, farm, father, fear, feather, feeble, feeling, female, fertile, fiction, field, fight, finger, fire, first, fish, fixed, flag, flame, flat, flight, floor, flower, fold, food, foolish, foot, force, fork, form, forward, fowl, frame, free, frequent, friend, from, front, fruit, full, future, garden, general, girl, give, glass, glove, goat, gold, good, government, grain, grass, great, green, grey, grip, group, growth, guide, hair, hammer, hand, hanging, happy, harbour, hard, harmony, hate, have, head, healthy, hear, hearing, heart, heat, help, high, history, hole, hollow, hook, hope, horn, horse, hospital, hour, house, humour, idea, important, impulse, increase, industry, insect, instrument, insurance, interest, invention, iron, island, jelly, jewel, join, journey, judge, jump, keep, kettle, kick, kind, kiss, knee, knife, knot, knowledge, land, language, last, late, laugh, lead, leaf, learning, leather, left, letter, level, library, lift, light, like, limit, line, linen, liquid, list, little, living, lock, long, look, loose, loss, loud, love, machine, make, male, manager, mark, market, married, mass, match, material, meal, measure, meat, medical, meeting, memory, metal, middle, military, milk, mind, mine, minute, mist, mixed, money, monkey, month, moon, morning, mother, motion, mountain, mouth, move, much, muscle, music, nail, name, narrow, nation, natural, near, necessary, neck, need, needle, nerve, news, night, noise, normal, north, nose, note, number, observation, offer, office, only, open, operation, opinion, opposite, orange, order, organization, ornament, other, oven, over, owner, page, pain, paint, paper, parallel, parcel, part, past, paste, payment, peace, pencil, person, physical, picture, pipe, place, plane, plant, plate, play, please, pleasure, plough, pocket, point, poison, polish, political, poor, porter, position, possible, potato, powder, power, present, price, print, prison, private, probable, process, produce, profit, property, prose, protest, public, pull, pump, punishment, purpose, push, quality, question, quick, quiet, quite, rail, rain, range, rate, reaction, reading, ready, reason, receipt, record, regret, regular, relation, religion, representative, request, respect, responsible, rest, reward, rhythm, rice, right, ring, river, road, roll, roof, room, root, rough, round, rule, safe, sail, salt, same, sand, scale, school, science, scissors, screw, seat, second, secret, secretary, seed, seem, selection, self, send, sense, separate, serious, servant, shade, shake, shame, sharp, sheep, shelf, ship, shirt, shock, shoe, short, shut, side, sign, silk, silver, simple, sister, size, skin, skirt, sleep, slip, slope, slow, small, smash, smell, smile, smoke, smooth, snake, sneeze, snow, soap, society, sock, soft, solid, some, song, sort, sound, soup, south, space, spade, special, sponge, spoon, spring, square, stage, stamp, star, start, statement, station, steam, steel, stem, step, stick, sticky, stiff, still, stitch, stocking, stomach, stone, stop, store, story, straight, strange, street, stretch, strong, structure, substance, such, sudden, sugar, suggestion, summer, support, surprise, sweet, swim, system, table, tail, take, talk, tall, taste, teaching, tendency, test, than, that, then, theory, there, thick, thin, thing, this, thought, thread, throat, through, through, thumb, thunder, ticket, tight, till, time, tired, together, tomorrow, tongue, tooth, touch, town, trade, train, transport, tray, tree, trick, trouble, trousers, true, turn, twist, umbrella, under, unit, value, verse, very, vessel, view, violent, voice, waiting, walk, wall, warm, wash, waste, watch, water, wave, weather, week, weight, well, west, wheel, when, where, whip, whistle, while, white, wide, will, wind, wine, wing, winter, wire, wise, woman, wood, wool, word, work, worm, wound, writing, wrong, year, yellow, yesterday, young';

// let allOfTheWords = allTheWords.split(', ');
// //console.log(allTheWords);
//
// const getRandomWord = function (array) {
//   return oneWord = allOfTheWords[Math.floor(Math.random() * allOfTheWords.length)];
// };
//
// const selectedWord = getRandomWord(allOfTheWords).split('');
// console.log(selectedWord);
//
// let pickedWord = [];
//
// for (i = 0; i < selectedWord.length; i++) {
//   pickedWord[i] = '_'; // add a placeholder for the number of characters of the selectedWord
// };
//
// let netLetters = pickedWord.length; // netLetters is created to show the length of the secret word
//
// console.log(`The word contains ${netLetters} letters. Here is the word ${pickedWord}`);



const allTheWords = 'able, about, account, acid, across, addition, adjustment, advertisement, after, again, against, agreement, almost, among, amount, amusement, angle, angry, animal, answer, apparatus, apple, approval, arch, argument, army, attack, attempt, attention, attraction, authority, automatic, awake, baby, back, balance, ball, band, base, basin, basket, bath, beautiful, because, before, behaviour, belief, bell, bent, berry, between, bird, birth, bite, bitter, black, blade, blood, blow, blue, board, boat, body, boiling, bone, book, boot, bottle, brain, brake, branch, brass, bread, breath, brick, bridge, bright, broken, brother, brown, brush, bucket, building, bulb, burn, burst, business, butter, button, cake, camera, canvas, card, care, carriage, cart, cause, certain, chain, chalk, chance, change, cheap, cheese, chemical, chest, chief, chin, church, circle, clean, clear, clock, cloth, cloud, coal, coat, cold, collar, colour, comb, come, comfort, committee, common, company, comparison, competition, complete, complex, condition, connection, conscious, control, cook, copper, copy, cord, cork, cotton, cough, country, cover, crack, credit, crime, cruel, crush, current, curtain, curve, cushion, damage, danger, dark, daughter, dead, dear, death, debt, decision, deep, degree, delicate, dependent, design, desire, destruction, detail, development, different, digestion, direction, dirty, discovery, discussion, disease, disgust, distance, distribution, division, door, doubt, down, drain, drawer, dress, drink, driving, drop, dust, early, earth, event, east, edge, education, effect, elastic, electric, engine, enough, equal, error, even, ever, every, example, exchange, existence, expansion, experience, expert, face, fact, fall, false, family, farm, father, fear, feather, feeble, feeling, female, fertile, fiction, field, fight, finger, fire, first, fish, fixed, flag, flame, flat, flight, floor, flower, fold, food, foolish, foot, force, fork, form, forward, fowl, frame, free, frequent, friend, from, front, fruit, full, future, garden, general, girl, give, glass, glove, goat, gold, good, government, grain, grass, great, green, grey, grip, group, growth, guide, hair, hammer, hand, hanging, happy, harbour, hard, harmony, hate, have, head, healthy, hear, hearing, heart, heat, help, high, history, hole, hollow, hook, hope, horn, horse, hospital, hour, house, humour, idea, important, impulse, increase, industry, insect, instrument, insurance, interest, invention, iron, island, jelly, jewel, join, journey, judge, jump, keep, kettle, kick, kind, kiss, knee, knife, knot, knowledge, land, language, last, late, laugh, lead, leaf, learning, leather, left, letter, level, library, lift, light, like, limit, line, linen, liquid, list, little, living, lock, long, look, loose, loss, loud, love, machine, make, male, manager, mark, market, married, mass, match, material, meal, measure, meat, medical, meeting, memory, metal, middle, military, milk, mind, mine, minute, mist, mixed, money, monkey, month, moon, morning, mother, motion, mountain, mouth, move, much, muscle, music, nail, name, narrow, nation, natural, near, necessary, neck, need, needle, nerve, news, night, noise, normal, north, nose, note, number, observation, offer, office, only, open, operation, opinion, opposite, orange, order, organization, ornament, other, oven, over, owner, page, pain, paint, paper, parallel, parcel, part, past, paste, payment, peace, pencil, person, physical, picture, pipe, place, plane, plant, plate, play, please, pleasure, plough, pocket, point, poison, polish, political, poor, porter, position, possible, potato, powder, power, present, price, print, prison, private, probable, process, produce, profit, property, prose, protest, public, pull, pump, punishment, purpose, push, quality, question, quick, quiet, quite, rail, rain, range, rate, reaction, reading, ready, reason, receipt, record, regret, regular, relation, religion, representative, request, respect, responsible, rest, reward, rhythm, rice, right, ring, river, road, roll, roof, room, root, rough, round, rule, safe, sail, salt, same, sand, scale, school, science, scissors, screw, seat, second, secret, secretary, seed, seem, selection, self, send, sense, separate, serious, servant, shade, shake, shame, sharp, sheep, shelf, ship, shirt, shock, shoe, short, shut, side, sign, silk, silver, simple, sister, size, skin, skirt, sleep, slip, slope, slow, small, smash, smell, smile, smoke, smooth, snake, sneeze, snow, soap, society, sock, soft, solid, some, song, sort, sound, soup, south, space, spade, special, sponge, spoon, spring, square, stage, stamp, star, start, statement, station, steam, steel, stem, step, stick, sticky, stiff, still, stitch, stocking, stomach, stone, stop, store, story, straight, strange, street, stretch, strong, structure, substance, such, sudden, sugar, suggestion, summer, support, surprise, sweet, swim, system, table, tail, take, talk, tall, taste, teaching, tendency, test, than, that, then, theory, there, thick, thin, thing, this, thought, thread, throat, through, through, thumb, thunder, ticket, tight, till, time, tired, together, tomorrow, tongue, tooth, touch, town, trade, train, transport, tray, tree, trick, trouble, trousers, true, turn, twist, umbrella, under, unit, value, verse, very, vessel, view, violent, voice, waiting, walk, wall, warm, wash, waste, watch, water, wave, weather, week, weight, well, west, wheel, when, where, whip, whistle, while, white, wide, will, wind, wine, wing, winter, wire, wise, woman, wood, wool, word, work, worm, wound, writing, wrong, year, yellow, yesterday, young';

const allOfTheWords = allTheWords.split(', ');
const theWord = allOfTheWords[Math.floor(Math.random() * allOfTheWords.length)];

//define constant alphabet, prep guessed letters
const alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
let guessedLetters = new Set();
let blanks = ('_').repeat(theWord.length);

//changes when they run out of the blanks

let winner = false;
let misses = 6;

while (!winner && misses > 0) {
  console.log(`you have ${misses} guesses left`);
  console.log(`Guessed letters: ${Array.from(guessedLetters).join(', ')}`);
  console.log(blanks);

  //ask player
  let x = readline.question('Guess a letter ').toLowerCase()[0];

  // is the guess a letter? did they guess it before?
  if (alphabet.has(x) && !guessedLetters.has(x)) {
    let wrongGuess = true;

    //check each letter in theWord
    for (letterIndex in theWord) {
      //if it matches update blanks
      if (theWord[letterIndex] === x) {
        let tempBlanks  = '';

        //check each letter and build a new string to replace blanks
        for (blanksIndex in blanks) tempBlanks += blanksIndex === letterIndex ? x : blanks[blanksIndex];

        //update blanks with new string with user guesses
        blanks = tempBlanks;

        wrongGuess = false;
      }
    }

    //regardless add their guess to the list of guesse letters
    guessedLetters.add(x);

    //if not lettr was found, loose a return
    if (wrongGuess) misses--;

    //if there is a "_" then theyt haven't won yet
    winner = !blanks.includes('_');
  } else if (!alphabet.has(x)) {
    console.log(`${x} is not a letter`);
  } else if (guessedLetters.has(x)) {
    console.log(`${x} was guessed already. Try again`);
  }
}

if (misses === 0) {
  console.log('YOU LOSER!');
}

if (winner) {
  console.log('You\'re smart! Congrats!!!!');
}
