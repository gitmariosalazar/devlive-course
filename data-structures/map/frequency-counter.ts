const calculateFrequency = (array: number[]): Map<number, number> => {
  const result: Map<number, number> = new Map();
  for (let n of array) {
    let count: number = result.get(n) || 0;
    result.set(n, (count += 1));
  }
  return result;
};

const numbers: number[] = [1, 2, 1, 3, 1, 2, 1];
console.log(calculateFrequency(numbers));
