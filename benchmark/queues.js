let { queues } = require('./../index');
const Table = require('cli-table');
const { standardRun } = require('./util');

const run = async () => {
  const dataTypes = ['LinkedQueue', 'UArrayQueue', 'BFltArrayQueue', 'BFixArrayQueue'];
  //   const dataTypes = ['LinkedQueue', 'BFltArrayQueue'];
  const methods = ['enqueue', 'peek', 'dequeue'];

  return await standardRun(dataTypes, methods, queues);
};

run().then(value => {
  const table = new Table({
    head: ['Queue Operation', '100,000 items', '1,000,000 items'],
  });

  table.push(...value);

  console.log('\n');
  console.log(table.toString());
});
