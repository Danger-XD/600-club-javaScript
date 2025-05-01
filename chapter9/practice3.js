// problem 1
function greaterThanTen(a) {
  if (a > 10) {
    return true;
  }
  return false;
}
const result = greaterThanTen(0);
console.log(result);
// problem 2
function dividableByThirteen(a) {
  if (a % 13 == 0) {
    return true;
  }
  return false;
}
console.log(dividableByThirteen(39));
// problem 3
const rice = 40;
const curry = 190;
const drinks = 25;
function billCounter() {
  let sum = 0;
  for (const i of arguments) {
    sum += i;
  }
  return sum;
}
console.log(billCounter(rice, curry, drinks));
// problem 4
function votingAgeChecker(age) {
  if (age >= 18) {
    return "Eligible for Voting";
  }
  return "Not Eligible";
}
console.log(votingAgeChecker(14));
// problem 5
const myString = "This is my String";
function stringLengthCounter(str) {
  if (typeof str === "string") {
    //"string" === "string"
    return str.length;
  }
  return "It's not a String!";
}
console.log(stringLengthCounter(myString));
// problem 6
function avgCounter(a, b, c) {
  return (a + b + c) / 3;
}
console.log(avgCounter(5, 3, 5));
// problem 7
function negNumbChecker(num) {
  if (num < 0) {
    return num * -1;
  }
  return num;
}
console.log(negNumbChecker(-2));
