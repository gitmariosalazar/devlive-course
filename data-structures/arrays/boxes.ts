const CalculateAverageWeight = (array: number[]): number => {
  let total: number = 0;
  for (let weight of array) {
    total += weight;
  }
  return total / array.length;
};

const CalculateBoxesExceedsWeight = (
  array: number[],
  averageWeight: number
): number[] => {
  const aux: number[] = [];
  for (let weight of array) {
    if (weight > averageWeight) {
      aux.push(weight);
    }
  }
  return aux;
};

const weightsInBox: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const averageWeight: number = CalculateAverageWeight(weightsInBox);
console.log(`Average Weight: ${averageWeight}`);
const boxesExceedsWeight: number[] = CalculateBoxesExceedsWeight(
  weightsInBox,
  averageWeight
);
console.log(`Boxes exceeding average weight: ${boxesExceedsWeight.length}`);
