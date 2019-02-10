let { queues } = require('./../index');
let ptime = require('quick-ptime');


// setup stacks
let queue = new queues.Queue();
let arrayQueue = new queues.ArrayQueue();

// enqueue 100,000 items into the queue
ptime.setTime('queue100000');
for(let i = 0; i < 100000; i++) {
    queue.enqueue('value');
}
console.log("Enqueue 100,000 Queue timing:", ptime.elapsedTime('queue100000').formatted);

ptime.setTime('arrayqueue100000');
for(let i = 0; i < 100000; i++) {
    arrayQueue.enqueue('value');
}
console.log("Enqueue 100,000 Array Queue timing:", ptime.elapsedTime('arrayqueue100000').formatted);

// dequeue 100,000 items into the queue
ptime.setTime('dqueue100000');
for(let i = 0; i < 100000; i++) {
    queue.dequeue();
}
console.log("Dequeue 100,000 Queue timing:", ptime.elapsedTime('dqueue100000').formatted);

ptime.setTime('darrayqueue100000');
for(let i = 0; i < 100000; i++) {
    arrayQueue.dequeue();
}
console.log("Dequeue 100,000 Array Queue timing:", ptime.elapsedTime('darrayqueue100000').formatted);