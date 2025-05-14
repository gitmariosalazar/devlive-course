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
    if (!this.has(key)) {
      this.table.set(key, value);
      return true;
    }
    return false;
  }

  remove(key: K): boolean {
    return this.table.delete(key);
  }

  update(key: K, value: V): boolean {
    if (this.find(key)) {
      this.table.set(key, value);
      return true;
    }
    return false;
  }
}

export interface Response {
  isValid: boolean;
  hash: HashTable<string, number> | null;
}

const frequencyCounter = (A: number[], B: number[]): Response => {
  const hash: HashTable<string, number> = new HashTable();
  let brand: boolean = true;
  if (A.length === B.length) {
    for (let index = 0; index < A.length; index++) {
      if (A[index] ** 2 === B[index]) {
        hash.add(String(A[index]), 0);
        continue;
      }
      hash.add(String(A[index]), 1);
      brand = false;
    }
    return {
      isValid: brand,
      hash: hash
    };
  }
  return {
    isValid: false,
    hash: null
  };
};

console.log(frequencyCounter([1, 2, 3], [1, 4, 9]));
console.log(frequencyCounter([1, 2, 3, 4], [1, 4, 10, 16]));
