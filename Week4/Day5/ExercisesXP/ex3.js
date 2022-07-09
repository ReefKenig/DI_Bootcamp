let div = document.querySelector("div");
div.setAttribute("id", "socialNetworkNavigation");
let newLi = document.createElement("li");
let logOut = document.createTextNode("Logout");
newLi.append(logOut);
let ul = document.querySelector("ul");
ul.appendChild(newLi);

// Bonus
console.log(ul.firstElementChild.textContent);
console.log(ul.lastElementChild.textContent);
