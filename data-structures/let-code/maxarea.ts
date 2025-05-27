function maxArea(height: number[]): number {
  let left: number = 0;
  let right: number = height.length - 1;
  let maxAreaFound: number = 0;
  while (left < right) {
    const h: number = Math.min(height[left], height[right]);
    const weight: number = right - left;
    const area = h * weight;
    maxAreaFound = Math.max(area, maxAreaFound);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxAreaFound;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
