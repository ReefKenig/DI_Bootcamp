let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

function toJs() {
  return new Promise((res, rej) => {
    const parsed = JSON.parse(morse);
    if (Object.keys(parsed).length === 0) {
      rej("JSON is empty");
    } else {
      res(parsed);
    }
  });
}

function toMorse(morseJS) {
  const usrstr = prompt("Enter a string");
  const arr = usrstr.toLowerCase().split("");
  return new Promise((res, rej) => {
    arr.forEach((item, i, arr) => {
      if (item in morseJS) {
        arr[i] = morseJS[item];
      } else {
        rej("Doesn't exist");
      }
    });
    res(arr);
  });
}

const joinWords = (morseArr) => {
  return morseArr.join(" ");
};

toJs()
  .then((res) => {
    return toMorse(res);
  })
  .then((res) => {
    console.log(joinWords(res));
  })
  .catch((err) => {
    console.log(err);
  });
