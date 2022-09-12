const fs = require("fs");

const content = "Some data here\n";
fs.writeFile("./data.txt", content, (err) => {
    if (err) {
        console.log(err);
    }
});
