const rabinKarpSearch = require("../rabinKarpSearch");

describe("algorithm test", () =>
  it("perfom algorithm correctly", (done) => {
    let str = "ALGO LAB A RABIN KARP ALGORITHM";
    let pattern = "ALGO";
    let primeNumber = 115;
    const searchRes = rabinKarpSearch(pattern, str, primeNumber);

    expect(searchRes[0]).toEqual(0);
    expect(searchRes[1]).toEqual(22);
    done();
  }));


  describe("algorithm test 2", () =>
  it("perfom algorithm correctly", (done) => {
    let str = " LASADASDASNBVSDJJCSHMALGO";
    let pattern = "Q";
    let primeNumber = 115;
    const searchRes = rabinKarpSearch(pattern, str, primeNumber);

    expect(searchRes).toEqual([]);
    done();
  }));

  describe("algorithm test 3", () =>
  it("perfom algorithm correctly", (done) => {
    let str = " cow milk cow cow cow cow cow cow cow cow cow cow cow cow cow cow DASDsdasd253768ASNBVSD 34534JJCSHM cat ALGO";
    let pattern = "cat";
    let primeNumber = 115;
    const searchRes = rabinKarpSearch(pattern, str, primeNumber);

    expect(searchRes[0]).toEqual(101);
    done();
  }));

