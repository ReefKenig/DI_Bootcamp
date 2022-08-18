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
      return new Error("Person doesn't exist");
    }
    const obj = await response.json();
    let planet = "";
    try {
      const planetResponse = await fetch(obj.homeworld);
      const planetObj = await planetResponse.json();
      planet = planetObj.name;
    } catch (error) {
      return error;
    }
    const results = {
      name: obj.name,
      height: obj.height,
      gender: obj.gender,
      birthYear: obj.birth_year,
      homeWorld: planet,
    };
    return results;
  } catch (error) {
    console.log("Catch 2: Person doesn't exist");
    return new Error("Person doesn't exist");
  }
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
    .catch(() => {
      fields.name.style.display = "block";
      fields.name.innerHTML = "Person doesn't exist";
    });
});
