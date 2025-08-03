// problem 1
const greetings = "Hi";
console.log(greetings.repeat(10));
// problem 2
const message1 = "I am learning JavaScript. JavaScript is amazing!";
console.log(message1.replace("JavaScript", "JS"));
// problem 3
const message2 = "I love apples and apples are tasty!";
console.log(message2.replaceAll("apples", "mangoes"));

// reversing
const message3 = "I am learning Web Dev";
let reverse = "";
for (const letter of message3) {
  reverse = letter + reverse;
}
console.log(reverse);
