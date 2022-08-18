function makeAllCaps(arr) {
  return new Promise((resolve, reject) => {
    const upperArr = arr.map((element) => {
      if (isNaN(element)) {
        return element.toUpperCase();
      } else {
        reject("Only strings allowed");
      }
    });
    resolve(upperArr);
  });
}
function sortWords(upperCased) {
  return new Promise((resolve, reject) => {
    if (upperCased.length > 4) {
      resolve(upperCased.sort());
    } else {
      reject("Array is too short");
    }
  });
}

const arrWithNumbers = ["v", 2, "c", 2];
const shortArr = ["close", "your", "eyes"];
const validArr = [
  "you",
  "don't",
  "know",
  "the",
  "power",
  "of",
  "the",
  "dark",
  "Side",
];

makeAllCaps(validArr)
  .then((res) =>
    sortWords(res)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  )
  .catch((err) => console.log(err));

makeAllCaps(shortArr)
  .then((res) =>
    sortWords(res)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  )
  .catch((err) => console.log(err));

makeAllCaps(arrWithNumbers)
  .then((res) =>
    sortWords(res)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  )
  .catch((err) => console.log(err));
