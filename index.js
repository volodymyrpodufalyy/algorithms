const Readline = require('readline');
const {getSortingResult} = require("./sorting");


const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let items = [];

readline.question('Please input your numbers array \n', numbersArray => {
    numbersArray.split(',')
        .forEach(left => items.push(parseInt(left)));
    getSortingResult(items);
    readline.close();
});
