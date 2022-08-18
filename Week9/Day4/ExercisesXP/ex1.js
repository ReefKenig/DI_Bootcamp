// fetch("https://www.swapi.tech/api/starships/9/")
//   .then((response) => response.json())
//   .then((result) => console.log(result));

const SWChar = async () => {
  const response = await fetch("https://www.swapi.tech/api/starships/9/");
  const data = await response.json();
  return data;
};

SWChar().then((res) => console.log(res));
