const Readline = require('readline');
const {getSortingResult} = require("./sorting");


const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let items = [];

let order = 'asc';

const question1 = () => {
    return new Promise((resolve, reject) => {
        readline.question('Please choose sorting order asc or desc \n', (answer) => {
            if (answer === 'desc' || answer === 'asc') order = answer;
            else reject('Invalid order choice');
            resolve()
        })
    })
}

const question2 = () => {
    return new Promise((resolve, reject) => {
        readline.question('Please input your numbers array \n', (numbersArray) => {
            numbersArray.split(',')
                .forEach(left => items.push(parseInt(left)));
            getSortingResult(items, order);
            resolve()
        })
    })
}

const main = async () => {
    try {
        await question1()
        await question2()
        readline.close()
    } catch (e) {
        console.log(e)
        readline.close()
    }
}

main()
