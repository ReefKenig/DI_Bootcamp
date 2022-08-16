const urls = [
  "https://swapi.dev/api/people/1/",
  "https://swapi.dev/api/people/2/",
  "https://swapi.dev/api/people/3/",
];

const starWarsCharacter = (url) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status != 200) {
        reject("You have failed me for the last time " + xhr.status);
      } else {
        resolve(JSON.parse(xhr.response));
      }
    };
  });
};

const promises = urls.map((url) => {
  return starWarsCharacter(url);
});

Promise.all(promises)
  .then((values) => {
    console.log(values);
  })
  .catch((e) => {
    console.log(e);
  });
