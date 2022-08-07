const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?size=200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?size=200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?size=200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?size=200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?size=200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?size=200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?size=200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?size=200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?size=200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?size=200x200",
  },
];

robots.forEach((robot) => {
  let card = document.createElement("div");
  card.classList.add("card");
  card.id = robot.id;
  let avatar = document.createElement("img");
  avatar.src = robot.image;
  avatar.alt = "Avatar";
  let container = document.createElement("div");
  container.classList.add("container");
  let name = document.createElement("h3");
  name.innerHTML = `<b>${robot.name}</b>`;
  let email = document.createElement("p");
  email.innerHTML = robot.email;
  container.append(name, email);
  card.append(avatar, container);
  document.body.appendChild(card);
});

function searchRobots() {
  const searchFilter = document.querySelector("input").value.toLowerCase();
  robots.forEach((robot) => {
    if (robot.name.toLowerCase().includes(searchFilter)) {
      document.getElementById(robot.id).style.display = "";
    } else {
      document.getElementById(robot.id).style.display = "none";
    }
  });
}
