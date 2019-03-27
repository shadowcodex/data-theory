var assert = require('assert');
const { queues } = require('../index');

describe('LinkedList Queue', function() {
  it('should make a new queue...', function() {
    const queue = new queues.LinkedQueue();
    assert.equal(queue.length, 0);
  });

  it('should enqueue an item onto the queue...', function() {
    const queue = new queues.LinkedQueue();
    queue.enqueue('item');
    assert.equal(queue.length, 1);
    assert.equal(queue.peek(), 'item');
  });

  it('should dequeue an item out of the queue...', function() {
    const queue = new queues.LinkedQueue();
    queue.enqueue('item');
    const item = queue.dequeue();
    assert.equal(queue.length, 0);
    assert.equal(item, 'item');
  });
});

describe('Unbounded Array Queue', function() {
  it('should make a new queue...', function() {
    const queue = new queues.UArrayQueue();
    assert.equal(queue.length, 0);
  });

  it('should enqueue an item onto the queue...', function() {
    const queue = new queues.UArrayQueue();
    queue.enqueue('item');
    assert.equal(queue.length, 1);
    assert.equal(queue.peek(), 'item');
  });

  it('should dequeue an item out of the queue...', function() {
    const queue = new queues.UArrayQueue();
    queue.enqueue('item');
    const item = queue.dequeue();
    assert.equal(queue.length, 0);
    assert.equal(item, 'item');
  });
});

describe('Bounded Floating Front Array Queue', function() {
  it('should make a new queue...', function() {
    const queue = new queues.BFltArrayQueue();
    assert.equal(queue.length, 0);
  });

  it('should enqueue an item onto the queue...', function() {
    const queue = new queues.BFltArrayQueue();
    queue.enqueue('item');
    assert.equal(queue.length, 1);
    assert.equal(queue.peek(), 'item');
  });

  it('should dequeue an item out of the queue...', function() {
    const queue = new queues.BFltArrayQueue();
    queue.enqueue('item');
    const item = queue.dequeue();
    assert.equal(queue.length, 0);
    assert.equal(item, 'item');
  });
});

describe('Bounded Fixed Front Array Queue', function() {
  it('should make a new queue...', function() {
    const queue = new queues.BFixArrayQueue();
    assert.equal(queue.length, 0);
  });

  it('should enqueue an item onto the queue...', function() {
    const queue = new queues.BFixArrayQueue();
    queue.enqueue('item');
    assert.equal(queue.length, 1);
    assert.equal(queue.peek(), 'item');
  });

  it('should dequeue an item out of the queue...', function() {
    const queue = new queues.BFixArrayQueue();
    queue.enqueue('item');
    const item = queue.dequeue();
    assert.equal(queue.length, 0);
    assert.equal(item, 'item');
  });
});

describe('Array Priority Queue', function() {
  it('should make a new queue...', function() {
    const queue = new queues.APriorityQueue();
    assert.equal(queue.length, 0);
  });

  it('should enqueue an item onto the queue...', function() {
    const queue = new queues.APriorityQueue();
    queue.enqueue('item', 0);
    assert.equal(queue.length, 1);
    assert.equal(queue.peek(), 'item');
  });

  it('should dequeue an item out of the queue...', function() {
    const queue = new queues.APriorityQueue();
    queue.enqueue('item', 0);
    const item = queue.dequeue();
    assert.equal(queue.length, 0);
    assert.equal(item, 'item');
  });

  it('should enqueue two different items at different priorites, and enqueue higher one first', function() {
    const queue = new queues.APriorityQueue();
    queue.enqueue('item', 1);
    queue.enqueue('item2', 0);
    const item = queue.dequeue();
    assert.equal(queue.length, 1);
    assert.equal(item, 'item2');
    const secondItem = queue.dequeue();
    assert.equal(queue.length, 0);
    assert.equal(secondItem, 'item');
  });

  it('should make a queue with 4 priority levels', function() {
    const queue = new queues.APriorityQueue(4);
    assert.equal(queue.levels, 4);
  });
});
