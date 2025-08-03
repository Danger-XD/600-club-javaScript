// problem 1
let undeclaredVar;
console.log(undeclaredVar);
// problem 2
const addValues = (a, b) => {
  let sum = a + b;
};
console.log(addValues(5, 6));
// problem 3
const arr = [10, 20, 30, 40, 50];
delete arr[2];
console.log(arr[2]);
// problem 4
function sum(a, b, c) {
  let add = a + b + c;
  console.log(c);
}
sum(5, 10);
// problem 5
const student = { name: "serious sojib", roll: 1, marks: 99 };
console.log(student.marks);
