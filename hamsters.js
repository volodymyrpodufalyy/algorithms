const findMaxNumberOfHamsters = (data) => {
  let hamstersResult = 0;
  let sum = 0;
  const totalHamsterNeeds = (hamster, neighbors) => {
    return hamster.dailyNorm + neighbors * hamster.greedLevel;
  };
  function add(accumulator, a) {
    return accumulator + a;
  }
  for (let i = 0; i < data.hamstersNumber; i++) {
    hamstersResult += 1;
    const newHamstersArr = data.hamsters
      .map((item) => totalHamsterNeeds(item, hamstersResult - 1))
      .sort((a, b) => a - b);
    sum = newHamstersArr.slice(0, hamstersResult).reduce(add, 0);
    if (sum > data.foodAvailable) {
      hamstersResult -= 1;
      break;
    }
  }
  return hamstersResult;
};

module.exports = findMaxNumberOfHamsters;
