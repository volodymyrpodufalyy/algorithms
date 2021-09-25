const PriorityQueue = require("./pririotyQueue");

// Default comparison
const queue = new PriorityQueue();
queue.push(10, 20, 30, 40, 50);
console.log('Top:', queue.peek());
console.log('Size:', queue.size());
while (!queue.isEmpty()) {
    console.log(queue.pop());
}

// Pairwise comparison
const pairwiseQueue = new PriorityQueue((a, b) => a[1] > b[1]);
pairwiseQueue.push(['low', 0], ['medium', 5], ['high', 10]);
while (!pairwiseQueue.isEmpty()) {
    console.log(pairwiseQueue.pop()[0]);
}
