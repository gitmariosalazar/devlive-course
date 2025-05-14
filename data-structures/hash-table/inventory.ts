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

export class HashTable<K, V> {
  table: Map<K, V>;

  constructor(initial?: [K, V][]) {
    this.table = new Map<K, V>(initial);
  }

  put(key: K, item: V): boolean {
    if (this.get(key)) {
      return false;
    }
    this.table.set(key, item);
    return true;
  }

  get(key: K): V | undefined {
    return this.table.get(key);
  }

  remove(key: K): boolean {
    if (this.get(key)) {
      this.table.delete(key);
      return true;
    }
    return false;
  }

  getTableAsObject(): { [key: string]: V } {
    const obj: { [key: string]: V } = {};
    this.table.forEach((value, key) => {
      obj[String(key)] = value;
    });
    return obj;
  }

  update(key: K, item: V): boolean {
    if (this.get(key)) {
      this.table.set(key, item);
      return true;
    }
    return false;
  }
}

export class Inventory {
  products: HashTable<string, Product> = new HashTable();

  addProduct(product: Product): string {
    const added: boolean = this.products.put(product.code, product);
    if (added) {
      return `Product added successfully!`;
    }
    return `Product with id: ${product.code} already exist!`;
  }

  getProduct(id: string): Product | null {
    const result: Product | undefined = this.products.get(id);
    if (result) {
      return result;
    }
    return null;
  }
  removeProduct(id: string): string {
    const productDeleted: boolean = this.products.remove(id);
    if (productDeleted) {
      return `Product with id: ${id} was deleted!`;
    }
    return `Product with id: ${id} not found!`;
  }

  updateProduct(product: Product): string {
    const productUpdated: boolean = this.products.update(product.code, product);
    if (productUpdated) {
      return `Product updated successfully!`;
    }
    return `Product with id: ${product.code} not found!`;
  }

  getProducts() {
    return this.products.getTableAsObject();
  }
}

const p1: Product = {
  code: 'PT001TECH',
  description: 'This mouse is black',
  iva: 12,
  mark: 'SONY',
  name: 'Mouse keyboard',
  percentage_increment: 35,
  public_price: 18.69,
  quantity: 4,
  supplier_price: 12.36
};
const p2: Product = {
  code: 'PT002TECH',
  description: 'This computer is on stock',
  iva: 12,
  mark: 'DELL',
  name: 'Laptop Dell Inspiron 5567 16 GB RAM',
  percentage_increment: 35,
  public_price: 1667.09,
  quantity: 151,
  supplier_price: 1102.57
};
const p3: Product = {
  code: 'PT003TECH',
  description: 'Ergonomic wireless mouse',
  iva: 12,
  mark: 'LOGITECH',
  name: 'Wireless Mouse',
  percentage_increment: 35,
  public_price: 38.56,
  quantity: 12,
  supplier_price: 25.5
};
const p4: Product = {
  code: 'PT004TECH',
  description: 'Docking station for laptops',
  iva: 12,
  mark: 'BELKIN',
  name: 'USB-C Docking Station',
  percentage_increment: 35,
  public_price: 196.54,
  quantity: 6,
  supplier_price: 129.99
};

const inventory: Inventory = new Inventory();
const hashTable: HashTable<string, Product> = new HashTable();
console.log(inventory.addProduct(p1));
console.log(inventory.addProduct(p2));
console.log(inventory.addProduct(p3));
console.log(inventory.addProduct(p3));
console.log(inventory.addProduct(p4));
console.log(inventory.addProduct(p4));
console.log(inventory.getProducts());
console.log(inventory.removeProduct('PT003TECH'));
console.log(inventory.getProducts());
console.log(inventory.updateProduct(p4));
const productToUpdate: Product = {
  code: 'PT004TECH',
  description: 'Docking station for laptops Update',
  iva: 12,
  mark: 'BELKIN',
  name: 'USB-C Docking Station Update',
  percentage_increment: 35,
  public_price: 196.54,
  quantity: 6,
  supplier_price: 129.99
};
console.log(inventory.updateProduct(productToUpdate));
console.log(inventory.getProducts());
console.log(`Search product`);
console.log(inventory.getProduct('PT004TECH'));
console.log(inventory.getProduct('PT004TECH55'));

console.log(inventory.getProducts());
