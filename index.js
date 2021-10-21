const fs = require("fs");
// const bfs = require("./bfs");

// const graphData = {};

// const adjacencyList = new Map();

// function addNode(node) {
//   adjacencyList.set(node, []);
// }

// function addEdge(origin, destination) {
//   adjacencyList.get(origin).push(destination);
//   adjacencyList.get(destination).push(origin);
// }

// DATA
let nodes = [];
let routes = [];

let startNode = "5";

function main() {
  try {
    const data = fs.readFileSync("in.txt", "utf8");
    const allNodes = data.toString().split("\r\n");
    startNode = allNodes.shift().split(" ")[1];
    routes = allNodes.map((item) => {
      return [item.split(" ")[0], item.split(" ")[1]];
    });
    nodes = allNodes.join(" ").split(" ");
    // fs.writeFileSync("out.txt", `${result}`);
    // bfs(adjacencyList, start, '4');
  } catch (e) {
    console.log("Error:", e.stack);
  }
}

main();

// The graph
const adjacencyList = new Map();

// Add node
function addNode(airport) {
  adjacencyList.set(airport, []);
}

// Add edge, undirected
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

// Create the Graph
nodes.forEach(addNode);
routes.forEach((route) => addEdge(...route));

console.log(adjacencyList, "adj list");

console.log(nodes, "nodes");

let longestPath = 0;

function bfs(start) {
  const visited = new Set();

  const queue = [start];

  while (queue.length > 0) {
    const vertice = queue.shift(); // mutates the queue

    const destinations = adjacencyList.get(vertice);

    for (const destination of destinations) {
      if (destination === "4") {
        console.log(`BFS found target!`);
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
    }
  }
  console.log(longestPath, "longest path");
}

bfs(startNode);
