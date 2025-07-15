const os = require("os");

const machine = os.machine();
console.log("User Machine:", machine);

const release = os.release();
console.log("Release:", release);
