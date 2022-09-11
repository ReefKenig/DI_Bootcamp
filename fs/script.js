const fs = require("fs");

// Read file
fs.readFile("./name.txt", (err, data) => {});

// Read file synchronized
fs.readFileSync();

// Write file
fs.writeFile("./name1", "text", (err) => {
  if (err) {
    console.log(err);
  }
});

// Write file synchronized
fs.writeFileSync();

// Append to file
fs.appendFile("./name.txt", "extra", (err) => {
  if (err) {
    console.log(err);
  }
});

// Append to file synchronized
fs.appendFileSync();

// Copy to file
fs.copyFile();

// Copy to file synchronized
fs.copyFileSync();
