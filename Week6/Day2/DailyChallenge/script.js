const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

let usernames = [];
let winners = [];
let totalScore = 0;
gameInfo.forEach((element) => {
  usernames.push(element.username + "!");
  element.score > 5 ? winners.push(element.username) : 0;
  totalScore += element.score;
});
