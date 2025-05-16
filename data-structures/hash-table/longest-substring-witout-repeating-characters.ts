export class HashTable<K, V> {
  private table: Map<K, V>;
  constructor(initial?: [K, V][]) {
    this.table = new Map<K, V>(initial);
  }

  size(): number {
    return this.table.size;
  }

  has(key: K): boolean {
    return this.table.has(key);
  }

  find(key: K): V | undefined {
    if (this.table.has(key)) {
      return this.table.get(key);
    }
    return undefined;
  }

  add(key: K, value: V): boolean {
    if (!this.has(key)) {
      this.table.set(key, value);
      return true;
    }
    return false;
  }

  update(key: K, value: V): boolean {
    if (this.find(key) !== undefined) {
      this.table.set(key, value);
      return true;
    }
    return false;
  }

  remove(key: K): boolean {
    return this.table.delete(key);
  }

  getTable(): Map<K, V> {
    return this.table;
  }
}

const longestSubstringWithoutRepeatingCharacters = (
  word: string
): [string, number] => {
  let start: number = 0;
  let maxLength: number = 0;
  let maxSubstring: string = '';
  const hash = new HashTable<string, number>();
  for (let end = 0; end < word.length; end++) {
    const char: string = word[end];
    if (hash.find(char) !== undefined) {
      start = hash.find(char)! + 1;
    }
    if (!hash.add(char, end)) {
      hash.update(char, end);
    }
    const currentLength: number = end - start + 1;
    if (currentLength > maxLength) {
      maxLength = currentLength;
      maxSubstring = word.substring(start, end + 1);
    }
  }
  return [maxSubstring, maxLength];
};

//
console.log(longestSubstringWithoutRepeatingCharacters('abcabcbefghibeffghi'));
console.log(longestSubstringWithoutRepeatingCharacters('bbbbb'));
console.log(longestSubstringWithoutRepeatingCharacters('pwwkewlllllll'));
