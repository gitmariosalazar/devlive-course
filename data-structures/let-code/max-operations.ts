/*
Example 1:

Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.
Example 2:

Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.
*/

function maxOperations(nums: number[], k: number): number {
  let left: number = 0;
  let right: number = nums.length - 1;
  let count: number = 0;
  nums.sort((a, b) => a - b);
  while (left < right) {
    const sum: number = nums[left] + nums[right];
    if (sum === k) {
      count++;
      left++;
      right--;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }
  return count;
}

const nums1 = [1, 2, 3, 4];
const k1 = 5;
const nums2 = [4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4];
const k2 = 2;

console.log(maxOperations(nums1, k1));
console.log(maxOperations(nums2, k2));
