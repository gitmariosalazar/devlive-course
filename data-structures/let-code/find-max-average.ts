namespace findAverage {
  function findMaxAverage(nums: number[], k: number): number {
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
      windowSum += nums[i];
    }
    let maxAverage = windowSum;
    let index: number = k;
    while (index < nums.length) {
      windowSum += -nums[index - k] + nums[index];
      maxAverage = Math.max(windowSum, maxAverage);
      index++;
    }
    return maxAverage / k;
  }
  const nums = [1, 12, -5, -6, 50, 3];
  const k = 4;
  console.log(findMaxAverage(nums, k));
}
