const findMaxNumberOfHamsters = require("../hamsters");

const hamstersData = {
  foodAvailable: 19,
  hamstersNumber: 4,
  hamsters: [
    {
      dailyNorm: 5,
      greedLevel: 0,
    },
    {
      dailyNorm: 2,
      greedLevel: 2,
    },
    {
      dailyNorm: 1,
      greedLevel: 4,
    },
    {
      dailyNorm: 5,
      greedLevel: 1,
    },
  ],
};

describe("hamsters algorithm", () =>
  it("calculate hamsters correctly", (done) => {
    const hamstersToTake = findMaxNumberOfHamsters(hamstersData);

    expect(hamstersToTake).toEqual(3);
    done();
  }));
