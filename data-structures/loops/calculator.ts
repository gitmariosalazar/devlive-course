/*
Your mission is to develop a calculator featuring a user-friendly menu offering arithmetic operations: addition, subtraction, multiplication, division, and exit. Once an operation is selected, the program will prompt the user to input two integers. Upon receiving the input, the program will execute the chosen operation and display the result. This process will repeat in a loop until the user opts to exit.
*/

const prompt = require('prompt-sync')();

export class Calculator {
  play() {
    let option: number = parseInt(prompt(`Enter a option: `));
    while (option > 0 && option < 5) {
      const a: number = parseFloat(prompt(`Enter the number a: `));
      const b: number = parseFloat(prompt(`Enter the number b: `));
      let resp: number = 0;
      switch (option) {
        case 1:
          resp = a + b;
          console.log(`Addition result is: ${resp}`);
          break;
        case 2:
          resp = a - b;
          console.log(`Subtraction result is: ${resp}`);
          break;
        case 3:
          resp = a * b;
          console.log(`Multiplication result is: ${resp}`);
          break;
        case 4:
          resp = a / b;
          console.log(`Division result is: ${resp}`);
          break;
        default:
          console.log(`Option is not valid!`);
          break;
      }
      option = parseInt(prompt(`Enter a option: `));
    }
  }
}

const calculator: Calculator = new Calculator();
calculator.play();
