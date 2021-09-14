const {quickSort} = require("../sorting");


describe('quickSort', () =>
    it('should sort the list correctly', (done) => {
        const items = [1, 18, 17, 3, 7, 4];
        let sortedList = quickSort(items, 0, items.length - 1);


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


