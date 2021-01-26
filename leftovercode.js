
function gameLoop(){
    let guessLetter = getValidLetterGuess() //l
    let word = stats.randomWordAns //apple
    console.log(word) // apple
  for ( i = 0 ; i < stats.totalGuesses; i++){ // 0<8
  
      stats.trackedWord += ' _'   // '' += _
    }
    console.log(stats.trackedWord) // ' ' 
    // the guessed letter chosen if correct needs to correspond to to the index of 
    if (word.includes(guessLetter)){ //    true 'apple'.include('l')       
      for(i=0; i < word.length; i++){         //0<5
        if(guessLetter === word[i]){             
          stats.trackedWord[i] = guessLetter 
        }
      }
    }
    stats.guessedLetters.push(guessLetter)
    console.log(stats.guessedLetters)
    console.log(stats.trackedWord)
   
  }