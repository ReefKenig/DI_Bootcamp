const API_KEY = "6bc236fa8bd5e7e03f83fd8cea3eac74";
const UNITS = "metric";
const form = document.forms[0];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const city = form.city.value;
  form.city.value = "";
  if (city.length === 0) return;
  const xhr = new XMLHttpRequest();
  const requestCityLocation = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`;
  xhr.open("GET", requestCityLocation, true);
  xhr.send();
  xhr.onload = function () {
    const locationResponse = xhr.response;
    const lat = locationResponse.lat;
    const lon = locationResponse.lon;
    const requestCityWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${UNITS}&appid=${API_KEY}`;
    xhr.open("GET", requestCityWeather, true);
    xhr.send();
    xhr.onload = function () {
      if (this.status != 200) {
        console.log("City doesn't exist");
        return;
      }
      const weatherResponse = JSON.parse(xhr.response);
      const weatherDescription = weatherResponse.weather[0].description;
      const weatherIcon = weatherResponse.weather[0].icon;
      const countryCode = weatherResponse.sys.country;
      const degrees = weatherResponse.main.temp;
      console.log([
        city,
        countryCode,
        degrees,
        weatherIcon,
        weatherDescription,
      ]);
    };
  };
});
