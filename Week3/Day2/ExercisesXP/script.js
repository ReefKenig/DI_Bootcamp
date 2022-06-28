// Ex 1
let food = "Melon";
let meal = "Lunch";
console.log(`I eat ${food} at every ${meal}`);

// Ex 2
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = myWatchedSeries.join(", ");
console.log(
  `I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`
);
myWatchedSeries[myWatchedSeries.indexOf("the big bang theory")] = "friends";
myWatchedSeries.push("Rurouni Kenshin");
myWatchedSeries.unshift("Re:Zero");
myWatchedSeries.splice(myWatchedSeries.indexOf("black mirror"), 1);
console.log(myWatchedSeries[myWatchedSeries.indexOf("money heist")][2]);
console.log(myWatchedSeries);

// Ex 3
let celsius = 31;
console.log(`${celsius}°C is ${(celsius / 5) * 9 + 32}°F`);

// Ex 4
let c; //The value of C is undefined
let a = 34;
let b = 21;

console.log(a + b); //first expression
// Prediction: 55 because 34 + 21 = 55
// Actual: 55

a = 2;

console.log(a + b); //second expression
// Prediction: 23 because a switched value from 34 to 2
// Actual: 23

console.log(3 + 4 + "5");
// Prediction: 75 divided to the number 7 and the string 5
// Actual: 75

// Ex 5
typeof 15;
// Prediction: number
// Actual: number

typeof 5.5;
// Prediction: number
// Actual: number

typeof NaN;
// Prediction: NaN
// Actual: number

typeof "hello";
// Prediction: string
// Actual: string

typeof true;
// Prediction: boolean
// Actual: boolean

typeof (1 != 2);
// Prediction: boolean
// Actual: boolean

"hamburger" + "s";
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s";
// Prediction: NaN
// Actual: NaN

"1" + "3";
// Prediction: 13
// Actual: 13

"1" - "3";
// Prediction: NaN
// Actual: -2

"johnny" + 5;
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5;
// Prediction: NaN
// Actual: NaN

99 * "hello";
// Prediction: hello 99 times
// Actual: NaN

1 != 1;
// Prediction: false
// Actual: false

1 == "1";
// Prediction: true
// Actual: true

1 === "1";
// Prediction: false
// Actual: false

// Ex 6
5 + "34";
// Prediction: 534
// Actual: 534

5 - "4";
// Prediction: 1
// Actual: 1

10 % 5;
// Prediction: 0
// Actual: 0

5 % 10;
// Prediction: 1
// Actual: 5

"Java" + "Script";
// Prediction: JavaScript
// Actual: JavaScript

" " + " ";
// Prediction: "  "
// Actual: "  "

" " + 0;
// Prediction: " 0"
// Actual: " 0"

true + true;
// Prediction: 2
// Actual: 2

true + false;
// Prediction: 1
// Actual: 1

false + true;
// Prediction: 1
// Actual: 1

false - true;
// Prediction: -1
// Actual: -1

!true;
// Prediction: 0
// Actual: false

3 - 4;
// Prediction: -1
// Actual: -1

"Bob" - "bill";
// Prediction: NaN
// Actual: NaN
