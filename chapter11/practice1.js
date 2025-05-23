// problem 1
function addValues(a = 0, b = 0, c = 0) {
  return a + b + c;
}
console.log(addValues());
// problem 2
function moneyDeposit(amount = 50) {
  console.log(amount + " tk deposited successfully!");
}
moneyDeposit();
// problem 3
function employeeReport(name = "anonymous", salary = 0) {
  return "Name: " + name + " earns: " + salary + " tk";
}
console.log(employeeReport());
// problem 4
function numbSquarer(num = 1) {
  return num * num;
}
console.log(numbSquarer());
// problem 5
function productPrice(product = "Unknown product", price = 1) {
  return "Product: " + product + " Price: " + price;
}
console.log(productPrice());
// problem 6
function favoriteBooks(arr = ["JS book"]) {
  return "Favorite books are: " + arr;
}
console.log(favoriteBooks());
// problem 7
function totalPrice(product = { price: 10, quantity: 1 }) {
  const { price, quantity } = product; //destructuring
  return price * quantity;
}
console.log(totalPrice({ price: 11, quantity: 3 }));
// problem 8
function arrayDoubler(arr = [5, 10, 15]) {
  const newArr = [];
  for (const i of arr) {
    const value = i * 2;
    newArr.push(value);
  }
  return newArr;
}
console.log(arrayDoubler());
// problem 9
function interestCounter(obj = { principal: 1000, rate: 5 }) {
  return (obj.principal * obj.rate) / 100;
}
console.log(interestCounter());
// problem 10
function salaryAfterTax(obj = { salary: 50000, tax: 10 }) {
  const { salary, tax } = obj;
  const taxAmount = (salary * tax) / 100;
  return salary - taxAmount;
}
console.log(salaryAfterTax());

// Problem 6:In JS, when an array is converted to a string (e.g., via concatenation),
// it joins the elements with commas without any [] sign. It is type conversion (coercion)
// Example: ["JS book", "Book 2"] + "" → "JS book, Book 2"
