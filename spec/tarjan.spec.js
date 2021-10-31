const {Graph} = require("..");

describe("tarjan's algorithm test", () =>
  it("calculate tarjan's algorithm correctly", (done) => {
    let graph = new Graph(5);

    graph.addEdge(1, 0);
    graph.addEdge(0, 2);
    graph.addEdge(2, 1);
    graph.addEdge(0, 3);
    graph.addEdge(3, 4);
    console.log("SSC in first graph");
    const result = graph.SCC();

    expect(result[0]).toEqual([4]);
    expect(result[1]).toEqual([3]);
    expect(result[2]).toEqual([1, 2, 0]);
    done();
  }));
