function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num < 10) {
      resolve("Number smaller than 10");
    } else if (num > 10) {
      reject("Number greater than 10");
    }
  });
}

compareToTen(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

compareToTen(8)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
