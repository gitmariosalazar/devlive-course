export type Category = 'Tech' | 'Construction';

export class Product {
  name: string;
  price: number;
  inStock: boolean;
  category: Category;
  constructor(
    name: string,
    price: number,
    inStock: boolean = true,
    category: Category
  ) {
    this.name = name;
    this.price = price;
    this.inStock = inStock;
    this.category = category;
  }
}

export class FilterProducts {
  products: Product[];
  constructor() {
    this.products = [];
  }

  findProduct(product: Product): boolean {
    for (let p of this.products) {
      if (p.name === product.name) {
        return true;
      }
    }
    return false;
  }

  addProduct(product: Product): boolean {
    if (!this.findProduct(product)) {
      this.products.push(product);
      return true;
    }
    return false;
  }

  filterByCategory(category: Category): Product[] {
    const productsByCategory: Product[] = this.products.filter(
      (item) => item.category === category
    );
    return productsByCategory;
  }

  filterByInStock(stock: boolean): Product[] {
    const productsByInStock: Product[] = this.products.filter(
      (item) => stock === item.inStock
    );
    return productsByInStock;
  }

  filterPriceRange(a: number, b: number): Product[] {
    const list: Product[] = this.products.filter(
      (item) => item.price > a && item.price < b
    );
    return list;
  }
}

const p1: Product = new Product('A', 50, true, 'Tech');
const p2: Product = new Product('B', 55, true, 'Construction');
const p3: Product = new Product('C', 1000, false, 'Tech');
const p4: Product = new Product('D', 25, true, 'Tech');
const p5: Product = new Product('E', 15, true, 'Construction');
const p6: Product = new Product('F', 65, false, 'Tech');
const p7: Product = new Product('G', 100, true, 'Construction');

const pf: FilterProducts = new FilterProducts();
pf.addProduct(p1);
pf.addProduct(p2);
pf.addProduct(p3);
pf.addProduct(p4);
pf.addProduct(p5);
pf.addProduct(p6);
pf.addProduct(p7);

console.log(pf.products);

const fc: Product[] = pf.filterByCategory('Construction');
console.log(`\n\nBy Category\n\n`);
console.log(fc);

const fs: Product[] = pf.filterByInStock(false);
console.log(`\n\nBy Category\n\n`);
console.log(fs);

const fr: Product[] = pf.filterPriceRange(150, 10000);
console.log(`\n\nBy Range\n\n`);
console.log(fr);
