class Graph {
  constructor(v) {
    this.V = v;
    this.adj = new Array(v);
    this.res = [];
    for (let i = 0; i < v; ++i) this.adj[i] = [];

    this.time = 0;
  }

  addEdge(v, w) {
    this.adj[v].push(w);
  }

  SCCHelper(node, lowlinkArr, discovered, marked, stack) {
    discovered[node] = this.time;
    lowlinkArr[node] = this.time;
    this.time += 1;
    marked[node] = true;
    stack.push(node);

    // console.log(node, "node");

    for (let n of this.adj[node]) {



      if (discovered[n] == -1) {
        this.SCCHelper(n, lowlinkArr, discovered, marked, stack);

        lowlinkArr[node] = Math.min(lowlinkArr[node], lowlinkArr[n]);
      } else if (marked[n] == true) {

        lowlinkArr[node] = Math.min(lowlinkArr[node], discovered[n]);
      }
    }
    let sccEntities = [];

    let w = -1;
    if (lowlinkArr[node] == discovered[node]) {
      while (w !== node) {
        w = stack.pop();
        sccEntities.push(w);
        marked[w] = false;
      }
      this.res.push(sccEntities);
    }
  }

  SCC() {
    console.log(this.adj, "adj");

    let discovered = new Array(this.V);
    let lowlinkArr = new Array(this.V);
    for (let i = 0; i < this.V; i++) {
      discovered[i] = -1;
      lowlinkArr[i] = -1;
    }
    let marked = new Array(this.V);
    let stack = [];

    for (let i = 0; i < this.V; i++) {
      if (discovered[i] == -1)
        this.SCCHelper(i, lowlinkArr, discovered, marked, stack);
    }
    return this.res;
  }
}

module.exports = Graph;
