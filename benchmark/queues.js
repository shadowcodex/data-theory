let { queues } = require('./../index');
let ptime = require('quick-ptime');
const Table = require('cli-table');
var ProgressBar = require('progress');

let bar;

const standard = async (name, func, value) => {
  // console.log("Running...", name);
  const result = [
    (await ptime.runFunctionRounds(`${name} 100000`, func, [value], 100000, true)).formatted,
    (await ptime.runFunctionRounds(`${name} 1000000`, func, [value], 1000000, true)).formatted,
    (await ptime.runFunctionRounds(`${name} 10000000`, func, [value], 10000000, true)).formatted,
    (await ptime.runFunctionAverage(`${name} 1`, func, [value], 1000000, true)).formatted,
  ];

  let str = {};
  str[name] = result;
  bar.tick();
  return str;
};

const run = async () => {
  let results = [];
  let linkedStack = new stacks.LinkedStack();
  let uArrayStack = new stacks.UArrayStack();
  let bArrayStack = new stacks.BArrayStack(12100000);
  bar = new ProgressBar(':bar :percent :elapseds total, completes in :etas', { total: 10 });
  bar.tick();
  results.push(
    await standard('LinkedStack Push', linkedStack.push.bind(linkedStack), 1),
    await standard('UArrayStack Push', uArrayStack.push.bind(uArrayStack), 1),
    await standard('BArrayStack Push', bArrayStack.push.bind(bArrayStack), 1),
    await standard('LinkedStack Top', linkedStack.top.bind(linkedStack), 1),
    await standard('UArrayStack Top', uArrayStack.top.bind(uArrayStack), 1),
    await standard('BArrayStack Top', bArrayStack.top.bind(bArrayStack), 1),
    await standard('LinkedStack Pop', linkedStack.pop.bind(linkedStack), 1),
    await standard('UArrayStack Pop', uArrayStack.pop.bind(uArrayStack), 1),
    await standard('BArrayStack Pop', bArrayStack.pop.bind(bArrayStack), 1)
  );

  return results;
};

run().then(value => {
  const table = new Table({
    head: ['Stack Operation', '100,000 items', '1,000,000 items', '10,000,000 items', '1 item AVG'],
  });

  table.push(...value);

  console.log(table.toString());
});

// let { queues } = require('./../index');
// let ptime = require('quick-ptime');

// // setup stacks
// let queue = new queues.Queue();
// let arrayQueue = new queues.ArrayQueue();

// // enqueue 100,000 items into the queue
// ptime.setTime('queue100000');
// for (let i = 0; i < 100000; i++) {
//   queue.enqueue('value');
// }
// console.log('Enqueue 100,000 Queue timing:', ptime.elapsedTime('queue100000').formatted);

// ptime.setTime('arrayqueue100000');
// for (let i = 0; i < 100000; i++) {
//   arrayQueue.enqueue('value');
// }
// console.log('Enqueue 100,000 Array Queue timing:', ptime.elapsedTime('arrayqueue100000').formatted);

// // dequeue 100,000 items into the queue
// ptime.setTime('dqueue100000');
// for (let i = 0; i < 100000; i++) {
//   queue.dequeue();
// }
// console.log('Dequeue 100,000 Queue timing:', ptime.elapsedTime('dqueue100000').formatted);

// ptime.setTime('darrayqueue100000');
// for (let i = 0; i < 100000; i++) {
//   arrayQueue.dequeue();
// }
// console.log('Dequeue 100,000 Array Queue timing:', ptime.elapsedTime('darrayqueue100000').formatted);
