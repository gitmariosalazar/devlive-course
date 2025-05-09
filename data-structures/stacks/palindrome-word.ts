const isPalindrome = (word: string): boolean => {
  word = word.replace(/[^a-zA-Z]/g, '').toLocaleLowerCase();
  const stack: string[] = word.split('');
  for (let index = 0; index < word.length / 2; index++) {
    if (word[index] !== stack.pop()) {
      return false;
    }
  }
  return true;
};

const value1: string = 'racecar';
console.log(isPalindrome(value1));

const value2: string = 'hello';
console.log(isPalindrome(value2));

const value3: string = 'A man, a plan, a canal: Panama';
console.log(isPalindrome(value3));
