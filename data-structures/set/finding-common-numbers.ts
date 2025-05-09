const findCommonElements = (arrayA: number[], arrayB: number[]): number[] => {
  const aux: Set<number> = new Set(arrayA);
  const result: number[] = [];
  arrayB.forEach((n) => {
    if (aux.has(n)) {
      result.push(n);
    }
  });
  return result;
};

const arr1: number[] = [1, 2, 3, 4, 5, 5, 6, 7];
const arr2: number[] = [3, 4, 5, 6, 7, 0];

const res: number[] = findCommonElements(arr1, arr2);
console.log(res);
