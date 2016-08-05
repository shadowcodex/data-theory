var bubble = require('./modules/sorts/bubble.js');
var distribution = require('./modules/sorts/distribution.js');
var efficient = require('./modules/sorts/efficient.js');
var inefficient = require('./modules/sorts/inefficient.js');
var simple = require('./modules/sorts/simple.js');

var x = [1,5,7,2,43,6,26,7,2356,7,346,1,42,0];
var y = ['a', 'b','d', 'c','h','z','a','y','w','m'];
var z = ['apples', 'oranges', 'banannas', 'pears', 'grapes', 'carrots', 'squash', 'lettuce'];

console.log('Array of Integers');
console.log(x);
x = simple.selection(x);
console.log(x);

console.log('Array of Characters');
console.log(y);
y = simple.selection(y);
console.log(y);

console.log('Array of Strings');
console.log(z);
z = simple.selection(z);
console.log(z);