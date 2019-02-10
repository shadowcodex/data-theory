let { stacks } = require('./../index');
let ptime = require('quick-ptime');


// setup stacks
let stack = new stacks.Stack();
let arrayStack = new stacks.ArrayStack();

// push 100,000 items onto the stack
ptime.setTime('stack100000');
for(let i = 0; i < 100000; i++) {
    stack.push('value');
}
console.log("Push 100,000 Stack timing:", ptime.elapsedTime('stack100000').formatted);

ptime.setTime('arraystack100000');
for(let i = 0; i < 100000; i++) {
    arrayStack.push('value');
}
console.log("Push 100,000 Array Stack timing:", ptime.elapsedTime('arraystack100000').formatted);


// pop 100,000 items off the stack
ptime.setTime('pstack100000');
for(let i = 0; i < 100000; i++) {
    stack.pop()
}
console.log("Pop 100,000 Stack timing:", ptime.elapsedTime('pstack100000').formatted);

ptime.setTime('parraystack100000');
for(let i = 0; i < 100000; i++) {
    stack.pop()
}
console.log("Pop 100,000 Array Stack timing:", ptime.elapsedTime('parraystack100000').formatted);