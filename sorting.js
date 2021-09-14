let comparisonsCount = 0;
let swapsCount = 0;

function partition(items, left, right) {

    let pivot = items[Math.floor((right + left) / 2)];

    while (left <= right) {
        while (items[left] < pivot) {
            left++;
            comparisonsCount++;
        }

        while (items[right] > pivot) {
            right--;
            comparisonsCount++;
        }

        if (left <= right) {
            [items[left], items[right]] = [items[right], items[left]];
            left++;
            right--;
            swapsCount++;
        }
        comparisonsCount++;
    }

    return left;
}

function quickSort(items, left, right) {
    let index;


    if (items.length > 1) {
        index = partition(items, left, right);

        if (left < index - 1) {
            quickSort(items, left, index - 1);
            comparisonsCount++;
        }

        if (index < right) {
            quickSort(items, index, right);
            comparisonsCount++;
        }
        comparisonsCount++;
    }

    return items;
}

function getSortingResult (items) {
    console.time('Execution Time');

    console.log(quickSort(items, 0, items.length - 1));

    console.log('Swaps count: ', swapsCount);

    console.log('Comparisons count: ', comparisonsCount);

    console.timeEnd('Execution Time');

    return quickSort(items, 0, items.length - 1);
}

module.exports = {quickSort, getSortingResult};
