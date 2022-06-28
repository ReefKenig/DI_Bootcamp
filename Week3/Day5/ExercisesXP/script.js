// Ex 1
// Part 1
let people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people[people.indexOf("James")] = "Jason";
people.push("Reef");
console.log(people.indexOf("Mary"));
let peopleCopy = people.slice(1, -1);
console.log(people.indexOf("foo"));
//The result is -1 because this is what the method returns when it does'nt find anything
var last = people[people.length - 1];
// Part 2
for (i = 0; i < people.length; i++) {
  console.log(people[i]);
}
for (i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] == "Jason") {
    break;
  }
}

// Ex 2
let colors = ["Blue", "Red", "Green", "Purple", "Yellow"];
let suffixes = ["st", "nd", "rd", "th"];
for (i = 0; i < colors.length; i++) {
  if (i <= 2) {
    console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
  } else {
    console.log(
      `My ${i + 1}${suffixes[suffixes.length - 1]} choice is ${colors[i]}`
    );
  }
}

// Ex 3
// let answer = prompt("Enter a number");
// while (isNaN(answer) || answer < 10) {
//   answer = prompt("Again!");
// }

// Ex 4
let building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};
console.log(building.numberOfFloors);
console.log(
  building.numberOfAptByFloor.firstFloor +
    building.numberOfAptByFloor.thirdFloor
);
console.log(building.nameOfTenants[1] + building.numberOfRoomsAndRent.dan[0]);
if (
  building.numberOfRoomsAndRent.sarah[1] +
    building.numberOfRoomsAndRent.david[1] >
  building.numberOfRoomsAndRent.dan[1]
) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
}

// Ex 5
let family = {
  father: "Doron",
  mother: "Sharon",
  children: ["Reef", "Morrie", "Illy"],
};

for (let key in family) {
  console.log(key);
  console.log(family[key]);
}

// Ex 6
let details = {
  my: "name",
  is: "Rudolf",
  the: "reindeer", //You have a spelling mistake
};
let sentence = "";
for (let key in details) {
  sentence += `${key} ${details[key]} `;
}
console.log(sentence);

// Ex 7
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
let secret = "";
for (i = 0; i < names.length; i++) {
  secret += names[i][0];
}
console.log(secret);
