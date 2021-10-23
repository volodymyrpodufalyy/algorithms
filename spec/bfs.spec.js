const bfsLevels = require("../bfs");
const readData = require("../readData");

describe("bfs algorithm test 1", () =>
  it("calculate bfs correctly", (done) => {
    const { routes, startNode, vertices } = readData("in.txt");
    const result = bfsLevels(routes, startNode, vertices.size);

    expect(result).toEqual(2);
    done();
  }));

describe("bfs algorithm test 2", () =>
  it("calculate bfs correctly", (done) => {
    const { routes, startNode, vertices } = readData("in2.txt");
    const result = bfsLevels(routes, startNode, vertices.size);

    expect(result).toEqual(4);
    done();
  }));

describe("bfs algorithm test 3", () =>
  it("calculate bfs correctly", (done) => {
    const { routes, startNode, vertices } = readData("in3.txt");
    const result = bfsLevels(routes, startNode, vertices.size);

    expect(result).toEqual(11);
    done();
  }));
