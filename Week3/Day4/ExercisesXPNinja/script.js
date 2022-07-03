function stringOnlyDigits(str) {
  for (let i = 0; i < str.length - 1; i++) {
    const charValue = str.charCodeAt(i);
    if (charValue < 48 || charValue > 57) {
      return false;
    }
  }
  return true;
}

function noWhiteSpace(str) {
  if (str.trim().length == str.length) {
    return true;
  }
  return false;
}

// Ex 1
let birthYear1 = 2000;
let birthYear2 = 1986;
let younger = birthYear1 > birthYear2 ? birthYear1 : birthYear2;
let older = younger == birthYear1 ? birthYear2 : birthYear1;
let currentYear = parseInt(new Date().getFullYear());
let oldAge = currentYear - older;
let youngAge = currentYear - younger;
let halfOfOld = (oldAge / 2) | 0;
let requiredAge = halfOfOld - youngAge;
let requiredYear = currentYear + requiredAge;
console.log(requiredYear);
// Ex 2
zipCode = prompt("Enter zip code");
// Part 1
if (
  zipCode.length == 5 &&
  stringOnlyDigits(zipCode) == true &&
  noWhiteSpace(zipCode) == true
) {
  console.log("success");
} else {
  console.log("error");
}
// Part 2
let reg = /^\d{5}$/;
if (zipCode.match(reg)) {
  console.log("success");
} else {
  console.log("error");
}
// Ex 3
let word = prompt("Type a word");
let noVowels = new RegExp(/[a,i,o,u,e]/g, "g");
console.log(word.replace(noVowels, "R"));
