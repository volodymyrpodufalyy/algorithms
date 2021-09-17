const {quickSort} = require("../sorting");


const items = [1, 18, 17, 3, 7, 4];

describe('quickSort asc', () =>
    it('should sort the asc list correctly', (done) => {
        let sortedList = quickSort(items, 0, items.length - 1, 'asc');


        expect(sortedList).toEqual([1, 3, 4, 7, 17, 18]);
        expect(sortedList[0]).toEqual(1);
        expect(sortedList[1]).toEqual(3);
        expect(sortedList[2]).toEqual(4);
        expect(sortedList[3]).toEqual(7);
        expect(sortedList[4]).toEqual(17);
        expect(sortedList[5]).toEqual(18);
        expect(sortedList.length).toEqual(6);
        done();
    })
);


describe('quickSort desc', () =>
    it('should sort the desc list correctly', (done) => {
            const items = [1, 18, 17, 3, 7, 4];
            let reverseSortedList = quickSort(items, 0, items.length - 1, 'desc');


            expect(reverseSortedList.length).toEqual(6);
            expect(reverseSortedList).toEqual([18, 17, 7, 4, 3, 1]);

            expect(reverseSortedList[0]).toEqual(18);
            expect(reverseSortedList[1]).toEqual(17);
            expect(reverseSortedList[2]).toEqual(7);
            expect(reverseSortedList[3]).toEqual(4);
            expect(reverseSortedList[4]).toEqual(3);
            expect(reverseSortedList[5]).toEqual(1);
            done();
    })
);


