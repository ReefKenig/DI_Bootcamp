// Ex 1
let sentence = ["my", "favorite", "color", "is", "blue"];
console.log(sentence.join(" "));

// Ex 2
let str1 = "mix";
let str2 = "pod";
let temp = str1;
str1 = str2.slice(0, 2) + str1[2];
str2 = temp.slice(0, 2) + str2[2];
console.log(str1 + " " + str2);

// Ex 3
let num1 = parseInt(prompt("Enter a number"));
let num2 = parseInt(prompt("Enter another number"));
let action = prompt("What to do with these numbers?");
if (action == "+") {
  alert(num1 + num2);
} else if (action == "-") {
  alert(num1 - num2);
} else if (action == "*") {
  alert(num1 * num2);
} else if (action == "/") {
  alert(num1 / num2);
}
