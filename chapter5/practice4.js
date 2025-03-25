// problem 1
const friendInvited = true;
const haveMoney = 2000;
if (friendInvited) {
  if (haveMoney > 1000) {
    console.log("Buy gifts");
  } else {
    console.log("No gifts");
  }
} else {
  console.log("Unfriended.");
}
// problem 2
const wantTea = true;
if (wantTea) {
  const wantBiscuit = false;
  if (wantBiscuit) {
    console.log("Your tea with biscuit is ready.");
  } else {
    console.log("Your tea is ready.");
  }
} else {
  console.log("sit and watch Star Jalsha.");
}
// problem 3
const accountActive = true;
if (accountActive) {
  const premiumSubscription = false;
  if (premiumSubscription) {
    console.log("Enjoy our premium features");
  } else {
    console.log("Watch free version features");
  }
} else {
  console.log("Please activate your account");
}
// problem 4
const haveFood = true;
if (haveFood) {
  console.log("Microwave the food");
} else {
  const foodAppActive = false;
  if (foodAppActive) {
    console.log("Order pizza by the app");
  } else {
    console.log("Im fasting today");
  }
}
// problem 5
const guestNumber = 101;
if (guestNumber > 100) {
  const willBringGift = false;
  if (willBringGift) {
    console.log("Lets party all night");
  } else {
    console.log("I will party with myself");
  }
} else {
  console.log("NO PARTY!");
}
