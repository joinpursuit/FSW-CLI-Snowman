# Command Line Snowman Project

For this assignment, you will build a game of [snowman](https://benstone1.github.io/Snowman-App/) that lets you play in the terminal!

![Snowman Gif](./assets/snowman.gif)

## Project setup

### Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

### Running your code

You can run your code and start the game by running it with the `node` command.

```
node src/snowman.js
```

Alternatively, you can run the following command which will do the same thing.

```
npm start
```

## Instructions

### Project Overview

Unlike other projects, this project does not have specific tests that you must pass. Instead, you must create a working game that fits a number of requirements.

To create this game, you have some existing code inside of `src/snowman.js`. That code is explained below. You may modify that code however you like, as long as you get a working game.

### Game Overview

To play "Snowman", first a random word is picked and kept hidden. The player is shown a number of blank spaces equal to the length of the word.

```
Remaining Incorrect Guesses: 7
Letters Guessed: None
Word: _ _ _ _ _ _
```

The player may then guess a letter. If the letter appears in the hidden word, that letter will be shown in place of the space.

```
Remaining Incorrect Guesses: 7
Letters Guessed: a
Word: _ a _ _ _ _
```

If that letter appears multiple times, all instances of that letter are shown.

```
Remaining Incorrect Guesses: 7
Letters Guessed: a, r
Word: _ a r r _ _
```

If the player guesses an incorrect letter, that letter is recorded and the player "loses" a remaining guess.

```
Remaining Incorrect Guesses: 6
Letters Guessed: a, r, d
Word: _ a r r _ _
```

The game ends when either the word is picked or the player is out of remaining incorrect guesses. If they guess the word, they win!

### Existing Code

The `src/snowman.js` file already has a few global variables for you to use and a few functions. Read the comments above and in each function to get a better sense of what each line of code does.

You _should not_ need to change the `readline` or `dictionary` variables. You also _should not_ need to change the `getRandomWord()` function. You _will change_ the `run()` function.

Because the comments take up a lot of space, you should feel free to delete them _once you understand what they are describing._

### Game Requirements

To complete this project your game will need to do the following.

- [ ] The user should see a number of `_` characters equal to the number of letters in the word. For example, if the word is `apple`, the user should see `_ _ _ _ _`.
- [ ] If the user enters an invalid guess (e.g. `3` or `apple`), a message should display telling the user to enter a letter. Invalid guesses should not count against the guess count.
- After each guess:
  - [ ] The user should see the new updated word, replacing all `_` with letters they have guessed. For example, if the user guesses `p` for the word `apple`, the user would see `_ p p _ _`.
  - [ ] The user should see the letters they have guessed already.
  - [ ] If the guess is incorrect, the number of remaining guesses should decrease.
  - [ ] If the guess is correct, the number of remaining guesses should stay the same.
  - [ ] Regardless of whether or not the guess is correct, the number of remaining guesses should be shown to the user.
- [ ] The game should continue until the user has won or lost.
- [ ] If the user wins, a message congratulating them should appear.
- [ ] If the user loses, the full word should be revealed and a message declaring defeat should appear.
