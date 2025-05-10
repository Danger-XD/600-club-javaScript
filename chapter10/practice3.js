// problem 1
function average(arr) {
  if (arr.length === 0) {
    return null;
  }
  let sum = 0;
  for (const i of arr) {
    sum += i;
  }
  return sum / arr.length;
}
console.log(average([2, 4, 5, 6]));
// problem 2
function oddArray(arr) {
  if (arr.length === 0) {
    return [];
  }
  const newArr = [];
  for (const i of arr) {
    if (i % 2 === 1) {
      const newValue = i * 2;
      newArr.push(newValue);
    }
  }
  return newArr;
}
console.log(oddArray([1, 2, 3, 4, 5, 7, 9]));
// problem 3
function checkForOddNumbers(arr) {
  if (arr.length === 0) {
    return "It's an empty array!";
  }
  const newArr = [];
  for (const i of arr) {
    if (i % 2 === 1) {
      newArr.push(i);
    }
  }
  if (newArr.length === 0) {
    return "No odd numbers found!";
  }
  return "Odd numbers found!";
}
console.log(checkForOddNumbers([2, 4, 6]));
// problem 4
function oddNumberWithTwoDecimal(arr) {
  // Algorithm:
  // check if array is empty
  if (arr.length === 0) {
    return null;
  }
  let sum = 0;
  const newArr = [];
  // loop through whole array
  for (const i of arr) {
    if (i % 2 === 1) {
      // odd found push to new array
      newArr.push(i);
      // add to sum variable
      sum += i;
    }
  }
  // if new array is empty return nothing found
  if (newArr.length === 0) {
    return "No Odd Numbers Found!";
  }
  // find sum of odd numbers only
  const avg = sum / newArr.length;
  // return decimal to two values
  return avg.toFixed(2);
}
console.log(oddNumberWithTwoDecimal([2, 3, 5, 9]));
// problem 5
function oneMinusOdds(arr) {
  if (arr.length === 0) {
    return null;
  }
  const newArr = [];
  for (const i of arr) {
    if (i % 2 === 1) {
      const newValue = i - 1;
      newArr.push(newValue);
    }
  }
  if (newArr.length === 0) {
    return "No Odd found!";
  }
  return newArr;
}
console.log(oneMinusOdds([3,6,7,9,11]));
