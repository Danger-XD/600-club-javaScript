// problem 1
const taxRate = 15;
const incomeTaxCounter = (income) => {
  return income * (taxRate / 100);
};
console.log(incomeTaxCounter(5000));
// problem 2
const secretFinder = () => {
  const insideSecret = "internal secret hiding place";
};
console.log(insideSecret);
// problem 3
if (true) {
  const temperature = 555;
}
console.log(temperature);
// problem 4
const schoolDetails = () => {
  const schoolName = "XYZ school";
  const displaySchoolName = () => {
    console.log(schoolName);
  };
  displaySchoolName();
};
schoolDetails();
