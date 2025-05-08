const promptSyn = require('prompt-sync')();

const addPrices = (quantity: number, prices: number[]): void => {
  let index: number = 0;
  while (index < quantity) {
    let price: number = parseFloat(
      promptSyn(`Enter a price for product ${index + 1}: `)
    );
    prices.push(price);
    index++;
  }
};

interface Result {
  total: number;
  discountAmount: number;
  finalPrice: number;
}

const calculateDiscounts = (n: number, prices: number[]): Result => {
  const total: number = prices.reduce((total, value) => total + value, 0);
  let discountAmount = 0;
  let discountPercentage = 0.2;
  let i = 0;
  let aux = n;
  let count: number = 1;
  for (let index = 0; index < prices.length; index += n) {
    let discount: number[] = prices.slice(i, aux);
    let batchDiscount = discount.reduce(
      (sum, price) => sum + price * discountPercentage,
      0
    );
    discountAmount += batchDiscount;
    i = aux;
    aux += n;
    if (count >= 3) {
      discountPercentage = 0;
    } else {
      discountPercentage /= 2;
    }
    count++;
  }
  const finalPrice = total - discountAmount;
  return { total, discountAmount, finalPrice };
};

const prices: number[] = [];
const quantity: number = parseInt(promptSyn(`Enter a quantity: `));
addPrices(quantity, prices);
console.log(prices);
const result: Result = calculateDiscounts(3, prices);
console.log(`Total cost: $${result.total}`);
console.log(`Discount amount: $${result.discountAmount}`);
console.log(`Final price to be paid: $${result.finalPrice}`);
