let ptime = require('quick-ptime');
let ProgressBar = require('progress');

const standard = async (name, adt, methods, count, values, pbar) => {
  const iADT = new adt(count);
  pbar.tick({
    token1: `${name} adt setup`,
  });
  results = [];

  for (let i = 0; i < methods.length; i++) {
    results.push(
      (await ptime.runFunctionRounds(
        `${name} ${methods[i]} ${count}`,
        iADT[`${methods[i]}`].bind(iADT),
        values,
        count,
        true
      )).formatted
    );

    pbar.tick({
      token1: `${name} ${methods[i]} ${count}`,
    });
  }

  return results;
};

const standardRun = async (dataTypes, methods, adt) => {
  bar = new ProgressBar(':bar Last Completed :token1 :percent :elapseds total, completes in :etas', { total: 34 });
  bar.tick({
    token1: 'progress bar',
  });

  let results = {};

  for (let i = 0; i < dataTypes.length; i++) {
    for (let x = 0; x < methods.length; x++) {
      results[dataTypes[i] + ' ' + methods[x]] = [];
    }
  }

  bar.tick({
    token1: 'result sets setup',
  });

  // (name, adt, methods, count, values, progressBar)
  for (let i = 0; i < dataTypes.length; i++) {
    i100000 = await standard(dataTypes[i], adt[`${dataTypes[i]}`], methods, 100000, [1], bar);
    i1000000 = await standard(dataTypes[i], adt[`${dataTypes[i]}`], methods, 1000000, [1], bar);
    for (let x = 0; x < methods.length; x++) {
      results[dataTypes[i] + ' ' + methods[x]].push(i100000[x], i1000000[x]);
    }
  }

  let items = [];

  let keys = Object.keys(results);
  for (let i = 0; i < keys.length; i++) {
    let item = {};
    item[keys[i]] = results[keys[i]];
    items.push(item);
  }

  return items;
};

module.exports = {
  standard,
  standardRun,
};
