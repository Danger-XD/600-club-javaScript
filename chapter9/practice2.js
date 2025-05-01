// problem 1
function addAges(a, b) {
  return a + b;
}
const father = 55;
const son = 25;
console.log(addAges(father, son));
// problem 2
function multiplier(a, b) {
  return a * b;
}
console.log(multiplier(20, 15));
// problem 3
function marksAdder(sub1, sub2, sub3) {
  return sub1 + sub2 + sub3;
}
console.log(marksAdder(34, 88, 50));
// problem 4
function ageCalculator(year) {
  const date = new Date();
  const age = date.getFullYear() - year;
  console.log(age);
}
ageCalculator(2000);
// problem 5
function lauPabe(money) {
  const lau = Math.floor(money / 35);
  if (lau === 0) {
    console.log("No lau, only dim poach");
    return;
  }
  console.log(lau);
}
lauPabe(20);
// problem 6
function average(a, b, c, d) {
  return (a + b + c + d) / 4;
}
console.log(average(2, 3, 4, 5));
// problem 7
function sellingPrice(price) {
  const profit = 250;
  return price + profit;
}
console.log(sellingPrice(180));
// problem 8
function yearAtHundred(year) {
  const date = new Date();
  const currentAge = date.getFullYear() - year;
  const ageLeft = 100 - currentAge;
  if (ageLeft <= 0) {
    console.log("Man, You already made century with your age!");
    return;
  }
  console.log(date.getFullYear() + ageLeft);
}
yearAtHundred(1900);
// problem 9
function mobileUseInAMonth(hour) {
  return hour * 30;
}
console.log(mobileUseInAMonth(3) + " hours");

// practice:
// the keyword "arguments" can work with all the arguments even with less number of parameters
// function addNumbers(a,b){
//     console.log(arguments)
// }
// addNumbers(3,5,4,5,3)
