const info = require("./04");
const { checkCity, checkState } = require("./05");
const facts = require("./06");
require("./07");

console.log("State:", info.stateName);
console.log("Capitol:", info.cityName);

checkCity(info.cityName);
checkState(info.stateName);

console.log("State bird:", facts.bird);
console.log("State flower:", facts.flower);
