import { products } from './products';

class HashTable<K, V> {
  private table: Map<K, V>;

  constructor(initial?: [K, V][]) {
    this.table = new Map<K, V>(initial);
  }

  set(key: K, value: V): boolean {
    if (!this.get(key)) {
      this.table.set(key, value);
      return true;
    }
    return false;
  }

  get(key: K): V | undefined {
    return this.table.get(key);
  }

  has(key: K): boolean {
    return this.table.has(key);
  }

  delete(key: K): boolean {
    return this.table.delete(key);
  }

  size(): number {
    return this.table.size;
  }

  clear(): void {
    this.table.clear();
  }

  keys(): K[] {
    return Array.from(this.table.keys());
  }

  values(): V[] {
    return Array.from(this.table.values());
  }

  entries(): [K, V][] {
    return Array.from(this.table.entries());
  }

  forEach(callback: (value: V, key: K) => void): void {
    this.table.forEach(callback);
  }
}

export interface Product {
  code: string;
  description: string;
  iva: number;
  mark: string;
  name: string;
  percentage_increment: number;
  public_price: number;
  quantity: number;
  supplier_price: number;
}

const table = new HashTable<string, Product>();
const productsList = products;
console.log(productsList.length);

const p1: Product = productsList[0];

console.log(`Add products to Hash Table`);
for (let product of productsList) {
  table.set(product.code, product);
}

console.log(table.get('PT008TECH'));
console.log(table.has('PT008TECH'));
console.log(table.has('PT008TEC'));
