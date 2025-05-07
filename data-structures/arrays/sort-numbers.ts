const sortNumbers = (numbers: number[]): number[] => {
  return numbers.sort((a, b) => b - a);
};

const numSeries: number[] = [1, 10, 4, 7, 6, 3];
console.log(numSeries);
console.log(sortNumbers(numSeries));
