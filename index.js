var bubble = require('./modules/sorts/bubble.js');
var distribution = require('./modules/sorts/distribution.js');
var efficient = require('./modules/sorts/efficient.js');
var inefficient = require('./modules/sorts/inefficient.js');
var simple = require('./modules/sorts/simple.js');

var x = [1,5,7,2,43,6,26,7,2356,7,346,1,42,0];
// var x = ['a', 'b','d', 'c','h','z','a','y','w','m'];
//var x = ['apples', 'oranges', 'banannas', 'pears', 'grapes', 'carrots', 'squash', 'lettuce'];

console.log(x);
var y = simple.selection(x);
console.log(y);