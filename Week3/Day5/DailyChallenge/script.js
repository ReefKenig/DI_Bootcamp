for (i = 0; i < 6; i++) {
  console.log("* ".repeat(i + 1));
}

for (i = 0; i < 6; i++) {
  let stars = "";
  for (j = 0; j < i + 1; j++) {
    stars += "* ";
  }
  console.log(stars);
}
