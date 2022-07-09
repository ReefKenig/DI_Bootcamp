let containerDiv = document.getElementById("container");
console.log(containerDiv);

let listItems = document.getElementsByTagName("li");
for (let item in listItems) {
  if (listItems[item].innerHTML == "Pete") {
    listItems[item].innerHTML = "Richard";
  }
}

let lists = [...document.getElementsByClassName("list")];
lists.forEach((ul) => {
  ul.firstElementChild.innerHTML = "Reef";

  /// Bonus
  ul.classList.add("student_list");
});

let lis = [...document.querySelectorAll("li")];
lis.forEach((li) => {
  let liChild = [...li.childNodes];
  liChild.forEach((child) => {
    if (
      child.nodeType === Node.TEXT_NODE &&
      child.textContent.includes("Sarah")
    ) {
      li.remove();
    }
  });
});

//Bonus
lists[0].classList.add(...["university", "attendance"]);
