// Ex 1
function infoAboutMe() {
  console.log("I am 22 years old");
}

function infoAboutPerson(personName, personAge, personFavoriteColor) {
  console.log(
    `Your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}.`
  );
}

infoAboutMe();
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

// Ex 2
function calculateTip() {
  let bill = Number(prompt("Enter bill"));
  let tip = 0;
  if (bill < 50) {
    tip = bill * 0.2;
  } else if (bill >= 50 && bill < 200) {
    tip = bill * 0.15;
  } else {
    tip = bill * 0.1;
  }
  console.log(bill + tip);
}

calculateTip();

// Ex 3
function isDivisible(divisor) {
  let sum = 0;
  for (i = 0; i < 500; i++) {
    if (i % divisor == 0) {
      sum += i;
      console.log(i);
    }
  }
  console.log(sum);
}

isDivisible(45);

// Ex 4
function myBill() {
  let price = 0;
  for (let item in shoppingList) {
    if (stock[shoppingList[item]] > 0) {
      price += prices[shoppingList[item]];
      stock[shoppingList[item]]--;
    }
  }
  console.log(price);
}

let stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

let prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

let shoppingList = ["banana", "orange", "apple"];
myBill();

// Ex 5
function changeEnough(itemPrice, amountOfChange) {
  const change =
    amountOfChange[0] * 0.25 +
    amountOfChange[1] * 0.1 +
    amountOfChange[2] * 0.05 +
    amountOfChange[3] * 0.01;
  if (change >= itemPrice) {
    return true;
  }
  return false;
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));

// Ex 6
function isPositiveInteger(str) {
  if (typeof str !== "string") {
    return false;
  }
  const num = Number(str);
  if (Number.isInteger(num) && num > 0) {
    return true;
  }
  return false;
}

function hotelCost(nights) {
  return 140 * nights;
}

function planeRideCost(destination) {
  if (destination == "London") {
    return 183;
  } else if (destination == "Paris") {
    return 220;
  } else {
    return 300;
  }
}

function rentalCarCost(rentDays) {
  if (rentDays > 10) {
    return rentDays * 40 * 0.05;
  }
  return rentDays * 40;
}

function totalVacationCost() {
  let rentDays = prompt("How many days will you be renting a car?");
  while (!isPositiveInteger(rentDays)) {
    rentDays = prompt("Not a valid number. Try again");
  }
  const carPrice = rentalCarCost(rentDays);

  let nights = prompt("How long will you be staying at the hotel?");
  while (!isPositiveInteger(nights)) {
    nights = prompt("Not a valid number. Try again");
  }
  const hotelPrice = hotelCost(nights);

  let destination = prompt("Where will you be headed for your trip?");
  while (typeof destination != "string" && destination.length <= 0) {
    destination = prompt("Not a valid destination. Try again");
  }
  const planePrice = planeRideCost(destination);

  return carPrice + hotelPrice + planePrice;
}

console.log(totalVacationCost());
