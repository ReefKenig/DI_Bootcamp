const fs = require("fs");

const LEFT = "<";
const RIGHT = ">";

let position = 0;
let firstBelowZero;

fs.readFile("./RightLeft.txt", (err, data) => {
    if (err) {
        console.log(err);
    }
    const chars = [...data.toString()];
    chars.forEach((char, index) => {
        if (char === RIGHT) {
            position++;
        }
        else if (char === LEFT) {
            position--;
            if (position === -1 && !firstBelowZero) {
                firstBelowZero = index + 1;
            }
        }
    });
    console.log("Total steps:", position);
    console.log("First time in left side is in:", firstBelowZero);
})