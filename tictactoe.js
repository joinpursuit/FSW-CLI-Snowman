var readlineSync = require('readline-sync');

const tictactoe = () => {  
  let ttt = [0, 1, 2, 3, 4, 5, 6, 7, 8]

  const winner = (i) => {
    console.log(`\nPlayer ${i % 2 + 1} YOU WON!!!!!!`);
    console.log(ttt[0], `|`, ttt[1], `|`, ttt[2]);
    console.log(`---------`);  
    console.log(ttt[3], `|`, ttt[4], `|`, ttt[5]);
    console.log(`---------`);  
    console.log(ttt[6], `|`, ttt[7], `|`, ttt[8]);
  }

  console.log(ttt[0], `|`, ttt[1], `|`, ttt[2]);
  console.log(`---------`);  
  console.log(ttt[3], `|`, ttt[4], `|`, ttt[5]);
  console.log(`---------`);  
  console.log(ttt[6], `|`, ttt[7], `|`, ttt[8]);

  let chosen = {}
  for (let i = 0; i < 9; i++) chosen[i] = false
  for (var i = 0; i < 9; i++) {
    let choice = readlineSync.keyIn(`\nPlayer ${i % 2 + 1} it's your turn.\nPick a number: `)
    if (chosen[choice] === undefined) {
      console.log(`\nPlease pick a number 0-8 that hasn't been chosen.\n`);
      i--
      continue;
    } else if (chosen[choice]) {
      console.log(`\nPlease pick a number that hasnt been chosen.\n`);
      i--
      continue;
    }

    ttt[choice] = i % 2 ? `O` : `X`
    chosen[choice] = true

    console.log(ttt[0], `|`, ttt[1], `|`, ttt[2]);
    console.log(`---------`);  
    console.log(ttt[3], `|`, ttt[4], `|`, ttt[5]);
    console.log(`---------`);  
    console.log(ttt[6], `|`, ttt[7], `|`, ttt[8]);
    if (Object.values(chosen).every(e => e)) {console.log(`\nIt's a draw.\nTry again.\n`); tictactoe();}
    if (ttt[4] === ttt[0] && ttt[4] === ttt[8]) {winner(i); break;}
    if (ttt[4] === ttt[1] && ttt[4] === ttt[7]) {winner(i); break;}
    if (ttt[4] === ttt[2] && ttt[4] === ttt[6]) {winner(i); break;}
    if (ttt[4] === ttt[3] && ttt[4] === ttt[5]) {winner(i); break;}
    if (ttt[0] === ttt[1] && ttt[0] === ttt[2]) {winner(i); break;}
    if (ttt[0] === ttt[3] && ttt[0] === ttt[6]) {winner(i); break;}
    if (ttt[8] === ttt[2] && ttt[8] === ttt[5]) {winner(i); break;}
    if (ttt[8] === ttt[6] && ttt[8] === ttt[7]) {winner(i); break;}
  }
}

tictactoe()
