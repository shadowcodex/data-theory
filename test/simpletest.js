var dt = require('../index.js');

// var x = [1,5,7,2,43,6,26,7,2356,7,346,1,42,0];
// var y = ['a', 'b','d', 'c','h','z','a','y','w','m'];
// var z = ['apples', 'oranges', 'banannas', 'pears', 'grapes', 'carrots', 'squash', 'lettuce'];


var theStack = new dt.Stack();

theStack.push(1);
console.log(theStack.values);
theStack.push(2);
console.log(theStack.values);
theStack.pop();
console.log(theStack.values);
theStack.push(3);
console.log(theStack.values);

console.log(theStack.pop());
console.log(theStack.pop());
console.log(theStack.pop());
console.log(theStack.pop());