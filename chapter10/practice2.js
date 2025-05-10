// problem 1
function taxChecker(income) {
  if (income <= 50000) {
    return 10;
  } else if (income <= 100000) {
    return 20;
  } else if (income <= 200000) {
    return 30;
  } else {
    return 40;
  }
}
console.log(taxChecker(1000));
// problem 2
function deliveryFee(weight) {
  if (weight < 10) {
    return 100;
  } else if (weight < 20) {
    return 300;
  } else if (weight < 50) {
    return 1000;
  } else {
    return weight * 100;
  }
}
console.log(deliveryFee(79));
// problem 3
function resultMarking(mark) {
  if (mark >= 80) {
    return "A";
  } else if (mark >= 70) {
    return "B";
  } else if (mark >= 60) {
    return "C";
  } else if (mark >= 50) {
    return "D";
  } else {
    return "F";
  }
}
console.log(resultMarking(49))
