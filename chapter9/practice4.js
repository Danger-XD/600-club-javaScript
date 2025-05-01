// problem 1
function elemNumOddOrEven(num) {
  const size = num.length;
  if (size % 2 == 0) {
    return "Even";
  }
  return "Odd";
}
console.log(elemNumOddOrEven([3, 2, 4, 6, 6, 3]));
// problem 2
function firstLetter(str) {
  return str[0];
}
console.log(firstLetter("Momsis"));
// problem 3
function ofTens(n) {
  if (n > 10) {
    return n / 10;
  }
  return n * 10;
}
console.log(ofTens(50));
// problem 4
function firstTwoAdd(num) {
  return num[0] + num[1];
}
console.log(firstTwoAdd([2, 3, 5, 1, 5]));
// problem 5
function doubleTriple(n) {
  if (n >= 0) {
    return n * 2;
  }
  return n * 3;
}
console.log(doubleTriple(-2));
// problem 6
function nameComparison(name1, name2) {
  if (name1.length > name2.length) {
    return true;
  }
  return false;
}
console.log(nameComparison("SamiRabbi", "Arisha"));
// problem 7
function numbMultiplier(num1, num2) {
  const result = num1 * num2;
  if (result > 100) {
    return result / 2;
  }
  return result;
}
console.log(numbMultiplier(22, 33));
