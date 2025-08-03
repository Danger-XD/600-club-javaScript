// problem 1
const calculator = (callback) => {
  callback(5, 10);
};
const addValue = (a, b) => {
  console.log(a + b);
};
calculator(addValue);
// problem 2
const obj1 = {
  name: "XXX",
  age: 50,
  game: "PUBG",
};
const objectKeyChecker = (newObject) => {
  keyChecker(newObject); // callback function
};
const keyChecker = (newObject) => {
  let allTheKeys = Object.keys(newObject);
  console.log(allTheKeys);
};
objectKeyChecker(obj1);
// problem 3
const numberProcessor = (num, callback) => {
  if (typeof num !== "number") {
    return console.log("Give me a proper number!");
  }
  let result = num / 5;
  callback(result);
};
const showResult = (num) => {
  console.log(num);
};
numberProcessor(10, showResult);
// problem 4
const firstFunction = () => {
  secondFunction(); // callback function
};
const secondFunction = () => {
  console.log("Hello from second function!");
};
firstFunction();
