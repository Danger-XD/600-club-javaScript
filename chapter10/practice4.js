// problem 1
function duplicateValueCheck(arr) {
  // check if the array is empty
  if (arr.length === 0) {
    return "Array is Empty!";
  }
  // create new array
  const newArr = [];
  // loop on array
  for (const i of arr) {
    // check each value in the new array with includes method
    // if false, then push
    if (newArr.includes(i) === false) {
      newArr.push(i);
    }
  }
  // return new Array
  return newArr;
}
console.log(duplicateValueCheck([1, 5, 61, 5, 87, 7, 5, 81, 61]));
