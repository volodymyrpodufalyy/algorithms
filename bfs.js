const bfs = (graph, start, target) => {
  const queue = [start];
  
  // console.log(graph);

  const visited = new Set();
  while (queue.length > 0) {
    const node = queue.shift();

    const destinations = graph.get(node);

    for (const destination in destinations) {
      if (destination == target) {
        console.log('found ');
      }
      if(!visited.has(destination)) {
        visited.add(destination); 
        queue.push(destination);
      } 
    }
  }
};

module.exports = bfs;
