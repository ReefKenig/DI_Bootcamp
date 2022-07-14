const hello = setTimeout(() => {
  alert("Hellow World");
}, 2000);

const addP = setTimeout(() => {
  let p = document.createElement("p");
  p.innerHTML = "Hello World";
  let container = document.getElementById("container");
  container.appendChild(p);
}, 2000);

const greetings = setInterval(() => {
  let paragraphs = [
    ...document.getElementById("container").querySelectorAll("p"),
  ];
  console.log(paragraphs.length);
  if (paragraphs.length >= 4) {
    clearInterval(greetings);
  }
  let p = document.createElement("p");
  p.innerHTML = "Hello World";
  let container = document.getElementById("container");
  container.appendChild(p);
}, 2000);

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
  clearInterval(greetings);
});
