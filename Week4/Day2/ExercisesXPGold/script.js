// Ex 1
// const string = "";
// console.log(string.length == 0);

// Ex 2
// function abbrevName(name) {
//   const firstName = name.split(" ")[0];
//   const lastName = name.split(" ")[1];
//   return `${firstName} ${lastName[0]}.`;
// }

// console.log(abbrevName("Robinson Cruzo"));

// Ex 3
// function swapCase(string) {
//   let newString = "";
//   for (let letter in string) {
//     if (string[letter].match(/[a-z]/i)) {
//       if (string[letter] == string[letter].toLowerCase()) {
//         newString += string[letter].toUpperCase();
//       } else {
//         newString += string[letter].toLowerCase();
//       }
//     } else {
//       newString += string[letter];
//     }
//   }
//   return newString;
// }

// console.log(swapCase("Bardock is The Father of Goku- The 1st SSJ4"));

// Ex 4
function isOmnipresent(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].includes(val)) {
      return false;
    }
  }
  return true;
}
