// problem 1
function oddNumbAdder(num) {
  let sum = 0;
  for (const i of num) {
    if (i % 2 != 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(oddNumbAdder([5, 15, 8, 7]));
// problem 2
function smallerOutOfPosition(arr) {
  if (arr[0] < arr[1]) {
    return arr[0];
  }
  return arr[1];
}
console.log(smallerOutOfPosition([20, 45, 78]));
// problem 3
function ageHider(n) {
  if (n < 18) {
    return "Age is 18";
  }
  if (n > 45) {
    return "Age is 45";
  }
  return n;
}
console.log(ageHider(3));
// problem 4
function dividableByFour(nums) {
  let sum = 0;
  for (const n of nums) {
    if (n % 4 === 0) {
      sum += n;
    }
  }
  return sum;
}
console.log(dividableByFour([2, 4, 5, 7, 8, 32, 45]));
// problem 5
function mathForTwenty(n) {
  if (n < 20) {
    return n * 2;
  }
  return n / 20;
}
console.log(mathForTwenty(19));
// problem 6
function sumOfNegatives(arr) {
  let sum = 0;
  for (const n of arr) {
    if (n < 0) {
      sum += n;
    }
  }
  return sum;
}
console.log(sumOfNegatives([-2, 3, -5, 5, -6]));
// problem 7
function threeMultipliers(arr) {
  let result = 1;
  for (const i of arr) {
    if (i % 3 === 0) {
      result *= i;
    }
  }
  return result;
}
console.log(threeMultipliers([3, 9, 6, 2]));

//** "arguments" keyword does not work on arrays
