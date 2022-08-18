const SUNRISE_API = "http://api.sunrise-sunset.org/json?";

function getSunrise(lat, lng) {
  return fetch(`${SUNRISE_API}lat=${lat}&lng=${lng}`)
    .then((res) => res.json())
    .then((res) => res.results.sunrise)
    .catch((err) => "Something went wrong while accessig the API:" + err);
}

const form = document.forms[0];
const firstLat = form.firstLat;
const firstLng = form.firstLng;
const secondLat = form.secondLat;
const secondLng = form.secondLng;
const submitButtom = document.querySelector("button");

submitButtom.addEventListener("click", function (event) {
  event.preventDefault();
  const lat1 = firstLat.value;
  const lng1 = firstLng.value;
  const lat2 = secondLat.value;
  const lng2 = secondLng.value;
  const promise1 = getSunrise(lat1, lng1);
  const promise2 = getSunrise(lat2, lng2);
  Promise.all([promise1, promise2])
    .then((values) => console.log(values))
    .catch((err) => console.log("Error: ", err));
});
