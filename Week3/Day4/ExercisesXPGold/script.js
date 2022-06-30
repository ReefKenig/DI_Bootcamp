// Ex 1
let language = prompt("Which language do you speak?").toLowerCase();
switch (language) {
  case "english":
    console.log("Hello");
    break;
  case "french":
    console.log("Bonjour");
    break;
  case "hebrew":
    console.log("Shalom");
    break;
  default:
    console.log("01110011 01101111 01110010 01110010 01111001");
}

// Ex 2
let grade = prompt("Enter grade");
switch (true) {
  case grade > 90:
    console.log("A");
    break;
  case grade > 80 && grade <= 90:
    console.log("B");
    break;
  case grade >= 70 && grade <= 80:
    console.log("C");
    break;
  default:
    console.log("D");
}

// Ex 3
let verb = prompt("Type a verb");
if (verb.length >= 3) {
  if (verb.endsWith("ing") == false) {
    console.log(verb + "ing");
  } else {
    console.log(verb + "ly");
  }
} else {
  console.log(verb);
}
