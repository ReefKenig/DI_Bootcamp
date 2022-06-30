// Ex 1
let numbers = [123, 8409, 100053, 333333333, 7];
for (let idx in numbers) {
  if (numbers[idx] % 3 == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// Ex 2
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina",
};
let studentName = prompt("Enter name");
if (Object.keys(guestList).includes(studentName)) {
  console.log(
    `Hi! I'm ${studentName}, and I'm from ${guestList[studentName]}.`
  );
} else {
  console.log("Hi! I'm a guest.");
}
// Ex 3
function biggestAge(ages) {
  let biggest = 0;
  for (let i in ages) {
    if (biggest < ages[i]) {
      biggest = ages[i];
    }
  }
  return biggest;
}

function sumAge(ages) {
  let sum = 0;
  for (let i in ages) {
    sum += ages[i];
  }
  return sum;
}

let age = [20, 5, 12, 43, 98, 55];
console.log(sumAge(age));
console.log(biggestAge(age));
