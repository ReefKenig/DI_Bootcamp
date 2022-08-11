const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My",
  true
);
xhr.send();
xhr.onload = function () {
  console.log(JSON.parse(xhr.response).data);
};
