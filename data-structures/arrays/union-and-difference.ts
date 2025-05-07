const union = (a: number[], b: number[]): number[] => {
  const result: number[] = [...a];
  for (let index = 0; index < b.length; index++) {
    if (!result.includes(b[index])) {
      result.push(b[index]);
    }
  }
  return result;
};

const difference = (a: number[], b: number[]): number[] => {
  const result: number[] = [];
  for (let na of a) {
    if (!b.includes(na)) {
      result.push(na);
    }
  }
  for (let nb of b) {
    if (!a.includes(nb)) {
      result.push(nb);
    }
  }
  return result;
};

const array1 = [1, 2, 3];
const array2 = [100, 2, 1, 1];

console.log(union(array1, array2));
console.log(difference(array1, array2));
