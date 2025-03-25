// problem 1
const fruit = ["apple", "banana", "mango", "lichi"];
console.log(
  fruit.includes("mango") ? "we have mangoes" : "no mangoes, climb the tree"
);
// problem 2
const names = ["babul", "alif", "chuton"];
console.log(names.indexOf("babul"));
// problem 3
const friends = ["rimon", "rifat", "rajib"];
console.log(friends.indexOf("rifat"));
// problem 4
const cities = ["Dhaka", "Chittagong", "Sylhet"];
cities.push("rajshahi");
console.log(
  cities.includes("RajShahi")
    ? "Exist in the array"
    : "Does not exists in the array"
);
// problem 5
const weather = ["dighi", "megh", "bristy", "borsha"];
console.log(weather.includes("bristy") ? "I need umbrella" : "No rain no pain");
// problem 6
const sports = ["football", "cricket", "volleyball"];
console.log(sports.includes("badminton"));
