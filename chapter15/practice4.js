// problem 1
if (true == 1) {
  console.log("same");
} else {
  console.log("different");
}
// problem 2
const obj1 = { name: "John" };
const obj2 = { name: "John" };
if (obj1 === obj2) {
  console.log("same");
} else {
  console.log("different");
}
// problem 3
const arr = ["hello"];
const newArr = arr;
if (arr === newArr) {
  console.log("same");
} else {
  console.log("different");
}
// problem 4
function valueCheck(a, b) {
  if (a == b) {
    console.log("same");
  } else {
    console.log("different");
  }
}
valueCheck(4, true);
// problem 5
if ("" == false) {
  console.log("same");
} else {
  console.log("different");
}
// problem 6
if (null === undefined) {
  console.log("same");
} else {
  console.log("different");
}
// problem 7
if (1 == "1") {
  console.log("same");
} else {
  console.log("different");
}
