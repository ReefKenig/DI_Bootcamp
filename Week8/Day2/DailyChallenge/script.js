function submit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const value = Object.fromEntries(data.entries());
  console.log(JSON.stringify(value));
}

const form = document.querySelector("form");
form.addEventListener("submit", submit);
