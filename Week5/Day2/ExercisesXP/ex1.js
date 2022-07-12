let h1 = document.querySelector("h1");
console.log(h1);
document.querySelector("article").lastElementChild.remove();
let h2 = document.querySelector("h2");
h2.addEventListener("click", function () {
  h2.style.backgroundColor = "red";
});
let h3 = document.querySelector("h3");
h3.addEventListener("click", function () {
  h3.style.display = "none";
});
let boldButton = document.createElement("button");
let buttonText = document.createTextNode("click me");
boldButton.appendChild(buttonText);
document.body.appendChild(boldButton);
boldButton.addEventListener("click", function () {
  let paragraphs = [...document.querySelectorAll("p")];
  paragraphs.forEach((p) => {
    p.style.fontWeight = "bold";
  });
});
h1.addEventListener("mouseover", function () {
  h1.style.fontSize = `${Math.floor(Math.random() * 101)}px`;
});
let secondP = [...document.querySelectorAll("p")][1];
secondP.addEventListener("mouseover", function () {
  secondP.style.opacity = "50%";
  secondP.style.transition = "opacity 1s";
});
