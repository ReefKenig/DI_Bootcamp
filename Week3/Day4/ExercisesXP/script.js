// Ex 1
let x = 41;
let y = 29;
if (x > y) {
  console.log("X is bigger");
} else if (y > x) {
  console.log("Y is bigger than X");
} else {
  console.log("X and Y are equal");
}

// Ex 2
let newDog = "Chihuahua";
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
if (newDog == "Chihuahua") {
  console.log("I love Chihuahuas, it’s my favorite dog breed");
} else {
  console.log("I dont care, I prefer cats");
}

// Ex 3
let userNumber = prompt("Enter a number");
if (userNumber % 2 == 0) {
  console.log(userNumber + " is an even number");
} else {
  console.log(userNumber + " is an odd number");
}

// Ex 4
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
switch (users.length) {
  case 0:
    console.log("No one is online");
    break;
  case 1:
    console.log(users[0] + " is online");
    break;
  case 2:
    console.log(users[0] + " and " + users[1] + " are online");
    break;
  default:
    console.log(
      users[0] +
        ", " +
        users[1] +
        " and " +
        (users.length - 2) +
        " more are online"
    );
    break;
}
