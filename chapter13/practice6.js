// problem 1
const fruits = ["Apple", "Banana", "Cherry", "Date"];
const cutFruits = fruits.slice(1, 3);
console.log(cutFruits);
// problem 2
const cars = ["Tesla", "BMW", "Toyota", "Ford"];
console.log(cars.slice(0, 2));
// problem 3
const movieList = ["Inception", "Titanic", "Joker", "Avatar", "Interstellar"];
console.log(movieList.splice(2, 2, "Batman", "Superman"), movieList);
// problem 4
const players = ["Messi", "Ronaldo", "Neymar", "Mbappe"];
console.log(players.splice(2, 1, "Halland"), players);
