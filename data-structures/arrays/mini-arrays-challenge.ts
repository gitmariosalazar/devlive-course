const isPrime = (n: number): boolean => {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  const sqrt = Math.sqrt(n);
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
};

const SmallestPrime = (array: number[]): number | null => {
  let smallest: number | null = null;
  for (let num of array) {
    if (isPrime(num)) {
      if (smallest === null || num < smallest) {
        smallest = num;
      }
    }
  }
  return smallest;
};

const prime: boolean = isPrime(17);
console.log(prime);
const testNumbers: number[] = [20, 21, 22, 24, 24, 17, 7, 25, 14, 18, 18];

const small: number | null = SmallestPrime(testNumbers);
console.log(`Smallest prime: ${small}`);
