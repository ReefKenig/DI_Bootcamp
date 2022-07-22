let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th", "st", "nd", "rd"];
let displayColors = (colors) => {
  for (let c in colors) {
    let choice = Number(c) + 1;
    let ord = c < 3 ? choice : 0;
    console.log(`${choice}${ordinal[ord]} choice is ${colors[c]}`);
  }
};
