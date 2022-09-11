const form = document.forms[0];
form.onsubmit = function (event) {
  event.preventDefault();
  const email = form.email.value;
  const message = form.message.value;
};
