console.log(document.querySelector("form"));
console.log(document.getElementById("fname"));
console.log(document.getElementById("lname"));
console.log(document.getElementById("submit"));
console.log(document.getElementsByName("fname"));
console.log(document.getElementsByName("lname"));
console.log(document.getElementsByName("submit"));
let fullName = [...document.querySelectorAll("input[type=text]")];
let submit = document.getElementById("submit");
let usersAnswer = [...document.getElementsByClassName("usersAnswer")][0];
submit.addEventListener("click", function (event) {
  event.preventDefault();
  let fName = fullName[0].value;
  let lName = fullName[1].value;
  if (fName.length > 0 && lName.length > 0) {
    fullName.forEach((name) => {
      let li = document.createElement("li");
      let textNode = document.createTextNode(name.value);
      li.appendChild(textNode);
      usersAnswer.appendChild(li);
    });
  }
});
