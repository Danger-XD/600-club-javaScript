// problem 1
const firstValue = (arr) => arr[0];
console.log(firstValue([1, 2, 3, 4]));
// problem 2
const valueMultiplier = (arr) => arr[0] * arr[1] * arr[2];
console.log(valueMultiplier([3, 4, 5]));
// problem 3
const unknownReturner = () => "unknown";
console.log(unknownReturner());
// problem 4
const pocketMan = {
  name: "Y",
  haveMoney: 3000,
};
const pocketFunction = (obj) => obj.haveMoney / 5;
console.log(pocketFunction(pocketMan));
// problem 5
const arrayValue = [3, 5, 6, 0, 9];
const valueAdder = (arr) => arr[0] + arr[arr.length - 1];
console.log(valueAdder(arrayValue));
// problem 6
const elementAdder = (a = 10, b = 5) => a + b;
console.log(elementAdder());
