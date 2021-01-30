function gameLoop() {
 
    while (playStat['chances'] > 0) {
      let displayBoard = board.join(''); 
      console.log(word)
      let input = getValidLetterGuess()
      console.log(playStat['lettersGuessedAlready'])
      console.log(displayBoard)
      console.log(`${playStat['chances']} chances left!`)
      
      compareAnswerToWord(input)
      if (displayBoard === word) {
        console.log('||||||           ||||||  |||||||||||||||||||||||  |||||  /////////||| ')
        console.log('||||||  |||||||  ||||||  ||||||||     ||||||||||  |||||//////////|||| ')
        console.log('||||||  |||||||  ||||||       //       //         |||||         ||||| ')
        console.log('||||||  |||||||  ||||||       //       //         |||||         ||||| ')
        console.log(' ||||//////////////|||   ||||||||     ||||||||||  |||||         ||||| ')
        console.log(' //////  /////   /////   |||||||||||||||||||||||  |||||         ||||| ')
        start()
      } else if (playStat['chances']===0){
        console.log('|||||         |||||||||||||||||  |||||||||||||||||  ||||||||||||||||   ')
        console.log('|||||         |||||||||||||||||  |||||||||||||||||  ||||||||||||||||   ')
        console.log('|||||         ||||||     ||||||  ||||||             ||||||             ')
        console.log('|||||         ||||||     ||||||  ||||||||||||||||   |||||||||          ')
        console.log('|||||         ||||||     ||||||           |||||||   |||||||||          ')
        console.log('|||||         ||||||     ||||||           |||||||   ||||||             ')
        console.log('||||||||||||  |||||||||||||||||  ||||||||||||||||   ||||||||||||||||   ')
        console.log('||||||||||||  |||||||||||||||||  ||||||||||||||||   ||||||||||||||||   ')
        start()
      }
    }
  }