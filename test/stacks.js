var assert = require('assert');
const { stacks } = require('../index');

describe('Linked List Stack', function() {
  it('should make a new stack...', function() {
    const stack = new stacks.LinkedStack();
    assert.equal(stack.height(), 0);
  });

  it('should push an item on to the stack...', function() {
    let stack = new stacks.LinkedStack();
    stack.push('item');

    assert.equal(stack.top(), 'item');
  });

  it('should pop an item off the stack...', function() {
    let stack = new stacks.LinkedStack();
    stack.push('item');
    stack.pop();

    assert.equal(stack.top(), undefined);
  });

  it('should push three items on and pop tone off leaving 2 items...', function() {
    let stack = new stacks.LinkedStack();
    stack.push('item1');
    stack.push('item2');
    stack.push('item3');

    stack.pop();
    assert.equal(stack.height(), 2);
    assert.equal(stack.top(), 'item2');
  });
});

describe('Unbounded Array Stack', function() {
  it('should make a new stack...', function() {
    const stack = new stacks.UArrayStack();
    assert.equal(stack.height(), 0);
  });

  it('should push an item on to the stack...', function() {
    let stack = new stacks.UArrayStack();
    stack.push('item');

    assert.equal(stack.top(), 'item');
  });

  it('should pop an item off the stack...', function() {
    let stack = new stacks.UArrayStack();
    stack.push('item');
    stack.pop();

    assert.equal(stack.top(), undefined);
  });

  it('should push three items on and pop tone off leaving 2 items...', function() {
    let stack = new stacks.UArrayStack();
    stack.push('item1');
    stack.push('item2');
    stack.push('item3');

    stack.pop();
    assert.equal(stack.height(), 2);
    assert.equal(stack.top(), 'item2');
  });
});

describe('Bounded Array Stack', function() {
  it('should make a new stack...', function() {
    const stack = new stacks.BArrayStack();
    assert.equal(stack.height(), 0);
  });

  it('should push an item on to the stack...', function() {
    let stack = new stacks.BArrayStack();
    stack.push('item');

    assert.equal(stack.top(), 'item');
  });

  it('should pop an item off the stack...', function() {
    let stack = new stacks.BArrayStack();
    stack.push('item');
    stack.pop();

    assert.equal(stack.top(), undefined);
  });

  it('should push three items on and pop tone off leaving 2 items...', function() {
    let stack = new stacks.BArrayStack();
    stack.push('item1');
    stack.push('item2');
    stack.push('item3');

    stack.pop();
    assert.equal(stack.height(), 2);
    assert.equal(stack.top(), 'item2');
  });
});
