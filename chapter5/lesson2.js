// problem 1
const age = 19;
const height = 88;
if (age > 18 && height > 60) {
  console.log("Push the Car!");
} else {
  console.log("Sit in the car.");
}
// problem 2
const math = 19;
const English = 88;
if (math > 80 || English > 85) {
  console.log("Congratz on your admission!");
} else {
  console.log("Congratz on your marriage!");
}
// problem 3
const gpa = 4;
const parentEarn = 12000;
if (gpa == 5 && parentEarn > 10000) {
  console.log("Congratz, you got the scholarship");
} else {
  console.log("Payment deadline is 15th day of a month!");
}
// problem 4
const participantAge = 28;
const jobExperience = 5;
if (participantAge < 30 && jobExperience > 2) {
  console.log("You are eligible for the job.");
} else {
  console.log("You are eligible for the job.");
}
// problem 5
const eggLeft = 12;
const haveChicken = false;
if (eggLeft > 12 || haveChicken === false) {
  console.log("It's egg korma time.");
} else {
  console.log("Eat bread with banana.");
}
// problem 6
const temperature = 100;
const haveCough = false;
if (temperature > 100 || haveCough === true) {
  console.log("Go see a doctor.");
} else {
  console.log("Take rest at home.");
}
// problem 7
const attendance = 100;
const homework = false;
if (attendance > 100 && homework === true) {
  console.log("take your admit card.");
} else {
  console.log("Fail!");
}
// problem 8
const electricity = false;
const phoneCharge = false;
if (phoneCharge === false && electricity === false) {
  console.log("It's study time");
} else {
  console.log("PUBG!");
}
// problem 9
const shirtPrice = 1200;
const haveCoupon = true;
if (shirtPrice > 1000 && haveCoupon === true) {
  const discount = (shirtPrice / 100) * 20;
  const pay = shirtPrice - discount;
  console.log("After 20% discount = " + pay);
} else {
  console.log("No discount");
}
