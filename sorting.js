let comparisonsCount = 0;
let swapsCount = 0;

function partition(items, left, right, order) {

    let pivot = items[Math.floor((right + left) / 2)];

    while (left <= right) {
        while (order === 'asc' ? items[left] < pivot : items[left] > pivot) {
            left++;
            comparisonsCount++;
        }

        while (order === 'asc' ? items[right] > pivot : items[right] < pivot) {
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

function quickSort(items, left, right, order) {
    let index;


    if (items.length > 1) {
        index = partition(items, left, right, order);

        if (left < index - 1) {
            quickSort(items, left, index - 1, order);
            comparisonsCount++;
        }

        if (index < right) {
            quickSort(items, index, right, order);
            comparisonsCount++;
        }
        comparisonsCount++;
    }

    return items;
}

function getSortingResult (items, order) {
    console.time('Execution Time');

    console.log(quickSort(items, 0, items.length - 1, order));

    console.log('Swaps count: ', swapsCount);

    console.log('Comparisons count: ', comparisonsCount);

    console.timeEnd('Execution Time');

    return quickSort(items, 0, items.length - 1);
}

module.exports = {quickSort, getSortingResult};
