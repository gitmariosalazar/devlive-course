export class HashTable<K, V> {
  table: Map<K, V>;

  constructor(initial?: [K, V][]) {
    this.table = new Map<K, V>(initial);
  }

  size(): number {
    return this.table.size;
  }

  has(key: K): boolean {
    return this.table.has(key);
  }

  get(key: K): V | undefined {
    return this.table.get(key);
  }

  set(key: K, value: V): boolean {
    if (!this.get(key)) {
      this.table.set(key, value);
      return true;
    }
    return false;
  }

  update(key: K, value: V): boolean {
    if (this.get(key)) {
      this.table.set(key, value);
      return true;
    }
    return false;
  }

  delete(key: K): boolean {
    return this.table.delete(key);
  }

  clear(): boolean {
    if (this.size() > 0) {
      this.table.clear();
      return true;
    }
    return false;
  }

  keys(): K[] {
    return Array.from(this.table.keys());
  }

  entries(): [K, V][] {
    return Array.from(this.table.entries());
  }

  values(): V[] {
    return Array.from(this.table.values());
  }

  forEach(callback: (value: V, key: K) => void): void {
    this.table.forEach(callback);
  }
}

/*
Descripción: Dado un texto largo, contar cuántas veces aparece cada palabra y devolver la palabra más frecuente.
*/

function frequentlyWords(input: string): HashTable<string, number> {
  const result: HashTable<string, number> = new HashTable();
  const arrayString: string[] = input.split(' ');
  for (const word of arrayString) {
    if (result.has(word)) {
      let current: number = result.get(word)!;
      result.update(word, (current += 1));
    } else {
      result.set(word, 1);
    }
  }
  return result;
}

const input: string = 'the quick brown fox jumps over the lazy dog the quick';
const freqWords: HashTable<string, number> = frequentlyWords(input);
//console.log(freqWords);
// Output: "the" (aparece 3 veces)

const sorterWord = (word: string): string => {
  return word.split('').sort().join('');
};

const groupAnagrams = (words: string[]): HashTable<string, string[]> => {
  const result: HashTable<string, string[]> = new HashTable();
  for (let word of words) {
    const key: string = sorterWord(word);
    if (!result.has(key)) {
      result.set(key, []);
    }
    result.get(key)?.push(word);
  }
  return result;
};

const groupOfWords: string[] = ['bat', 'tab', 'cat', 'act', 'tac', 'dog'];

//console.log(groupAnagrams(groupOfWords));

// First character not repeat

const firstCharacterNoRepeat = (word: string): string => {
  const result: HashTable<string, string> = new HashTable();
  for (let character of word) {
    if (!result.has(character)) {
      result.set(character, character);
    } else {
      result.delete(character);
    }
  }
  return Array.from(result.keys())[0];
};

const word3: string = 'aahbbcdeffhcde';
//console.log(firstCharacterNoRepeat(word3));

// Find the pairs with his sum

const findPairsWithSum = (numbers: number[], target: number): number[][] => {
  const seen = new HashTable<number, boolean>();
  const result = new HashTable<string, number[]>();

  for (const num of numbers) {
    const complement = target - num;
    if (seen.has(complement)) {
      const pair = [Math.min(num, complement), Math.max(num, complement)];
      const key = pair.join(',');
      if (!result.has(key)) {
        result.set(key, pair);
      }
    }
    seen.set(num, true);
  }

  return Array.from(result.values());
};

const numbers = [1, 2, 12, 14, 15, 3, 4, 5, 0, 6, 0, 6, 6, 0];
const target = 6;

console.log(findPairsWithSum(numbers, target));
