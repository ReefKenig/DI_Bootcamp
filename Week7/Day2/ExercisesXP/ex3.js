let epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];
let prologue = epic.reduce((sentence, element) => {
  return `${sentence} ${element}`;
});
