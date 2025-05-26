// problem 1
const product = {
  name: "Laptop",
  price: 50000,
  brand: "Dell",
};
const { brand } = product;
console.log(brand);
// problem 2
const item = { name: "Mobile", price: 20000, phone: "Samsung" };
const { phone, price } = item;
// problem 3
const colors = ["red", "blue", "green", "yellow"];
const [a, b] = colors;
console.log(a, b);
// problem 4
const arr = [1, 2, 3];
const [, second] = arr;
console.log(second);
// problem 5
const digits = [2, 4, 6, 8];
const [two, , , eight] = digits;
// problem 6
function multiply(a, b) {
  return [a * 3, b * 3];
}
const [a1, b2] = multiply(5, 7);
console.log(a1, b2);
// problem 7
const person = { name: "Rahim", city: "Dhaka" };
const { name, city, phoneNum = "N/A" } = person; // default value
// problem 8
const teacher = { teacherName: "Maria", profession: "Teacher" };
const { teacherName, profession: job } = teacher; // alias
console.log(teacherName, job);
