// const readline = require('readline');

// const rl = readline.createInterface( {
//   input: process.stdin,
//   output: process.stdout
// } );
// readline.emitKeypressEvents(process.stdin);

// let name;
// let max;
// let act = 1;
// let timer;




// // rl.on('line', (input) => {
// //   console.log(`Received: ${input}`);
// // });

// const start = () => {
//   rl.question('Hello Player. What do I call you?\n>', (userInput) => {
//       if (!userInput.trim()) {
//         start();
//       } else {
//         name = userInput.trim();
//         process.stdin.on('keypress', () => {
//           rl.write('\n');
//         })
//         console.log(`Welcome ${name} to Hang-xX!`);
//         rl.setPrompt(`How many lives do you want?`);
//         rl.prompt();
//       }
//   } );
// }

// const engine = () => {
//   rl.on('line', (userInput) => {
//       switch (act) {
//         case 1:
//           max = userInput.trim();
//           act = 2;
//           // process.stdin.on('keypress', () => {
//           //   rl.write();
//           // })
//           rl.setPrompt(`Timer on?`);
//           rl.prompt();
//           break;
//         case 2:
//           timer = userInput.trim();
//           rl.close();
//       }
//   } );
// }

// start();
// engine();

// rl.on('close', () => {
//   console.log(`${name}, ${act}, ${max}, ${timer}`);
// })


for (let i = 5; i >= 0; i--) {
  setTimeout(), 1000;
}