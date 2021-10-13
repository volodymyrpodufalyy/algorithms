const findMaxNumberOfHamsters = require("../hamsters");
const {
  hamstersData1,
  hamstersData2,
  hamstersData3,
} = require("./hamstersTestData");

describe("hamsters algorithm test 1", () =>
  it("calculate hamsters correctly", (done) => {
    const hamstersToTake = findMaxNumberOfHamsters(hamstersData1);

    expect(hamstersToTake).toEqual(3);
    done();
  }));

describe("hamsters algorithm test 2", () =>
  it("calculate hamsters correctly", (done) => {
    const hamstersToTake = findMaxNumberOfHamsters(hamstersData2);

    expect(hamstersToTake).toEqual(2);
    done();
  }));

describe("hamsters algorithm test 3", () =>
  it("calculate hamsters correctly", (done) => {
    const hamstersToTake = findMaxNumberOfHamsters(hamstersData3);

    expect(hamstersToTake).toEqual(1);
    done();
  }));
