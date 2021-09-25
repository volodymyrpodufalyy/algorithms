const PriorityQueue = require("../pririotyQueue");


const items = [1, 18, 17, 3, 7, 4];

describe('priority queue', () =>
    it('queue items correctly', (done) => {
        const priorityQueue = new PriorityQueue((a, b) => a[1] > b[1]);
        priorityQueue.push(['low', 0], ['medium', 5], ['high', 10]);

        let queueResult = []

        while (!priorityQueue.isEmpty()) {
            queueResult.push(priorityQueue.pop()[0]);
        }

        expect(queueResult).toEqual(['high', 'medium', 'low',]);
        expect(queueResult[0]).toEqual('high');
        expect(queueResult[1]).toEqual('medium');
        expect(queueResult[2]).toEqual('low');
        done();
    })
);
