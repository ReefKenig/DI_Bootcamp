let usersDiv = document.querySelector("div");
usersDiv.style.backgroundColor = "lightgreen";
usersDiv.style.padding = "50px";
let lis = [...document.querySelectorAll("li")];
lis.forEach((li) => {
  let liNodes = [...li.childNodes];
  liNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.includes("John")) {
      li.style.display = "None";
    } else if (
      node.nodeType === Node.TEXT_NODE &&
      node.textContent.includes("Pete")
    ) {
      li.style.border = "1px solid black";
    }
  });
});

document.body.style.fontSize = "20px";

// Bonus
