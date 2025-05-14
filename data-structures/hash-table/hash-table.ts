import { products } from './products';

class HashTable<K, V> {
  table: Map<K, V>;

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

  keys() {
    return this.table.keys();
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
  update(key: K, item: V): boolean {
    if (this.get(key)) {
      this.table.set(key, item);
      return true;
    }
    return false;
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
console.log(`Product found\n`);
const productFound: Product | undefined = table.get('PT008TECH');
console.log(productFound);
console.log(`\nProduct Update\n`);
const pu: Product = {
  code: 'PT008TECH10',
  description: 'Portable solid-state drive Update',
  iva: 12,
  mark: 'SANDISK',
  name: 'External SSD 1TB Update',
  percentage_increment: 35,
  public_price: 166.3,
  quantity: 8,
  supplier_price: 109.99
};
console.log(table.update(pu.code, pu));
console.log(table.table.entries().next());
