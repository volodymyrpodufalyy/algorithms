const findMaxNumberOfHamsters = (data) => {
  let hamstersResult = 0;
  let sum = 0;
  const totalHamsterNeeds = (hamster, neighbors) => {
    return hamster.dailyNorm + neighbors * hamster.greedLevel;
  };
  for (let i = 0; i < data.hamsters.length; i++) {
    hamstersResult += 1;
    const sortedHamsters = data.hamsters.sort(
      (a, b) =>
        totalHamsterNeeds(a, hamstersResult - 1) -
        totalHamsterNeeds(b, hamstersResult - 1)
    );
    const newHamstersArr = sortedHamsters.map((i) => {
      return totalHamsterNeeds(i, hamstersResult - 1);
    });
    sum += newHamstersArr[i];
    if (sum > data.foodAvailable) {
      hamstersResult -= 1;
    }
  }
  return hamstersResult;
};

module.exports = findMaxNumberOfHamsters;
