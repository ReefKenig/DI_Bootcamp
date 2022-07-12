function blueBG() {
  document.querySelector("p").style.backgroundColor = "blue";
}

function floatRight() {
  document.querySelector("p").style.float = "right";
}

function floatLeft() {
  document.querySelector("p").style.float = "left";
}

function fontSize() {
  document.querySelector("p").style.fontSize = "larger";
}

let p = document.querySelector("p");
p.addEventListener("mouseover", blueBG);
p.addEventListener("mouseout", fontSize);
p.addEventListener("click", floatRight);
p.addEventListener("dblclick", floatLeft);
