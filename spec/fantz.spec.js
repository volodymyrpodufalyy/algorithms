const minSplits = require("../findNumberOfSplits");
const { findPowers } = require("../helpers");

describe("algorithm test", () =>
  it("calculate algorithm correctly", (done) => {
    const data = {
      n: "100111011110100100111110110011100101000111100101110010001100111011110100100111110110011100101000110010110000111100101110010001",
      x: 7
    }
    let powersList = findPowers(data.n, data.x);
    const result = minSplits(data.n, powersList);

    expect(result).toEqual(5);
    done();
  }));


  describe("algorithm test 2", () =>
  it("calculate algorithm correctly", (done) => {
    const data = {
      n: "101101101",
      x: 5
    }
    
    let powersList = findPowers(data.n, data.x);
    const result = minSplits(data.n, powersList);

    expect(result).toEqual(3);
    done();
  }));

  describe("algorithm test 3", () =>
  it("calculate algorithm correctly", (done) => {
    const data = {
      n: "1111101",
      x: 5
    }
    let powersList = findPowers(data.n, data.x);
    const result = minSplits(data.n, powersList);

    expect(result).toEqual(1);
    done();
  }));

