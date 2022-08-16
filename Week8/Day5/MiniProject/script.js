const API_KEY = "6bc236fa8bd5e7e03f83fd8cea3eac74";
const UNITS = "metric";
const ICON_SOURCE = "http://openweathermap.org/img/w/";
const container = document.querySelector(".container");

let savedSearches = {};

const form = document.forms[0];

function createCard(city) {
  const countryCode = savedSearches[`${city}`].countryCode;
  const degrees = savedSearches[`${city}`].degrees;
  const weatherIcon = savedSearches[`${city}`].icon;
  const description = savedSearches[`${city}`].description;
  let card = document.createElement("div");
  card.classList.add("card");
  let place = document.createElement("h1");
  place.classList.add("place");
  place.innerHTML = `${city}<span class="badge rounded-pill bg-warning">${countryCode}</span>`;
  let deg = document.createElement("h2");
  deg.classList.add("degrees");
  deg.innerHTML = `${degrees}&degC`;
  let icon = document.createElement("img");
  icon.classList.add("weatherIcon");
  icon.src = weatherIcon;
  icon.alt = "weather icon";
  let desc = document.createElement("h4");
  desc.classList.add("description");
  desc.innerHTML = description;
  card.append(place, deg, icon, desc);
  container.appendChild(card);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const city = form.city.value;
  form.city.value = "";
  if (city.length === 0) return;
  else if (Object.keys(savedSearches).includes(city)) {
    createCard(city);
    return;
  }
  const xhr = new XMLHttpRequest();
  const requestCityLocation = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`;
  xhr.open("GET", requestCityLocation, true);
  xhr.send();
  xhr.onload = function () {
    const locationResponse = JSON.parse(xhr.response);
    if (locationResponse.length === 0) {
      alert("Your location could not be found");
      return;
    }
    const countryCode = locationResponse[0].country;
    const lat = locationResponse[0].lat;
    const lon = locationResponse[0].lon;
    const requestCityWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${UNITS}&appid=${API_KEY}`;
    xhr.open("GET", requestCityWeather, true);
    xhr.send();
    xhr.onload = function () {
      if (this.status != 200) {
        alert("Something went wrong. Please try again");
        return;
      }
      const weatherResponse = JSON.parse(xhr.response);
      const weatherDescription = weatherResponse.weather[0].description;
      const weatherIcon = weatherResponse.weather[0].icon;
      const degrees = weatherResponse.main.temp;
      savedSearches[city] = {
        countryCode: countryCode,
        degrees: Math.round(degrees),
        icon: `${ICON_SOURCE}${weatherIcon}.png`,
        description: weatherDescription,
      };
      createCard(city);
    };
  };
});
