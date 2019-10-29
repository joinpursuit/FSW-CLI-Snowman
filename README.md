### Obeject Oriented Programming 
You should build this game in true OOP fashion. To write this game it will be helpful to think about the two players as referee and guesser. If you choose to make both roles interchangable your ComputerPlayer and HumanPlayer will need to have the same method calls available. Think about the following classes that may be helpful. 
1. Board
  * This would construct a board to the length. 
  * It should check if the board is complete. 
  * It should be able to add characters at differnect indicies. 
2. HumanPlayer 
  * Will need to getMove from player. 
  * Display the board. 
  * Possibly a select secret word that returns the length. 
  * Possibly a givePostioins that returns an array of indicies. 
  * Possibly a reveal word. 
3. ComputerPlayer 
  * Should have a dictionary.
  * Should have secretWord and return it's length. 
  * Should have a reveal. 
  * Should give the positions of guessed characters. 
  * Possibly have a getMove. 
4. Game 
  * Should have guesser and referee. 
  * Should have guesses remaining. 
  * Should have a play function. 
  * Should check for validity of guess. 
  * Should have an isGameOver. 
  
Although all of these methods are not strictly required, they are highly recommened. With OOP it can sometimes be tough to determine which object should truly have responsibilty for what. You are allowed to make adjustments to structure where you see fit. 

## Requirements

1. The user must be able to play against the computer
1. The word that the computer chooses must be random. There is a large array of words below.
1. The user must have a limited number of guesses
1. After each guess, the computer should print out the current state of the word you are guessing.  (ex. A _ _ L E, for apple)
1. After each guess the computer should print out how many guesses you have remaining.
1. The computer should tell the user if she wins, show her how many guesses it took and end the current game
1. The user should see the correct answer if she loses
