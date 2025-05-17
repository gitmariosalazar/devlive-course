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

  find(key: K): V | null {
    if (this.has(key)) {
      return this.table.get(key)!;
    }
    return null;
  }

  add(key: K, value: V): boolean {
    if (!this.find(key)) {
      this.table.set(key, value);
      return true;
    }
    return false;
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

  getTable(): Map<K, V> {
    return this.table;
  }
}

const twoSum = (array: number[], target: number): number[][] => {
  const hashTable = new HashTable<number, number>();
  const resp: number[][] = [];

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    const complementIndex = hashTable.find(complement)!;
    if (complementIndex !== null) {
      resp.push([complementIndex, i]);
    }
    hashTable.add(array[i], i);
  }
  return resp;
};

console.log(twoSum([2, 7, 11, 15, 6, 0, 3, -6], 9));
console.log(twoSum([2, 4, 11, 15], 9));
console.log(twoSum([3, 3], 6));
console.log(twoSum([0, 2, 3, 4], 6));
