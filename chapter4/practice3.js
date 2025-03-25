// problem 1
console.log(50 == "50", 50 === "50");
// problem 2
// Both output will be true as all of them are written in string datatype with single and double quotation
console.log("JavaScript" == "JavaScript", "JavaScript" === "JavaScript");
// problem 3
// first one's output will be true as it only checks the value and both are same
// and the second one's output will be false as the datatypes of both value are different
console.log(25 == "25", 25 === "25");
// problem 4
console.log("apple" == "apple", "apple" === "apple");
// problem 5
console.log("test" == "TEST", "test" === "TEST");
// problem 6
const variableX = 15;
const variableY = "20";
console.log(variableX != variableY, variableX !== variableY);
// problem 7
/*
In the given question variableA's value is written without any quotation, if thats the case then it is an error of 
variable declaration (string without quotation)
*/
const variableA = "hello";
const variableB = "Hello";
console.log(variableA == variableB, variableA === variableB);
