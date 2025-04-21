// problem 1
const headphone = {
  brand: "Sony",
  price: 3000,
  color: "red",
};
Object.freeze(headphone);
headphone.brand = "HP";
console.log(headphone);
// problem 2
const player = {
  name: "Messi",
  goals: 800,
  club: "Inter Miami",
};
Object.freeze(player);
player.name = "Ronaldo";
console.log(player);
// problem 3
const book = {
  title: "Harry Potter",
  author: "JK Rowling",
  page: 500,
};
Object.seal(book);
book.author = "Jhankar Mahbub";
console.log(book);
// problem 4
const gadget = {
  name: "iPhone",
  price: 120000,
  color: "Black",
};
delete gadget.price;
console.log(gadget);
// problem 5
const animal = {
  name: "Tiger",
  location: "Sundarban",
};
Object.freeze(animal);
// problem 6
const food = {
  name: "Pizza",
  price: 500,
  size: "Large",
};
Object.seal(food);
