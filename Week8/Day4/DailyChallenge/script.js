const form = document.forms[0];
const gifContainer = document.querySelector(".gifContainer");
const deleteAll = document.querySelector("#deleteAll");

deleteAll.addEventListener("click", function () {
  const gifs = gifContainer.querySelectorAll(".gif");
  gifs.forEach((gif) => {
    gif.remove();
  });
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const keyword = form.keyword.value;
  if (keyword.length === 0) return;
  const xhr = new XMLHttpRequest();
  const request = `https://api.giphy.com/v1/gifs/search?q=${keyword}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;
  xhr.open("GET", request, true);
  xhr.send();
  xhr.onload = function () {
    const gifDiv = document.createElement("div");
    gifDiv.classList.add("gif");
    const gifs = JSON.parse(xhr.response).data;
    const chosenGif = gifs[Math.floor(Math.random() * gifs.length)];
    const img = document.createElement("img");
    img.src = chosenGif.images.original.url;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    gifDiv.append(img, deleteButton);
    gifContainer.appendChild(gifDiv);
    deleteButton.addEventListener("click", function () {
      gifDiv.remove();
    });
  };
});
