let calculateButton = document.querySelector("input[type=submit]");
calculateButton.addEventListener("click", function (event) {
  event.preventDefault();
  let radius = document.getElementById("radius").value;
  let volume = ((4 / 3) * Math.PI * Math.pow(radius, 3)).toFixed(2);
  let volumeElement = document.getElementById("volume");
  volumeElement.value = volume;
});
