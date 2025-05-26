// problem 1
const technology = ["condition", "array", "loop"];
const updatedTechs = ["variable", ...technology];
console.log(updatedTechs);
// problem 2
const fruits = ["Apple", "Banana", "Mango"];
const myFruits = [...fruits, "Papaya", "Orange"];
console.log(myFruits);
// problem 3
const frontEnd = ["JavaScript"];
const backEnd = ["Node.js"];
const database = ["MongoDB"];
const webStacks = [...frontEnd, ...backEnd, ...database];
console.log(webStacks);
// problem 4
const website = {
  name: "MySite",
  type: "e-commerce",
  status: "active",
};
const webUpdate = { ...website, theme: "dark" };
console.log(webUpdate);
// problem 5
const young = {
  name: "Arif",
  age: 30,
  country: "B Varia",
};
const youngBoy = { ...young };
delete youngBoy.country;
console.log(youngBoy);
// problem 6
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
const latestCar = { ...car, year: 2032 }; // we can update a value of same property by simply writing the property
console.log(latestCar);
