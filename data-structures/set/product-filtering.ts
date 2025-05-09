export interface Product {
  id: number;
  name: string;
  category: string;
  tags: string[];
}

const filterProductsByTags = (
  filter: string[],
  products: Product[]
): Product[] => {
  const result: Set<Product> = new Set();
  const filterSetTags: Set<string> = new Set(filter);
  products.forEach((product) => {
    product.tags.forEach((tag) => {
      if (filterSetTags.has(tag)) {
        result.add(product);
      }
    });
  });
  return Array.from(result);
};

const products: Product[] = [
  {
    id: 1,
    name: 'Apple',
    category: 'Fruit',
    tags: ['Red', 'Healthy', 'Juicy']
  },
  {
    id: 2,
    name: 'Carrot',
    category: 'Vegetable',
    tags: ['Orange', 'Healthy', 'Crunchy']
  },
  {
    id: 3,
    name: 'Bread',
    category: 'Bakery',
    tags: ['Brown', 'Carbs', 'Fresh']
  },
  {
    id: 4,
    name: 'Cheese',
    category: 'Dairy',
    tags: ['Yellow', 'Protein', 'Melty']
  }
];

const filter: string[] = ['Healthy', 'Orange'];
console.log(filterProductsByTags(filter, products));
