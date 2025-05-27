function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let nf = flowerbed.length;

  for (let i = 0; i < nf; i++) {
    let left = flowerbed[i - 1] ?? 0;
    let right = flowerbed[i + 1] ?? 0;
    if (flowerbed[i] + left + right === 0) {
      flowerbed[i] = 1;
      n--;
    }
  }
  return n <= 0;
}

const flowerbed = [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
  n = 3;

console.log(canPlaceFlowers(flowerbed, n));
