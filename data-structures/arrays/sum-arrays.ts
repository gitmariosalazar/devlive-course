const sumArrays = (a: number[], b: number[]): number[] => {
  const result: number[] = [];
  let i: number = 0;
  for (let n of a.length > b.length ? a : b) {
    result.push(n + a.length > b.length ? a[i] : b[i]);
    i++;
  }
  return result;
};

const arrayNum1 = [1, 0, 2, 3, 4];
const arrayNum2 = [3, 5, 6, 7, 8, 13, 9];

const r: number[] = sumArrays(arrayNum2, arrayNum1);
console.log(r);
