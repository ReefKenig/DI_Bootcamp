// 1
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ["bread", ...vegetables, "chicken", ...fruits];
console.log(result);
// Prediction: [bread, carrot, potato, chicken, apple, orange]
// Result: [bread, carrot, potato, chicken, apple, orange]

// 2
const country = "USA";
console.log([...country]);
// Prediction: [U, S, A]
// Result: [U, S, A]

// Bonus
let newArray = [...[, ,]];
console.log(newArray);
// Prediction: undefined
// Result: [undefined, undefined]
