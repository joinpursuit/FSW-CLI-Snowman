## Command Line Snowman

For this assignment, you will build a game of [snowman](https://benstone1.github.io/Snowman-App/) that lets you play in the terminal!

![Snowman Gif](./snowman.gif)

## Setup Instructions

1. Fork the assignment repo
1. Clone your fork to your machine
1. `cd` to the cloned directory and run `npm install`
1. Create a `.gitignore` file
1. Inside .gitignore, write `node_modules`
1. Write your code in `snowman.js`

## Submission Instructions

1. Complete the project
1. Commit and push your changes to your fork
1. Submit a Pull Request back to the assignment repo
1. Paste a link to of your Fork on Canvas and submit


## Technical Requirements

- Complete all the User stories listed below
- For the "stats" like **number of remaining guesses** and **previously guessed letters**, use one object rather than several global variables.

## User Stories

Copy the user stories from the Trello board [here](https://trello.com/b/8OErA3xI/command-line-snowman-project-plan) into your own board.

### As a user, I should be presented with a random word to guess

- The computer should pick a word at random
- The user should see a number of `_` characters equal to the number of letters in the word (ex. A _ _ L E, for apple)

### As a user, I should be able to enter guesses

- Handle invalid guesses by displaying a message and having the user enter a different guess.  Invalid guesses don't count against the guess count.
- After each guess, the user should see the new updated word, replacing all `_` with letters they have guessed
- After each guess, the user should see the letters they have guessed already
- After each incorrect guess, the number of guesses should decrease.
- After each correct guess, the number of guesses should stay the same.

### As a user, I should know how many guesses I have left

- At the beginning of the game, the number of guesses remaining should be visible
- After each guess, the updated number of guesses should be visible

### As a user, I should know when I win or lose and see the correct answer.

- The game should continue until the user has won or lost
- Once the full word is guessed, the game should display how many guesses it took and display a victory message
- If the user runs out of guesses, the full word should be revealed and the game should display a defeat message

## Rubric

![acceptanceCriteriaRubric](./acceptanceCriteriaRubric.png)
![outcomesRubric](./outcomesRubric.png)
