const Graph = require("./graph");

const graph = new Graph(8);

graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(3, 7);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(5, 0);
graph.addEdge(5, 6);
graph.addEdge(6, 0);
graph.addEdge(6, 2);
graph.addEdge(6, 4);
graph.addEdge(7, 3);
graph.addEdge(7, 5);
console.log("SSC in first graph:");
const sccResult = graph
  .SCC()
  .map((i, index) => `${index + 1}.scc component: ${i}`)
  .join("\n");
console.log(sccResult);
