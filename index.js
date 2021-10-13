const findMaxNumberOfHamsters = require("./hamsters");
const fs = require("fs");

const hamstersData = {};

function main() {
  try {
    const data = fs.readFileSync("hamsters.in.txt", "utf8");
    hamstersData.hamsters = [];
    data
      .toString()
      .split("\n")
      .map((item, index) => {
        switch (index) {
          case 0:
            hamstersData.foodAvailable = parseInt(item);
            break;
          case 1:
            hamstersData.hamstersNumber = parseInt(item);
            break;
          default:
            const hamster = {
              dailyNorm: parseInt(item.split(' ')[0]),
              greedLevel: parseInt(item.split(' ')[1]),
            }
            hamstersData.hamsters.push(hamster);
        }
      });
    const result = findMaxNumberOfHamsters(hamstersData);
    fs.writeFileSync('hamsters.out.txt', `${result}`);
    console.log('See the result in hamsters.out');
  } catch (e) {
    console.log("Error:", e.stack);
  }
}

main();
