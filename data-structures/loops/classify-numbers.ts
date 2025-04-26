/*
In this coding exercise, you are tasked with creating a program that prints numbers from 1 to 50, classifying each number as either even or odd. To accomplish this, you'll develop a function that iterates through the numbers from 1 to 50, checking each one to determine if it's divisible by 2. If a number is divisible by 2, it's classified as even, and if it's not divisible by 2, it's classified as odd.
*/

const isEvenOrOdd = (n: number): void => {
  let index: number = 0;
  let result: string = '';
  while (index <= n) {
    result = index % 2 === 0 ? `${index} is even` : `${index} is odd`;
    console.log(result);
    index++;
  }
};

isEvenOrOdd(50);
