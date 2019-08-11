const readline = require('readline');
const rl = readline.createInterface( {
  input: process.stdin,
  output: process.stdout
} );

// process.stdout.write '\u001B[2J\u001B[0;0f'

// rl.question("Input?", (userInput) => {
//   if (userInput.trim() === "hi") {
//     process.stdout.write '\u001B[2J\u001B[0;0f';
//   }
// } );

rl.on('line', (input) => {
  rl.write('\u001B[2J\u001B[0;0f');
  console.log(`Received: ${input}`);
  // process.stdout.write '\u001B[2J\u001B[0;0f';
});
