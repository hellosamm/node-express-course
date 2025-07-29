const { writeFileSync, readFileSync } = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "temporary", "fileA.txt");

writeFileSync(filePath, "Testing line 1\n");

writeFileSync(filePath, "Testing line 2\n", { flag: "a" });

writeFileSync(filePath, "Testing line 3\n", { flag: "a" });

const contents = readFileSync(filePath, "utf8");

console.log("File contents:\n" + contents);
