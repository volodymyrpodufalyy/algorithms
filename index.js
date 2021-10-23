const fs = require("fs");
const bfsLevels = require("./bfs");
const readData = require("./readData");

function main() {
  try {
    const {routes, startNode, vertices} = readData("in.txt");
    const result = bfsLevels(routes, startNode, vertices.size);
    fs.writeFileSync("out.txt", `${result}`);
  } catch (e) {
    console.log("Error:", e.stack);
  }
}

main();
