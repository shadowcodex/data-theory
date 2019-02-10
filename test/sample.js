var assert = require('assert');
let ptime = require('quick-ptime');
const { stacks } = require('../index');

describe('Stack', function() {
  it('should make a new stack', function() {
    const stack = new stacks.Stack();
    assert.equal(stack.height(), 0);    
  });

  it('should push an item on to the stack', function() {
    let stack = new stacks.Stack();
    stack.push('item');

    assert.equal(stack.peek(), 'item');
  });

  it('should pop an item off the stack', function() {
    let stack = new stacks.Stack();
    stack.push('item');
    let value = stack.pop();
    assert.equal(value, 'item');
  });

  it('should push three items on and pop them off in order', function() {
    let stack = new stacks.Stack();
    stack.push('item1');
    stack.push('item2');
    stack.push('item3');

    let value = stack.pop();
    assert.equal(value, 'item3');
    
    value = stack.pop();
    assert.equal(value, 'item2');
    
    value = stack.pop();
    assert.equal(value, 'item1');
  });
});

describe('Array Stack', function() {
  it('should make a new stack', function() {
    const stack = new stacks.ArrayStack();
    assert.equal(stack.height(), 0);    
  });

  it('should push an item on to the stack', function() {
    let stack = new stacks.ArrayStack();
    stack.push('item');

    assert.equal(stack.peek(), 'item');
  });

  it('should pop an item off the stack', function() {
    let stack = new stacks.ArrayStack();
    stack.push('item');
    let value = stack.pop();
    assert.equal(value, 'item');
  });

  it('should push three items on and pop them off in order', function() {
    let stack = new stacks.ArrayStack();
    stack.push('item1');
    stack.push('item2');
    stack.push('item3');

    let value = stack.pop();
    assert.equal(value, 'item3');
    
    value = stack.pop();
    assert.equal(value, 'item2');
    
    value = stack.pop();
    assert.equal(value, 'item1');
  });
});