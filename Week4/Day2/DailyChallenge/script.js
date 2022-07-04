function longestWord(wordsArray) {
  let longest = 0;
  for (let word in wordsArray) {
    if (longest < wordsArray[word].length) {
      longest = wordsArray[word].length;
    }
  }
  return longest;
}

function rectangularFrame(wordsArray, longest) {
  let framedSentence = "*".repeat(longest + 4) + "\n";
  for (i = 0; i < wordsArray.length; i++) {
    let numOfSpaces = longest - wordsArray[i].length;
    framedSentence += "* " + wordsArray[i] + " ".repeat(numOfSpaces) + " *\n";
  }
  framedSentence += "*".repeat(longest + 4);
  return framedSentence;
}

const sentence = prompt("Enter words separated by commas");
const wordsArray = sentence.split(", ");
const longest = longestWord(wordsArray);
console.log(rectangularFrame(wordsArray, longest));
