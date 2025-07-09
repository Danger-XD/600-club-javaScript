// problem 1
const price = [30, 45, 20, 60, 10];
console.log(price.map((p) => p + 13));
// problem 2
const goats = ["Messi", "Maradona", "Pele", "Zidane", "Ronaldo"];
console.log(goats.filter((player) => player.length > 5));
// problem 3
const number = [10, 15, 20, 25, 30, 35];
console.log(number.find((n) => n > 20));
// problem 4
const height = [65, 70, 68, 72, 68, 73];
console.log(height.filter((h) => h > 69));
// problem 5
const divider = [7, 10, 15, 20, 25, 30];
console.log(divider.map((n) => Number((n / 3).toFixed(2))));
// problem 6
const friends = [
  "Leonardo",
  "Brad Pitt",
  "Kate Winslet",
  "Audrey Hepburn",
  "Johnny Depp",
];
console.log(friends.map((f) => f[2]));
// problem 7
const names = ["Tom", "Harry", "Sam", "Jack"];
console.log(names.find((n) => n[0] === "H"));
// problem 8
const nums = [1, 2, 3, 4, 5];
nums.forEach((n) => console.log(n));
// problem 9
const animals = ["cow", "goat", "sheep", "horse"];
animals.forEach((a) => console.log(a));
