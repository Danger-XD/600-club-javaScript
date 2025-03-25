// problem 1
const payment = 4500;
if (payment > 6000) {
  const discount = (payment / 100) * 15;
  const payable = payment - discount;
  console.log(payable);
} else if (payment > 3000) {
  const discount = (payment / 100) * 5;
  const payable = payment - discount;
  console.log(payable);
} else {
  console.log("No discount");
}
// problem 2
const customerAge = 65;
if (customerAge > 60) {
  console.log("Enjoy 50% discount.");
} else if (customerAge < 12) {
  console.log("Enjoy free food for babies!");
} else {
  console.log("Full payment");
}
// problem 3
const accountBalance = 5000;
if (accountBalance > 5000) {
  console.log("You are rich, marry me.");
} else if (accountBalance > 1000) {
  console.log("Enjoy your life");
} else {
  console.log("Deposit money");
}
// problem 4
const mark = 88;
if (mark > 80) {
  console.log("A+");
} else if (mark > 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}
// problem 5
const page = 88;
if (page > 500) {
  console.log("heart-attack size book");
} else if (page > 100) {
  console.log("Mid-size book");
} else {
  console.log("Small book");
}
// problem 6
const temperature = 30;
if (temperature > 20) {
  console.log("Hot Hot");
} else if (temperature > 0) {
  console.log("Cool Cool");
} else {
  console.log("Ice");
}
// problem 7
const level = 40;
if (level > 50) {
  console.log("Pro Gamer");
} else if (level > 10) {
  console.log("Expert");
} else {
  console.log("Novice");
}
