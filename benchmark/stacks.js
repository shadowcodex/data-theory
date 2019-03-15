let { stacks } = require('./../index');
const Table = require('cli-table');
const { standardRun } = require('./util');

const run = async () => {
  const dataTypes = ['LinkedStack', 'UArrayStack', 'BArrayStack'];
  const methods = ['push', 'top', 'pop'];

  return await standardRun(dataTypes, methods, stacks);
};

run().then(value => {
  const table = new Table({
    head: ['Stack Operation', '100,000 items', '1,000,000 items'],
  });

  table.push(...value);

  console.log('\n');
  console.log(table.toString());
});
