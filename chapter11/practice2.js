// problem 1
function subtraction(a = 0, b = 0) {
  return `The difference between ${a} and ${b} is ${a - b}`;
}
console.log(subtraction(100, 20));
// problem 2
const employee = {
  name: "Mr. X",
  age: 33,
  salary: 50000,
};
console.log(
  `Employee information: ${employee.name}, ${employee.age}, ${employee.salary}`
);
// problem 3
const fruits = ["Lichi", "Mango", "Orange"];
console.log(`My favorite fruit is: ${fruits[2]}`);
// problem 4
const a = 50;
const b = 10;
console.log(`The division of a and b is ${a / b}`);
// problem 5
const person = {
  firstName: "Amit",
  lastName: "Kumar",
};
console.log(`Full Name: ${person.firstName + " " + person.lastName}`);
// problem 6
const animals = ["Cat", "Dog", "Elephant"];
console.log(
  `My favorite animals are: ${animals[0]}, ${animals[1]}, ${animals[2]}`
);
// problem 7
const student = {
  name: "Karim",
  age: 22,
  marks: [33, 44, 66],
};
console.log(
  `Student name: ${student.name} and he got average: ${
    (student.marks[0] + student.marks[1] + student.marks[2]) / 3
  }`
);
