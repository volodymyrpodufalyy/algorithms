const rabinKarpSearch = require("./rabinKarpSearch");


function main() {
  try {
    let str = "ALGO LAB A RABIN KARP ALGORITHM";
    let pattern = "ALGO";
    // A prime number
    let primeNumber = 101;

    rabinKarpSearch(pattern, str, primeNumber);
  } catch (e) {
    console.log("Error:", e.stack);
  }
}
main();
