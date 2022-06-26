function ex2() {
  let numString = prompt("Enter numbers separated by commas");
  numString = numString.split(",");
  let sum = 0;
  for (i = 0; i < numString.length; i++) {
    sum += Number(numString[i]);
  }
  console.log(sum);
}

function ex3() {
  let sentence = prompt("Write a sentece with the word Nemo");
  sentence = sentence.split(" ");
  for (let word in sentence) {
    if (sentence[word].search("Nemo") != -1) {
      console.log("I found Nemo at position " + word);
      return;
    }
  }
  console.log("I can't find Nemo");
}

function ex4() {
  let num = Number(prompt("Enter a number"));
  let returnStr = "";
  if (num < 2) {
    returnStr = "boom";
  } else {
    returnStr = "b";
    for (i = 0; i < num; i++) {
      returnStr += "o";
    }
    returnStr += "m";
    if (num % 2 == 0) {
      returnStr += "!";
    }
    if (num % 5 == 0) {
      returnStr = returnStr.toUpperCase();
    }
  }
  console.log(returnStr);
}
