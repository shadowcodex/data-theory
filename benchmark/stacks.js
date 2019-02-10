let { stacks } = require('./../index');
let ptime = require('quick-ptime');
const Table = require('cli-table');


// setup stacks
let linkedStack = new stacks.LinkedStack();
let uArrayStack = new stacks.UArrayStack();
let bArrayStack = new stacks.BArrayStack(1100001);

/**
 * PUSH STUFF
 */

// push 100,000 items onto the stack
ptime.setTime('stack100000');
for(let i = 0; i < 100000; i++) {
    linkedStack.push('value');
}
let stackTime = ptime.elapsedTime('stack100000');
// console.log("Push 100,000 Linked Stack timing:", ptime.elapsedTime('stack100000').formatted);

// push 1,000,000 items onto the stack
ptime.setTime('stack1000000');
for(let i = 0; i < 1000000; i++) {
    linkedStack.push('value');
}
let mStackTime = ptime.elapsedTime('stack1000000');
// console.log("Push 100,000 Linked Stack timing:", ptime.elapsedTime('stack100000').formatted);

// push 1 item onto the stack
ptime.setTime('stack1');
for(let i = 0; i < 1; i++) {
    linkedStack.push('value');
}
let sStackTime = ptime.elapsedTime('stack1');
// console.log("Push 100,000 Linked Stack timing:", ptime.elapsedTime('stack100000').formatted);





// push 100,000 items onto the stack
ptime.setTime('ustack100000');
for(let i = 0; i < 100000; i++) {
    uArrayStack.push('value');
}
let ustackTime = ptime.elapsedTime('ustack100000');
// console.log("Push 100,000 Linked Stack timing:", ptime.elapsedTime('stack100000').formatted);

// push 1,000,000 items onto the stack
ptime.setTime('ustack1000000');
for(let i = 0; i < 1000000; i++) {
    uArrayStack.push('value');
}
let umStackTime = ptime.elapsedTime('ustack1000000');
// console.log("Push 100,000 Linked Stack timing:", ptime.elapsedTime('stack100000').formatted);

// push 1 item onto the stack
ptime.setTime('ustack1');
for(let i = 0; i < 1; i++) {
    uArrayStack.push('value');
}
let usStackTime = ptime.elapsedTime('ustack1');
// console.log("Push 100,000 Linked Stack timing:", ptime.elapsedTime('stack100000').formatted);




// push 100,000 items onto the stack
ptime.setTime('bstack100000');
for(let i = 0; i < 100000; i++) {
    bArrayStack.push('value');
}
let bstackTime = ptime.elapsedTime('bstack100000');
// console.log("Push 100,000 Linked Stack timing:", ptime.elapsedTime('stack100000').formatted);

// push 1,000,000 items onto the stack
ptime.setTime('bstack1000000');
for(let i = 0; i < 1000000; i++) {
    bArrayStack.push('value');
}
let bmStackTime = ptime.elapsedTime('bstack1000000');
// console.log("Push 100,000 Linked Stack timing:", ptime.elapsedTime('stack100000').formatted);

// push 1 item onto the stack
ptime.setTime('bstack1');
for(let i = 0; i < 1; i++) {
    bArrayStack.push('value');
}
let bsStackTime = ptime.elapsedTime('bstack1');
// console.log("Push 100,000 Linked Stack timing:", ptime.elapsedTime('stack100000').formatted);




/**
 * POP STUFF
 */

// push 100,000 items onto the stack
ptime.setTime('pstack100000');
for(let i = 0; i < 100000; i++) {
    linkedStack.pop('value');
}
let pstackTime = ptime.elapsedTime('pstack100000');
// console.log("Push 100,000 Linked Stack timing:", ptime.elapsedTime('stack100000').formatted);

// push 1,000,000 items onto the stack
ptime.setTime('pstack1000000');
for(let i = 0; i < 1000000; i++) {
    linkedStack.pop('value');
}
let pmStackTime = ptime.elapsedTime('pstack1000000');
// console.log("Push 100,000 Linked Stack timing:", ptime.elapsedTime('stack100000').formatted);

// push 1 item onto the stack
ptime.setTime('pstack1');
for(let i = 0; i < 1; i++) {
    linkedStack.pop('value');
}
let psStackTime = ptime.elapsedTime('pstack1');
// console.log("Push 100,000 Linked Stack timing:", ptime.elapsedTime('stack100000').formatted);



// push 100,000 items onto the stack
ptime.setTime('upstack100000');
for(let i = 0; i < 100000; i++) {
    uArrayStack.pop('value');
}
let upstackTime = ptime.elapsedTime('upstack100000');
// console.log("Push 100,000 Linked Stack timing:", ptime.elapsedTime('stack100000').formatted);

// push 1,000,000 items onto the stack
ptime.setTime('upstack1000000');
for(let i = 0; i < 1000000; i++) {
    uArrayStack.pop('value');
}
let upmStackTime = ptime.elapsedTime('upstack1000000');
// console.log("Push 100,000 Linked Stack timing:", ptime.elapsedTime('stack100000').formatted);

// push 1 item onto the stack
ptime.setTime('upstack1');
for(let i = 0; i < 1; i++) {
    uArrayStack.pop('value');
}
let upsStackTime = ptime.elapsedTime('upstack1');
// console.log("Push 100,000 Linked Stack timing:", ptime.elapsedTime('stack100000').formatted);





// push 100,000 items onto the stack
ptime.setTime('bpstack100000');
for(let i = 0; i < 100000; i++) {
    bArrayStack.pop('value');
}
let bpstackTime = ptime.elapsedTime('bpstack100000');
// console.log("Push 100,000 Linked Stack timing:", ptime.elapsedTime('stack100000').formatted);

// push 1,000,000 items onto the stack
ptime.setTime('bpstack1000000');
for(let i = 0; i < 1000000; i++) {
    bArrayStack.pop('value');
}
let bpmStackTime = ptime.elapsedTime('bpstack1000000');
// console.log("Push 100,000 Linked Stack timing:", ptime.elapsedTime('stack100000').formatted);

// push 1 item onto the stack
ptime.setTime('bpstack1');
for(let i = 0; i < 1; i++) {
    bArrayStack.pop('value');
}
let bpsStackTime = ptime.elapsedTime('bpstack1');
// console.log("Push 100,000 Linked Stack timing:", ptime.elapsedTime('stack100000').formatted);


/// Output results

const table = new Table({
    head: ['Stack Operation', '100,000 items', '1,000,000 items', '1 item']
});


table.push(
    ['Linked List Stack Push', stackTime.formatted, mStackTime.formatted, sStackTime.formatted],
    ['Unbounded Array Stack Push', ustackTime.formatted, umStackTime.formatted, usStackTime.formatted],
    ['Bounded Array Stack Push', bstackTime.formatted, bmStackTime.formatted, bsStackTime.formatted],
    ['Linked List Stack Pop', pstackTime.formatted, pmStackTime.formatted, psStackTime.formatted],
    ['Unbounded Array Stack Pop', upstackTime.formatted, upmStackTime.formatted, upsStackTime.formatted],
    ['Bounded Array Stack Pop', bpstackTime.formatted, bpmStackTime.formatted, bpsStackTime.formatted],
);

console.log(table.toString());
