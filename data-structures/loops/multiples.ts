/*
Write a JavaScript program that is designed to calculate the sum of multiples of both 2 and 8 that fall below the number 1000.  For each number inspected, it should determine if it is divisible evenly by either 2 and 8. If the number satisfies this condition, it adds it to the running total sum.

Once all numbers under 1000 have been evaluated, the program should conclude its calculation and display the resulting sum in the console. The sum represents the collective total of all multiples of 2 and 8 found within the specified range.

Additionally, you should implement this program using both a `for` loop and another function using a `while` loop.
*/

const sumMultiplesUsingLoops = (a: number, b: number, n: number): number => {
  let total: number = 0;
  for (let index = 0; index < n; index++) {
    total = index % a === 0 && index % b === 0 ? (total += index) : total;
  }
  return total;
};

const sumMultiplesUsingWhile = (a: number, b: number, n: number): number => {
  let index: number = 0;
  let total: number = 0;
  while (index < n) {
    total = index % a === 0 && index % b === 0 ? (total += index) : total;
    index++;
  }
  return total;
};

console.log('Total using loops: ', sumMultiplesUsingLoops(2, 8, 1000));
console.log('Total using while: ', sumMultiplesUsingWhile(2, 8, 1000));
