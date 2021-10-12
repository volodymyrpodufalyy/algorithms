const findMaxNumberOfHamsters = require("./hamsters");

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

findMaxNumberOfHamsters(hamstersData);
