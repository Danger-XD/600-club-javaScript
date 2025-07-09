// problem 1
const numbers = [50, 12, 25, 8, 15];
const sortedArr = numbers.sort((a, b) => a - b);
console.log(sortedArr);
// problem 2
const numbs = [13, 2, 45, 9, 6];
console.log(numbs.sort((a, b) => b - a));
// problem 3
const friends = [
  { name: "Ali", age: 29 },
  { name: "Sara", age: 22 },
  { name: "Tariq", age: 35 },
];
console.log(friends.sort((a, b) => a.age - b.age));
// problem 4
const names = ["nabil", "zubayer", "sarwar", "delwar"];
console.log(names.sort());
