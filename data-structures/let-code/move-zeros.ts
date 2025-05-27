function moveZeroes(nums: number[]): void {
  let insertPos = 0;

  // Paso 1: Mueve todos los números distintos de cero al frente
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos++] = nums[i];
    }
  }

  // Paso 2: Rellena el resto con ceros
  while (insertPos < nums.length) {
    nums[insertPos++] = 0;
  }
}

const array = [0, 1, 0, 3, 12];
moveZeroes(array);
console.log(array);
