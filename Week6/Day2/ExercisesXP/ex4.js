let displayColors = (colors) => {
  colors.forEach((color) => {
    console.log(`${colors.indexOf(color) + 1}# choice is ${color}`);
  });
  colors.includes("Violet") ? console.log("yeah") : console.log("No");
};
