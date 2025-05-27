/*
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 */

namespace maxConsecutivesOnes {
  function longestOnes(nums: number[], k: number): number {
    let left: number = 0;
    let zeros: number = 0;
    let maxLength: number = 0;
    for (let index = 0; index < nums.length; index++) {
      if (nums[index] === 0) {
        zeros++;
      }
      while (zeros > k) {
        if (nums[left] === 0) {
          zeros--;
        }
        left++;
      }
      const distance: number = index - left + 1;
      maxLength = Math.max(maxLength, distance);
    }
    return maxLength;
  }
  const nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
  const k = 3;
  console.log(longestOnes(nums, k));
}
