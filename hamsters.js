const findMaxNumberOfHamsters = (data) => {
  let hamstersResult = 0;
  let sum = 0;
  let steps = 0;

  
  let start = 0;
  let end = data.hamstersNumber - 1;
  let pivot = Math.floor((start + end) / 2);
  const totalHamsterNeeds = (hamster, neighbors) => {
    return hamster.dailyNorm + neighbors * hamster.greedLevel;
  };
  function add(accumulator, a) {
    return accumulator + a;
  }


  while (start <= end) {
    pivot = Math.floor((start + end) / 2);

    const newHamstersArr = data.hamsters
      .map((item) => totalHamsterNeeds(item,pivot !== 0 ? pivot - 1 : pivot + 1))
      .sort((a, b) => a - b);
    sum = newHamstersArr.slice(0, pivot).reduce(add, 0);
    
    if (sum <= data.foodAvailable) {
      start = pivot + 1;
    } else {
      end = pivot - 1;
    }
  }
  console.log(pivot, "pivot");
  return pivot;
  
};

module.exports = findMaxNumberOfHamsters;
