function productExceptSelf(nums: number[]): number[] {
  let answer = [];
  for (let index = 0; index < nums.length; index++) {
    answer[index] = multiply(nums, index);
  }
  return answer;
}

function multiply(nums: number[], i: number): number {
  let total: number = 1;
  [nums[i], nums[0]] = [nums[0], nums[i]];
  for (let index = 1; index < nums.length; index++) {
    total *= nums[index];
  }
  return total;
}

function productExceptSelf2(nums: number[]): number[] {
  const n = nums.length;
  const answer = new Array(n).fill(1);

  // Calculate products of all elements to the left of each index
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = leftProduct;
    leftProduct *= nums[i];
  }

  console.log(answer);

  // Multiply by products of all elements to the right of each index
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  console.log(answer);

  return answer;
}

const nums = [1, 2, 3, 4];

console.log(productExceptSelf2(nums));
