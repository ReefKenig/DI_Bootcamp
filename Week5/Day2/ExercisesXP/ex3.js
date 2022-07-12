let allBoldItems = [];
let getBold_items = () => {
  let p = document.querySelector("p");
  [...p.children].forEach((strong) => {
    allBoldItems.push(strong);
  });
};
let highlight = () => {
  allBoldItems.forEach((strong) => {
    strong.style.color = "blue";
  });
};
let return_normal = () => {
  allBoldItems.forEach((strong) => {
    strong.style.color = "black";
  });
};

getBold_items();
let p = document.querySelector("p");
p.onmouseover = highlight;
p.onmouseout = return_normal;
