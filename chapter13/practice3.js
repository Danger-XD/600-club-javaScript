// problem 1
const randomArray = [5, 10, 15, 20, 25];
console.log(randomArray.reduce((sum, num) => sum + num, 0));
// problem 2
const products = [
  { name: "shampoo", price: 100 },
  { name: "soap", price: 50 },
  { name: "toothpaste", price: 75 },
];
console.log(products.reduce((sum, p) => sum + p.price, 0));
// problem 3
const product = [
  { name: "Pen", price: 5 },
  { name: "Book", price: 50 },
  { name: "Bag", price: 100 },
];
console.log(product.reduce((a, c) => a + c.price, 0));
// problem 4
console.log([1, 2, 3, 4, 5].reduce((a, c) => a * c, 1));
// problem 5
console.log([10, 20, 30, 40, 50, 20].reduce((a, c) => (a > c ? a : c), 0));
// problem 6
console.log([100, 200, 300, 400].reduce((a, c) => a + c, 50));
