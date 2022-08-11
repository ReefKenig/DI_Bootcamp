const translate = () => {
  const xhr = new XMLHttpRequest();

  xhr.withCredentials = true;

  xhr.open(
    "POST",
    "https://google-translate1.p.rapidapi.com/language/translate/v2"
  );
  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader(
    "X-RapidAPI-Key",
    "f4bdcee8bfmshade90315421d91fp1f1a3ajsna093391a7111"
  );
  xhr.setRequestHeader("X-RapidAPI-Host", "google-translate1.p.rapidapi.com");

  const text = document.getElementById("translate").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  xhr.send(`q=${text}&source=${from}&target=${to}`);
  xhr.onload = function () {
    console.log(xhr.response);
  };
};
