const { writeFile, readFile } = require("fs").promises;

async function writer() {
  try {
    await writeFile("temp.txt", "first line :)\n");
    await writeFile("temp.txt", "second line :/\n", { flag: "a" });
    await writeFile("temp.txt", "third line :| \n", { flag: "a" });
  } catch (err) {
    console.error("error writing to file:", err);
  }
}

async function reader() {
  try {
    const data = await readFile("temp.txt", "utf-8");
  } catch (err) {
    console.error("error reading file", err);
  }
}

async function readWrite() {
  await writer();
  await reader();
}

readWrite();
