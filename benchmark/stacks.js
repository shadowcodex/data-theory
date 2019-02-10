let { stacks } = require('./../index');
let ptime = require('quick-ptime');


// setup stacks
let linkedStack = new stacks.LinkedStack();
let uArrayStack = new stacks.UArrayStack();
let bArrayStack = new stacks.BArrayStack(100000);

// push 100,000 items onto the stack
ptime.setTime('stack100000');
for(let i = 0; i < 100000; i++) {
    linkedStack.push('value');
}
console.log("Push 100,000 Linked Stack timing:", ptime.elapsedTime('stack100000').formatted);

ptime.setTime('uarraystack100000');
for(let i = 0; i < 100000; i++) {
    uArrayStack.push('value');
}
console.log("Push 100,000 Unbounded Array Stack timing:", ptime.elapsedTime('uarraystack100000').formatted);

ptime.setTime('barraystack100000');
for(let i = 0; i < 100000; i++) {
    bArrayStack.push('value');
}
console.log("Push 100,000 Bounded Array Stack timing:", ptime.elapsedTime('barraystack100000').formatted);


// pop 100,000 items off the stack
ptime.setTime('pstack100000');
for(let i = 0; i < 100000; i++) {
    linkedStack.pop()
}
console.log("Pop 100,000 Stack timing:", ptime.elapsedTime('pstack100000').formatted);

ptime.setTime('puarraystack100000');
for(let i = 0; i < 100000; i++) {
    uArrayStack.pop()
}
console.log("Pop 100,000 Unbounded Array Stack timing:", ptime.elapsedTime('puarraystack100000').formatted);

ptime.setTime('pbarraystack100000');
for(let i = 0; i < 100000; i++) {
    bArrayStack.pop()
}
console.log("Pop 100,000 Bounded Array Stack timing:", ptime.elapsedTime('pbarraystack100000').formatted);