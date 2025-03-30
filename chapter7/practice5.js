// problem 1
for (let i = 20; i <= 50; i++) {
  if (i % 7 == 0) {
    console.log(i);
  }
}
// problem 2
for (let i = 40; i <= 80; i++) {
  if (i % 5 == 0 || i % 7 == 0) {
    console.log(i);
  }
}
// problem 3
let sum = 0;
for (let i = 1; i <= 40; i++) {
  if (i % 13 == 0) {
    sum += i;
  }
}
console.log(sum);
// problem 4
for (let i = 1; i <= 50; i = i + 4) {
  console.log(i);
}
// problem 5
for (let i = 0; i <= 100; i++) {
  if (i % 6 == 0 || i % 9 == 0) {
    console.log(i);
  }
}
// problem 6
let sum3And4 = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0 && i % 4 == 0) {
    sum3And4 += i;
  }
}
console.log(sum3And4);
