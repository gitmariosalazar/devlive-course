import { count } from 'console';

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
    return this.table.get(key);
  }

  add(key: K, value: V): boolean {
    if (!this.find(key)) {
      this.table.set(key, value);
      return true;
    }
    return false;
  }

  getKey(key: K): K | undefined {
    if (this.table.has(key)) {
      return key;
    }
    return undefined;
  }

  update(key: K, value: V): boolean {
    if (this.find(key)) {
      this.table.set(key, value);
      return true;
    }
    return false;
  }

  remove(key: K): boolean {
    return this.table.delete(key);
  }

  public getTable(): Map<K, V> {
    return this.table;
  }
}

const mostFrequentWord = (words: string[]): [string, number] => {
  const table = new HashTable<string, number>();
  let mostCommon = '';
  let maxCount = 0;
  for (const word of words) {
    const lowerCaseWord: string = word.toLocaleLowerCase();
    const count = (table.find(lowerCaseWord) ?? 0) + 1;
    table.getTable().set(lowerCaseWord, count);
    if (count > maxCount) {
      maxCount = count;
      mostCommon = lowerCaseWord;
    }
  }

  return [mostCommon, maxCount];
};

const array: string[] = [
  'dog',
  'cat',
  'dog',
  'dog',
  'cat',
  'bird',
  'dog',
  'Cat',
  'dog',
  'cat',
  'cat',
  'dog',
  'cat',
  'cat'
];

console.log(mostFrequentWord(array));
