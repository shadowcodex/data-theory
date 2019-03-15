let { queues } = require('./../index');
let ptime = require('quick-ptime');
const Table = require('cli-table');
var ProgressBar = require('progress');

let bar;

const testStandard = async (name, adt, count) => {
  const iADT = new adt(count);
  bar.tick({
    token1: `${name} adt setup`,
  });
  results = [];
  results.push(
    (await ptime.runFunctionRounds(`${name} enqueue ${count}`, iADT.enqueue.bind(iADT), [1], count, true)).formatted
  );
  bar.tick({
    token1: `${name} enqueue ${count}`,
  });
  results.push(
    (await ptime.runFunctionRounds(`${name} peek ${count}`, iADT.peek.bind(iADT), [1], count, true)).formatted
  );
  bar.tick({
    token1: `${name} peek ${count}`,
  });
  results.push(
    (await ptime.runFunctionRounds(`${name} dequeue ${count}`, iADT.dequeue.bind(iADT), [1], count, true)).formatted
  );
  bar.tick({
    token1: `${name} dequeue ${count}`,
  });

  return results;
};

const run = async () => {
  bar = new ProgressBar(':bar Last Completed :token1 :percent :elapseds total, completes in :etas', { total: 34 });
  bar.tick({
    token1: 'progress bar',
  });

  let results = {};

  results['LinkedQueue Enqueue'] = [];
  results['UArrayQueue Enqueue'] = [];
  results['BFltArrayQueue Enqueue'] = [];
  results['BFixArrayQueue Enqueue'] = [];

  results['LinkedQueue Peek'] = [];
  results['UArrayQueue Peek'] = [];
  results['BFltArrayQueue Peek'] = [];
  results['BFixArrayQueue Peek'] = [];

  results['LinkedQueue Dequeue'] = [];
  results['UArrayQueue Dequeue'] = [];
  results['BFltArrayQueue Dequeue'] = [];
  results['BFixArrayQueue Dequeue'] = [];

  bar.tick({
    token1: 'result sets setup',
  });

  const lQueue100000 = await testStandard('LinkedQueue', queues.LinkedQueue, 100000);
  const lQueue1000000 = await testStandard('LinkedQueue', queues.LinkedQueue, 1000000);
  //   const lQueue10000000 = await testStandard('LinkedQueue', queues.LinkedQueue, 10000000);
  results['LinkedQueue Enqueue'].push(lQueue100000[0], lQueue1000000[0]);
  results['LinkedQueue Peek'].push(lQueue100000[1], lQueue1000000[1]);
  results['LinkedQueue Dequeue'].push(lQueue100000[2], lQueue1000000[2]);

  const bfltQueue100000 = await testStandard('BFltArrayQueue', queues.BFltArrayQueue, 100000);
  const bfltQueue1000000 = await testStandard('BFltArrayQueue', queues.BFltArrayQueue, 1000000);
  //   const bfltQueue10000000 = await testStandard('BFltArrayQueue', queues.BFltArrayQueue, 10000000);
  results['BFltArrayQueue Enqueue'].push(bfltQueue100000[0], bfltQueue1000000[0]);
  results['BFltArrayQueue Peek'].push(bfltQueue100000[1], bfltQueue1000000[1]);
  results['BFltArrayQueue Dequeue'].push(bfltQueue100000[2], bfltQueue1000000[2]);

  const uQueue100000 = await testStandard('UArrayQueue', queues.UArrayQueue, 100000);
  const uQueue1000000 = await testStandard('UArrayQueue', queues.UArrayQueue, 1000000);
  //   const uQueue10000000 = await testStandard('UArrayQueue', queues.UArrayQueue, 10000000);
  results['UArrayQueue Enqueue'].push(uQueue100000[0], uQueue1000000[0]);
  results['UArrayQueue Peek'].push(uQueue100000[1], uQueue1000000[1]);
  results['UArrayQueue Dequeue'].push(uQueue100000[2], uQueue1000000[2]);

  const bfixQueue100000 = await testStandard('BFixArrayQueue', queues.BFixArrayQueue, 100000);
  const bfixQueue1000000 = await testStandard('BFixArrayQueue', queues.BFixArrayQueue, 1000000);
  //   const bfixQueue10000000 = await testStandard('BFixArrayQueue', queues.BFixArrayQueue, 10000000);
  results['BFixArrayQueue Enqueue'].push(bfixQueue100000[0], bfixQueue1000000[0]);
  results['BFixArrayQueue Peek'].push(bfixQueue100000[1], bfixQueue1000000[1]);
  results['BFixArrayQueue Dequeue'].push(bfixQueue100000[2], bfixQueue1000000[2]);

  let items = [];

  let keys = Object.keys(results);
  for (let i = 0; i < keys.length; i++) {
    let item = {};
    item[keys[i]] = results[keys[i]];
    items.push(item);
  }

  return items;
};

run().then(value => {
  const table = new Table({
    head: ['Queue Operation', '100,000 items', '1,000,000 items'],
  });

  table.push(...value);

  console.log('\n');
  console.log(table.toString());
});
