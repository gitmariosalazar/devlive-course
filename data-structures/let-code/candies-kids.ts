function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const maxHas: number = Math.max(...candies);
  const result: boolean[] = [];
  for (let kid of candies) {
    result.push(kid + extraCandies >= maxHas);
  }
  return result;
}

const candies = [2, 3, 5, 1, 3],
  extraCandies = 3;

console.log(kidsWithCandies(candies, extraCandies));
