/*
In this coding exercise, you will create a JavaScript program to simulate a dice game with customizable parameters. The program will prompt the user via the console to input the number of dice rolls they wish to simulate. Each roll of the dice will be subject to the following rules:

- If the dice rolls a 6, the player wins $5.
- If the dice rolls a 1, the player wins $1.
- If the dice rolls a 2, 3, 4, or 5, the player loses $2.
*/

const play = (diceRolls: number): number => {
  let total: number = 0;
  for (let index = 0; index < diceRolls; index++) {
    const dice: number = Math.random() * 6 + 1;
    if (dice > 1 && dice < 6) {
      total += 2;
    } else if (dice === 6) {
      total += 5;
    } else {
      total += 1;
    }
  }
  return total;
};

const promptSync = require('prompt-sync')();
const diceRolls: number = parseInt(promptSync(`Enter a dice rolls: `));
const gameTotal: number = play(diceRolls);
console.log('Cumulative amount at the end of the game: $', gameTotal);
