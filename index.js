const minSplits = require("./findNumberOfSplits");
const { findPowers } = require("./helpers");

const data = {
  n: "101101101",
  x: 5
}

let powersList = findPowers(data.n, data.x);
console.log(powersList);
const result = minSplits(data.n, powersList);
console.log(result);
