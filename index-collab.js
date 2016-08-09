// copy of index.js for c9 collaborator
var bubble = require('./modules/sorts/bubble.js');
var distribution = require('./modules/sorts/distribution.js');
//var efficient = require('./modules/sorts/efficient.js');
var inefficient = require('./modules/sorts/inefficient.js');
var simple = require('./modules/sorts/simple.js');
var common = require('./modules/common.js');

var x = [ 1, 5, 7, 2, 43, 6, 26, 7, 2356, 7, 346, 1, 42, 0 ];
var y = [ 'a', 'b', 'd', 'c', 'h', 'z', 'a', 'y', 'w', 'm' ];
var z = ['apples', 'oranges', 'banannas', 'pears', 'grapes', 'carrots', 'squash', 'lettuce'];

console.log('Array of Integers');
console.log(x);
inefficient.stooge(x);
// common.shuffle(x);
console.log(x);

console.log('Array of Characters');
console.log(y);
inefficient.stooge(y);
console.log(y);

console.log('Array of Strings');
console.log(z);
inefficient.stooge(z);
console.log(z);