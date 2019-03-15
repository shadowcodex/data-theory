let { stacks } = require('./../index');
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
    (await ptime.runFunctionRounds(`${name} push ${count}`, iADT.push.bind(iADT), [1], count, true)).formatted
  );
  bar.tick({
    token1: `${name} push ${count}`,
  });
  results.push(
    (await ptime.runFunctionRounds(`${name} top ${count}`, iADT.top.bind(iADT), [1], count, true)).formatted
  );
  bar.tick({
    token1: `${name} top ${count}`,
  });
  results.push(
    (await ptime.runFunctionRounds(`${name} pop ${count}`, iADT.pop.bind(iADT), [1], count, true)).formatted
  );
  bar.tick({
    token1: `${name} pop ${count}`,
  });

  return results;
};

const run = async () => {
  bar = new ProgressBar(':bar Last Completed :token1 :percent :elapseds total, completes in :etas', { total: 34 });
  bar.tick({
    token1: 'progress bar',
  });

  let results = {};

  results['LinkedStack Push'] = [];
  results['UArrayStack Push'] = [];
  results['BArrayStack Push'] = [];

  results['LinkedStack Top'] = [];
  results['UArrayStack Top'] = [];
  results['BArrayStack Top'] = [];

  results['LinkedStack Pop'] = [];
  results['UArrayStack Pop'] = [];
  results['BArrayStack Pop'] = [];

  bar.tick({
    token1: 'result sets setup',
  });

  const l100000 = await testStandard('LinkedStack', stacks.LinkedStack, 100000);
  const l1000000 = await testStandard('LinkedStack', stacks.LinkedStack, 1000000);
  results['LinkedStack Push'].push(l100000[0], l1000000[0]);
  results['LinkedStack Top'].push(l100000[1], l1000000[1]);
  results['LinkedStack Pop'].push(l100000[2], l1000000[2]);

  const u100000 = await testStandard('UArrayStack', stacks.UArrayStack, 100000);
  const u1000000 = await testStandard('UArrayStack', stacks.UArrayStack, 1000000);
  results['UArrayStack Push'].push(u100000[0], u1000000[0]);
  results['UArrayStack Top'].push(u100000[1], u1000000[1]);
  results['UArrayStack Pop'].push(u100000[2], u100000[2]);

  const b100000 = await testStandard('BArrayStack', stacks.BArrayStack, 100000);
  const b1000000 = await testStandard('BArrayStack', stacks.BArrayStack, 1000000);
  results['BArrayStack Push'].push(b100000[0], b1000000[0]);
  results['BArrayStack Top'].push(b100000[1], b1000000[1]);
  results['BArrayStack Pop'].push(b100000[2], b100000[2]);

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
    head: ['Stack Operation', '100,000 items', '1,000,000 items'],
  });

  table.push(...value);

  console.log('\n');
  console.log(table.toString());
});
