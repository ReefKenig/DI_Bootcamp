// let users = {
//   user1: {
//     age: 44,
//     name: "Picard",
//   },
//   user2: {
//     age: 12,
//     name: "Sisko",
//   },
//   user3: {
//     age: 109,
//     Name: "Janeway",
//   },
// };

// let userKeys = Object.keys(users);
// const adults = userKeys
//   .filter((key) => users[key].age > 30)
//   .map((id) => ({ id, ...users[id] }));

// console.log(adults);

// var employee = {
//   // Object we want to destructure
//   firstname: "Jon",
//   lastname: "Snow",
//   dateofbirth: "1990",
// };

// // Destructuring the object into variables without
// // assigning default values
// var { firstname, lastname, country } = employee;
// console.log("Without setting default values");
// console.log(firstname, lastname, country);

// // Destructuring the object into variables by
// // assigning default values
// var {
//   firstname = "default firstname",
//   lastname = "default lastname",
//   country = "default country",
// } = employee;
// console.log("\n After setting default values");
// console.log(firstname, lastname, country);

const isPangram = (sentence) => {
  return new Set(sentence.toLowerCase().replace(/[^a-z]/g, "")).size === 26;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(
  isPangram("We promptly judged antique ivory buckles for the prize")
);
