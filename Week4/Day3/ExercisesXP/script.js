function playTheGame() {
  if (!confirm("Do you want to play the game?")) {
    alert("No problem, Goodbye");
    return;
  }
  let userNumber = prompt("Enter a number between 0 and 10");
  while (isNaN(userNumber) || userNumber <= 0 || userNumber > 10) {
    userNumber = prompt("Sorry it’s not a good number, again!");
  }
  const computerNumber = Math.floor(Math.random() * 10) + 1;
  compareNumbers(userNumber, computerNumber);
}

function compareNumbers(userNumber, computerNumber) {
  let chances = 3;
  while (chances > 0) {
    chances--;
    if (userNumber == computerNumber) {
      alert("winner");
      return;
    } else if (userNumber > computerNumber && chances > 0) {
      userNumber = prompt(
        "Your number is bigger then the computer’s, guess again"
      );
    } else if (chances > 0) {
      userNumber = prompt(
        "Your number is smaller then the computer’s, guess again"
      );
    }
  }
  alert("out of chances");
}
