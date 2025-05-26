// problem 1
const product = { name: "Laptop", price: 50000, brand: "Dell" };
const { name, ...restOfTheProduct } = product;
console.log(restOfTheProduct);
// problem 2
const project = {
  id: 101,
  title: "Web App",
  budget: 3000,
  client: "Tech Corp",
};
const { title, ...restOfTheProject } = project;
console.log(restOfTheProject);
// problem 3
const programmer = {
  name: "Sophia",
  language: "JavaScript",
  experience: 5,
  specialty: "Frontend",
  tools: "React",
};
const { language, specialty, ...details } = programmer;
console.log(details);
// problem 4
const arr = [10, 20, 3, 30, 300, 3000];
const [a, b, ...newArr] = arr;
console.log(newArr);
// problem 5
const restAdder = (a, b, ...rest) => {
  let sum = 0;
  for (const i of rest) {
    // rest values are kept in array
    sum += i;
  }
  return sum;
};
console.log(restAdder(1, 3, 2, 4, 6, 8));
// problem 6
const restAverage = ([...rest]) => {
  let sum = 0;
  for (const i of rest) {
    sum += i;
  }
  return sum / rest.length;
};
console.log(restAverage([1, 2, 3, 4, 5]));

// ...rest = to contain the rest of the variables in it
