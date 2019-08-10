const readline = require('readline-sync');
const say = require('say');
const paint = require('colors');

let balloon6 = [
"___💙💙___💙💙___________________________________💙💙___💙💙_______",
"__💙💙💙_💙💙💙__________________________________💙💙💙_💙💙💙______",
"___💙💙💙💙💙💙__________________________________💙💙💙💙💙💙_______",
"____💙💙💙💙💙____________________________________💙💙💙💙💙_______",
"______💙💙💙________________________________________💙💙💙__________",
"________💙____________________________________________💙___________",
"__________§___________________________________________§____________",
"____________§________💚💚__💚💚 ______💚💚__💚💚______§_____________",
"______________§_____💚💚💚_💚💚💚____💚💚💚_💚💚💚___§______________",
"_______________§____💚💚💚💚💚💚_____💚💚💚💚💚💚___§______________",
"_______________§_____💚💚💚💚💚_______💚💚💚💚💚__§________________",
"___💛💛___💛💛___§______💚💚💚__________💚💚💚__§____💛💛___💛💛____",
"__💛💛💛_💛💛💛___§_______💚______________💚__§_____💛💛💛_💛💛💛___",
"___💛💛💛💛💛💛___§________§______________§___§_____💛💛💛💛💛💛___",
"____💛💛💛💛💛____§________§____________§____§_______💛💛💛💛💛____",
"______💛💛💛_____§_________§___________§____§__________💛💛💛______",
"________💛________§________§___________§____§___________💛________",
"_________§________§_______§_________§_____§____________§________",
"____________§________§____§________§____§_____________§_________",
"________________§______§___§______§___§______________§__________",]



let balloon5 = [
"________________________________________________💙💙___💙💙_______",
"_______________________________________________💙💙💙_💙💙💙______",
"_______________________________________________💙💙💙💙💙💙_______",
"________________________________________________💙💙💙💙💙_______",
"__________________________________________________💙💙💙__________",
"____________________________________________________💙___________",
"____________________________________________________§____________",
"_____________________💚💚__💚💚 ______💚💚__💚💚______§_____________",
"____________________💚💚💚_💚💚💚____💚💚💚_💚💚💚___§______________",
"____________________💚💚💚💚💚💚_____💚💚💚💚💚💚___§______________",
"_____________________💚💚💚💚💚_______💚💚💚💚💚__§________________",
"___💛💛___💛💛__________💚💚💚___________💚💚💚__§___💛💛___💛💛____",
"__💛💛💛_💛💛💛___________💚_______________💚__§____💛💛💛_💛💛💛___",
"___💛💛💛💛💛💛____________§______________§___§_____💛💛💛💛💛💛___",
"____💛💛💛💛💛_____________§____________§____§_______💛💛💛💛💛____",
"______💛💛💛_______________§___________§____§__________💛💛💛______",
"________💛_________________§__________§___§______________💛________",
"_________§________________§_________§_____§____________§________",
"____________§_____________§________§____§_____________§_________",
"________________§__________§______§___§______________§__________"]



let balloon4 = [
"________________________________________________💙💙___💙💙_______",
"_______________________________________________💙💙💙_💙💙💙______",
"_______________________________________________💙💙💙💙💙💙_______",
"________________________________________________💙💙💙💙💙_______",
"__________________________________________________💙💙💙__________",
"____________________________________________________💙___________",
"_____________________________________________________§____________",
"_____________________💚💚__💚💚 ______💚💚__💚💚______§_____________",
"____________________💚💚💚_💚💚💚____💚💚💚_💚💚💚___§______________",
"____________________💚💚💚💚💚💚_____💚💚💚💚💚💚___§______________",
"_____________________💚💚💚💚💚_______💚💚💚💚💚__§________________",
"___💛💛___💛💛__________💚💚💚__________💚💚💚____§_________________",
"__💛💛💛_💛💛💛___________💚______________💚___§__________________",
"___💛💛💛💛💛💛____________§______________§___§__________________",
"____💛💛💛💛💛_____________§____________§____§___________________",
"______💛💛💛_______________§___________§____§___________________",
"________💛________________§___________§____§____________________",
"_________§________________§_________§_____§_____________________",
"____________§_____________§________§____§_______________________",
"________________§__________§______§___§_________________________"]



let balloon3 = [
"________________________________________________💙💙___💙💙_______",
"_______________________________________________💙💙💙_💙💙💙______",
"_______________________________________________💙💙💙💙💙💙_______",
"________________________________________________💙💙💙💙💙_______",
"__________________________________________________💙💙💙__________",
"____________________________________________________💙___________",
"___________________________________________________§____________",
"_____________________💚💚__💚💚 ____________________§_____________",
"____________________💚💚💚_💚💚💚__________________§______________",
"____________________💚💚💚💚💚💚__________________§______________",
"_____________________💚💚💚💚💚__________________§________________",
"___💛💛___💛💛__________💚💚💚__________________§_________________",
"__💛💛💛_💛💛💛___________💚___________________§__________________",
"___💛💛💛💛💛💛____________§__________________§__________________",
"____💛💛💛💛💛_____________§_________________§___________________",
"______💛💛💛_______________§________________§___________________",
"________💛________________§________________§____________________",
"_________§________________§_______________§_____________________",
"____________§_____________§_____________§_______________________",
"________________§__________§__________§_________________________"]



let balloon2 = [
"________________________________________________💙💙___💙💙_______",
"_______________________________________________💙💙💙_💙💙💙______",
"_______________________________________________💙💙💙💙💙💙_______",
"________________________________________________💙💙💙💙💙_______",
"__________________________________________________💙💙💙__________",
"____________________________________________________💙___________",
"___________________________________________________§____________",
"_____________________💚💚__💚💚 ____________________§_____________",
"____________________💚💚💚_💚💚💚__________________§______________",
"____________________💚💚💚💚💚💚__________________§______________",
"_____________________💚💚💚💚💚__________________§________________",
"_______________________💚💚💚__________________§_________________",
"_________________________💚___________________§__________________",
"__________________________§__________________§__________________",
"__________________________§_________________§___________________",
"__________________________§________________§___________________",
"__________________________§________________§____________________",
"__________________________§_______________§_____________________",
"__________________________§_____________§_______________________",
"___________________________§__________§_________________________"]



let balloon1 = [
"_________________________________________________________________",
"_________________________________________________________________",
"________________________________________________________________",
"________________________________________________________________",
"________________________________________________________________",
"________________________________________________________________",
"________________________________________________________________",
"_____________________💚💚__💚💚 __________________________________",
"____________________💚💚💚_💚💚💚_________________________________",
"____________________💚💚💚💚💚💚_________________________________",
"_____________________💚💚💚💚💚___________________________________",
"_______________________💚💚💚____________________________________",
"_________________________💚______________________________________",
"__________________________§_____________________________________",
"__________________________§_____________________________________",
"__________________________§____________________________________",
"__________________________§_____________________________________",
"__________________________§_____________________________________",
"__________________________§_____________________________________",
"___________________________§____________________________________"]



let balloon0 = [
'_________________________________________________________________',
'_________________________________________________________________',
'________________________________________________________________',
'________________________________________________________________',
'________________________________________________________________',
'________________________________________________________________',
'________________________________________________________________',
'________________________________________________________________',
'_________________________________________________________________',
'________________________________________________________________',
'________________________________________________________________',
'________________________________________________________________',
'________________________________________________________________',
'________________________________________________________________',
'________________________________________________________________',
'________________________________________________________________',
'________________________________________________________________',
'________________________________________________________________',
'________________________________________________________________',
'________________________________________________________________']



let allBalloons = [balloon0, balloon1, balloon2, balloon3, balloon4, balloon5, balloon6]
let guess = 6
let allTheWords = 'able, about, account, acid, across, addition, adjustment, advertisement, after, again, against, agreement, almost, among, amount, amusement, angle, angry, animal, answer, apparatus, apple, approval, arch, argument, army, attack, attempt, attention, attraction, authority, automatic, awake, baby, back, balance, ball, band, base, basin, basket, bath, beautiful, because, before, behaviour, belief, bell, bent, berry, between, bird, birth, bite, bitter, black, blade, blood, blow, blue, board, boat, body, boiling, bone, book, boot, bottle, brain, brake, branch, brass, bread, breath, brick, bridge, bright, broken, brother, brown, brush, bucket, building, bulb, burn, burst, business, butter, button, cake, camera, canvas, card, care, carriage, cart, cause, certain, chain, chalk, chance, change, cheap, cheese, cheetah, chemical, chest, chief, chin, church, circle, clean, clear, clock, cloth, cloud, coal, coat, cold, collar, colour, comb, come, comfort, committee, common, company, comparison, competition, complete, complex, condition, connection, conscious, control, cook, copper, copy, cord, cork, cotton, cough, country, cover, crack, credit, crime, cruel, crush, current, curtain, curve, cushion, damage, danger, dark, daughter, dead, dear, death, debt, decision, deep, degree, delicate, dependent, design, desire, destruction, detail, development, different, digestion, direction, dirty, discovery, discussion, disease, disgust, distance, distribution, division, door, doubt, down, drain, drawer, dress, drink, driving, drop, dust, early, earth, east, edge, education, effect, elastic, electric, engine, enough, equal, error, even, event, ever, every, example, exchange, existence, expansion, experience, expert, face, fact, fall, false, family, farm, father, fear, feather, feeble, feeling, female, fertile, fiction, field, fight, finger, fire, first, fish, fixed, flag, flame, flat, flight, floor, flower, fold, food, foolish, foot, force, fork, form, forward, fowl, frame, free, frequent, friend, from, front, fruit, full, future, garden, general, girl, give, glass, glove, goat, gold, good, government, grain, grass, great, green, grey, grip, group, growth, guide, hair, hammer, hand, hanging, happy, harbour, hard, harmony, hate, have, head, healthy, hear, hearing, heart, heat, help, high, history, hole, hollow, hook, hope, horn, horse, hospital, hour, house, humour, idea, important, impulse, increase, industry, insect, instrument, insurance, interest, invention, iron, island, jelly, jewel, join, journey, judge, jump, keep, kettle, kick, kind, kiss, knee, knife, knot, knowledge, land, language, last, late, laugh, lead, leaf, learning, leather, left, letter, level, library, lift, light, like, limit, line, linen, liquid, list, little, living, lock, long, look, loose, loss, loud, love, machine, make, male, manager, mark, market, married, mass, match, material, meal, measure, meat, medical, meeting, memory, metal, middle, military, milk, mind, mine, minute, mist, mixed, money, monkey, month, moon, morning, mother, motion, mountain, mouth, move, much, muscle, music, nail, name, narrow, nation, natural, near, necessary, neck, need, needle, nerve, news, night, noise, normal, north, nose, note, number, observation, offer, office, only, open, operation, opinion, opposite, orange, order, organization, ornament, other, oven, over, owner, page, pain, paint, paper, parallel, parcel, part, past, paste, payment, peace, pencil, person, physical, picture, pipe, place, plane, plant, plate, play, please, pleasure, plough, pocket, point, poison, polish, political, poor, porter, position, possible, potato, powder, power, present, price, print, prison, private, probable, process, produce, profit, property, prose, protest, public, pull, pump, punishment, purpose, push, quality, question, quick, quiet, quite, rail, rain, range, rate, reaction, reading, ready, reason, receipt, record, regret, regular, relation, religion, representative, request, respect, responsible, rest, reward, rhythm, rice, right, ring, river, road, roll, roof, room, root, rough, round, rule, safe, sail, salt, same, sand, scale, school, science, scissors, screw, seat, second, secret, secretary, seed, seem, selection, self, send, sense, separate, serious, servant, shade, shake, shame, sharp, sheep, shelf, ship, shirt, shock, shoe, short, shut, side, sign, silk, silver, simple, sister, size, skin, skirt, sleep, slip, slope, slow, small, smash, smell, smile, smoke, smooth, snake, sneeze, snow, soap, society, sock, soft, solid, some, song, sort, sound, soup, south, space, spade, special, sponge, spoon, spring, square, stage, stamp, star, start, statement, station, steam, steel, stem, step, stick, sticky, stiff, still, stitch, stocking, stomach, stone, stop, store, story, straight, strange, street, stretch, strong, structure, substance, such, sudden, sugar, suggestion, summer, support, surprise, sweet, swim, system, table, tail, take, talk, tall, taste, teaching, tendency, test, than, that, then, theory, there, thick, thin, thing, this, thought, thread, throat, through, through, thumb, thunder, ticket, tight, till, time, tired, together, tomorrow, tongue, tooth, touch, town, trade, train, transport, tray, tree, trick, trouble, trousers, true, turn, twist, umbrella, under, unit, value, verse, very, vessel, view, violent, voice, waiting, walk, wall, warm, wash, waste, watch, water, wave, weather, week, weight, well, west, wheel, when, where, while, whip, whistle, white, wide, will, wind, window, wine, wing, winter, wire, wise, with, woman, wood, wool, word, work, worm, wound, writing, wrong, year, yellow, yesterday, young, zebra, zoo'.split(', ')


const getRandomWord = (array) => {
  return allTheWords[Math.floor(Math.random() * allTheWords.length)];
};


const start = () => {
  console.log('');
  console.log('');
  console.log(paint.bold.underline(`Welcome to Balloon Pop.`));
  const selectedWord = getRandomWord(allTheWords).split('');
  console.log('');
  const selectedWordBlanks = [];
  for (let i = 0; i < selectedWord.length; i++) {
    selectedWordBlanks[i] = '_';
  }

  let answerArray = selectedWordBlanks;
  console.log('');
  console.log('');
  console.log(paint.bold(selectedWordBlanks.join(' ')));

  let remainingLetters = selectedWord.length;
  let guessedLetters = [];

  say.speak(`Welcome to Balloon Pop. Your mystery word is ${selectedWord.length} letters long. Please enter you guess.`)
  for (; remainingLetters > 0 && guess > 0;) {
    console.log('');
    console.log('');
    graphic()
    console.log(`You have ${paint.red(guess)} guess(es) remaining.`);
    console.log('');
    console.log('');
    if (guess > 0) {
      console.log('');
      console.log(`These are your previously guessed letters: ${guessedLetters}`)
      console.log('');
      console.log('');
      let input = readline.question(`Please enter your guess: `);
      input = input.toLowerCase()
      console.log('');
      if (guess === 0) {
        console.log(`The word was ${selectedWord.join('')}`);
      } else if (selectedWord.includes(input)) {
        console.log('');
        for (let k = 0; k < selectedWord.length; k++) {
          if (selectedWord[k] === input) {
            answerArray[k] = input;
            remainingLetters--;
            say.stop();
            say.speak(`You got it!`);
          }
          for (; remainingLetters === 0; remainingLetters--) {
            console.log(paint.bold(selectedWord.join('').toUpperCase()));
            console.log('');
            console.log('');
            youWin();
            say.stop();
            say.speak ('Congratulations, none of your ballons popped! Would you like to play again?');
            console.log('');
            console.log('');
            switch (readline.keyInYNStrict('Play again?')) {
              case true : start()
                break
              case false : return
            }
          }
        }
        console.log(answerArray.join('').toUpperCase());
      } else {
        console.log('');
        guess--;
        guessedLetters.push(input);
        console.log(answerArray.join(''));
        say.stop();
        say.speak(`POP, you lost a balloon.       You now have ${guess} guesses remaining.`)
        if (guess === 0) {
          console.log('');
          graphic()
          console.log(`You have ${paint.red(guess)} guess(es) remaining.`);
          say.stop();
          say.speak(`All your balloons popped. Better luck next time.     The word was ${selectedWord.join('')}.      Would you like to play again?`)
          console.log('');
          console.log('');
          console.log(`The word was ${paint.red(selectedWord.join('').toUpperCase())}`);
          console.log('');
          console.log('');
          youLose();
          console.log('');
          console.log('');
          switch (readline.keyInYNStrict('Play again?')) {
            case true : start()
              break
            case false : return
          }                                                                                                                                                                                                                                                                                                                                        }
      }
    }
  }
}

start();



function youWin() {
  let win1 = ["__  __ ____   __  __   _      __ ____ _  __"];
  let win2 = ["\\ \\/ // __ \\ / / / /  | | /| / //  _// |/ /"];
  let win3 = [" \\  // /_/ // /_/ /   | |/ |/ /_/ / /    / "];
  let win4 = [" /_/ \\____/ \\____/    |__/|__//___//_/|_/  "];
  let win5 = ["                                           "];

  console.log(paint.rainbow(win1.join()));
  console.log(paint.rainbow(win2.join()));
  console.log(paint.rainbow(win3.join()));
  console.log(paint.rainbow(win4.join()));
  console.log(paint.rainbow(win5.join()));
}

function youLose() {
  let lose1 = ["__  __ ____   __  __  __   ____   ____ ____"];
  let lose2 = ["\\ \\/ // __ \\ / / / / / /  / __ \\ / __// __/"];
  let lose3 = [" \\  // /_/ // /_/ / / /__/ /_/ /_\\ \\ / _/  "];
  let lose4 = [" /_/ \\____/ \\____/ /____/\\____//___//___/  "];
  let lose5 = ["                                           "];

  console.log(paint.red(lose1.join()));
  console.log(paint.red(lose2.join()));
  console.log(paint.red(lose3.join()));
  console.log(paint.red(lose4.join()));
  console.log(paint.red(lose5.join()));
}

function graphic () {
  console.log(allBalloons[guess]);
}
