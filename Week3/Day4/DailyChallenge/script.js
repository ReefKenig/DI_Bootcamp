let sentence = "Jedi are not evil. the sith are bad";
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");
if (wordNot < wordBad) {
  sentence =
    sentence.substring(0, wordNot) +
    "Good" +
    sentence.substring(wordBad + 3, sentence.length);
}
console.log(sentence);
