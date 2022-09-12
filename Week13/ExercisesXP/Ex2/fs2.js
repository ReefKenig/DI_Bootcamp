const fs = require("fs");

const extraContent = "Buy orange juice\n";
fs.appendFile("./data.txt", extraContent, (err) => {
    if (err) {
        console.log(err);
    }
});