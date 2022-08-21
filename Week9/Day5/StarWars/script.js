const SW_PEOPLE_API = "https://swapi.dev/api/people/";
const MAX_PEOPLE = 100;

const fields = {
  name: document.querySelector("#name"),
  height: document.querySelector("#height"),
  gender: document.querySelector("#gender"),
  birthYear: document.querySelector("#birthYear"),
  homeWorld: document.querySelector("#homeWorld"),
};
const loadingDiv = document.querySelector(".loading");
const charFindButton = document.querySelector("button");

async function getCharacter() {
  const randomNum = Math.floor(Math.random() * MAX_PEOPLE);
  console.log(randomNum);
  const request = SW_PEOPLE_API + randomNum;
  try {
    const response = await fetch(request);
    if (response.status != 200) {
      console.log("Catch 1: Person doesn't exist");
      displayError();
      return new Error();
    }
    const obj = await response.json();
    let planet = "";
    try {
      const planetResponse = await fetch(obj.homeworld);
      const planetObj = await planetResponse.json();
      planet = planetObj.name;
    } catch (error) {
      displayError();
      return new Error();
    }
    const results = {
      name: obj.name,
      height: `Height: ${obj.height}`,
      gender: `Gender: ${obj.gender}`,
      birthYear: `Birth Year: ${obj.birth_year}`,
      homeWorld: `Home World: ${planet}`,
    };
    return results;
  } catch (error) {
    console.log("Catch 2: Person doesn't exist");
    displayError();
    return new Error();
  }
}

function displayError() {
  Object.keys(fields).forEach((key) => {
    loadingDiv.style.display = "none";
    if (key === "name") {
      fields[key].innerHTML = "Person doesn't exist";
      fields[key].style.display = "block";
    } else {
      fields[key].style.display = "none";
    }
  });
}

charFindButton.addEventListener("click", function () {
  Object.keys(fields).forEach((key) => {
    fields[key].style.display = "none";
  });
  loadingDiv.style.display = "block";
  getCharacter()
    .then((response) => {
      Object.keys(response).forEach((key) => {
        fields[key].innerHTML = response[key];
        fields[key].style.display = "block";
      });
      loadingDiv.style.display = "none";
    })
    .catch();
});
