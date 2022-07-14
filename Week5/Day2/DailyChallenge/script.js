let libButton = document.querySelector("button");
libButton.addEventListener("click", function (event) {
  event.preventDefault();
  let noun = document.getElementById("noun").value;
  let adjective = document.getElementById("adjective").value;
  let person = document.getElementById("person").value;
  let verb = document.getElementById("verb").value;
  let place = document.getElementById("place").value;
  if (
    noun.length == 0 ||
    adjective.length == 0 ||
    person.length == 0 ||
    verb.length == 0 ||
    place.length == 0
  ) {
    return;
  }
  let story = `${person} is a ${adjective} person.\n
  His favorite activity is ${verb} at the ${place} while using his ${noun}`;
  let storySpan = document.getElementById("story");
  let textNode = document.createTextNode(story);
  storySpan.appendChild(textNode);
});
