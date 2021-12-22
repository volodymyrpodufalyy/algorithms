const rabinKarpSearch = require("./rabinKarpSearch");


function main() {
  try {
    let str = "hаsdbdjhdaаssdsdaagdsjdgdajhdfjkhdfааsdujkdkаааshdsdjhhааuyhj";
    let pattern = "аа";
    let primeNumber = 115;

    const searchRes = rabinKarpSearch(pattern, str, primeNumber);
    searchRes.forEach(i => console.log('Pattern found at ' + i));
  } catch (e) {
    console.log("Error:", e.stack);
  }
}
main();
