let planets = [
  { Mercury: [] },
  { Venus: [] },
  { Earth: ["Moon"] },
  { Mars: ["Deimos", "Phobos"] },
  { Jupiter: ["Io", "Europa", "Ganymede", "Callisto"] },
  { Saturn: ["Enceladus", "Titan"] },
  { Uranus: ["Ariel", "Oberon", "Puck", "Rosalind"] },
  { Neptune: ["Larissa", "Proteus", "Sao", "Triton"] },
];
let planetContainer = document.getElementById("listPlanets");
planets.forEach((item) => {
  let planetName = Object.keys(item)[0];
  let planet = document.createElement("div");
  planet.classList.add("planet");
  planet.id = planetName;
  let planetText = document.createTextNode(planetName);
  planet.append(planetText);
  if (Object.values(item).length > 0) {
    let moonContainer = document.createElement("div");
    moonContainer.classList.add("moonContainer");
    Object.values(item).foreach((moon, idx) => {
      console.log(moon);
    });
  }
});
