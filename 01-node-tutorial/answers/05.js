const { cityName, stateName } = require("./04");

const checkCity = (city) => {
  console.log(`${cityName} is the capitol of Ohio`);
};

const checkState = (state) => {
  console.log(`${state} is known as the buckeye state`);
};

module.exports = {
  checkCity,
  checkState,
};
