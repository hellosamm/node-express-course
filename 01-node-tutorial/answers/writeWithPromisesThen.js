const fs = require("fs").promises;

fs.writeFile("temp.txt", "line 1 :(\n")
  .then(() => {
    return fs.writeFile("temp.txt", "line 2 :O\n", { flag: "a" });
  })
  .then(() => {
    return fs.writeFile("temp.txt", "line 3 :o\n", { flag: "a" });
  })
  .then(() => {
    return fs.readFile("temp.txt", "utf-8");
  })
  .catch((err) => {
    console.error("error:", err);
  });
