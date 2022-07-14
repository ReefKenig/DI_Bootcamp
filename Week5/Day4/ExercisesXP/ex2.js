function myMove() {
  let container = document.getElementById("container");
  let animate = document.getElementById("animate");
  let pos = 0;
  let id = setInterval(() => {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      animate.style.left = pos + "px";
    }
  }, 1);
}
