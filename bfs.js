function arrayMax(arr) {
  return arr.reduce(function (p, v) {
    return p > v ? p : v;
  });
}

function bfs(graph, V, x) {
  let level = Array(V);
  let marked = Array(V).fill(false);

  let que = [];
  que.push(x);
  level[x] = 0;
  marked[x] = true;

  while (que.length > 0) {
    x = que[0];

    que.shift();

    for (let i = 0; i < graph[x].length; i++) {
      let b = graph[x][i];

      if (!marked[b]) {
        que.push(b);
        level[b] = level[x] + 1;
        marked[b] = true;
      }
    }
  }

  console.log(arrayMax(level), "this is max distance");
  return arrayMax(level);
}

function bfsLevels(routes, startNode, V) {
  // adjacency graph for tree
  let graph = Array.from(Array(V + 1), () => Array());

  routes.map((route) => {
    graph[parseInt(route[0])].push(parseInt(route[1]));
  });

  return bfs(graph, V, startNode);
}

module.exports = bfsLevels;
