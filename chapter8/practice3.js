// problem 1
const book = {
  name: "Harry Potter",
  author: "J K Rowling",
  price: 10000,
  parts: 8,
};
const bookKeys = Object.keys(book);
const bookValues = Object.values(book);
console.log(bookKeys, bookValues);
// problem 2
const article = {
  title: "Learning JS",
  category: "Programming",
};
const articleKeys = Object.keys(article);
console.log(articleKeys.includes("author"));
// problem 3
const laptop = {
  brand: "Dell",
  model: "Inspiron",
  price: 45000,
};
for (const key in laptop) {
  console.log(key, laptop[key]);
}
// problem 4
const phone = {
  brand: "Samsung",
  model: "Galaxy S21",
  price: 85000,
};
const phoneKeys = Object.keys(phone);
for (const key of phoneKeys) {
  console.log(key, phone[key]);
}
// problem 5
const bike = {
  brand: "Hero",
  price: 120000,
  model: "Splendor",
};
const bikeValues = Object.values(bike);
for (const value of bikeValues) {
  console.log(value);
}
// problem 6
const books = {
  book1: "Harry Potter",
  book2: "The Hobbit",
  book3: "GOT",
};
const booksValues = Object.values(books);
for (const value of booksValues) {
  console.log(value);
}
// problem 7
const numbers = {
  a: 10,
  b: 20,
  c: 30,
  d: 40,
};
let sum = 0;
for (const i in numbers) {
  sum += numbers[i];
}
console.log(sum);
// problem 8
const player ={
  name:"messi",
  team:"argentina",
  goals:91
}
console.log(Object.values(player))
// problem 9
const building = {
  floors:10,
  address:{
    street: "Main road",
    city:"Dhaka"
  },
  type:"Commercial"
}
for(const i in building){
  console.log(building[i])
}
