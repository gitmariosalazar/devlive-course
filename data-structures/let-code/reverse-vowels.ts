function reverseVowels(s: string): string {
  const str: string[] = Array.from(s);
  const clone: string[] = [...str];
  const revVowels: string[] = searchVowels(str);
  for (let index = 0; index < clone.length; index++) {
    isVowel(clone[index]) ? (clone[index] = revVowels.shift()!) : null;
  }
  return clone.join('');
}

const searchVowels = (s: string[]): string[] => {
  const result: string[] = [];
  while (s.length > 0) {
    const aux = s.shift();
    isVowel(aux!) ? result.push(aux!) : result;
  }
  return result.reverse();
};

function isVowel(char: string): boolean {
  return 'aeiouAEIOU'.includes(char);
}

function reverseVowels2(s: string): string {
  const vowels = new Set('aeiouAEIOU');
  const chars = s.split('');
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    while (left < right && !vowels.has(chars[left])) {
      left++;
    }
    while (left < right && !vowels.has(chars[right])) {
      right--;
    }
    if (left < right) {
      [chars[left], chars[right]] = [chars[right], chars[left]];
      left++;
      right--;
    }
  }
  return chars.join('');
}

const s = 'IceC.r,eAm';
console.log(s);
console.log(reverseVowels2(s));
