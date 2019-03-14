/**
 * Implements an unbounded queue using the linked list method.
 */
class LinkedQueue {
  constructor() {
    this.first = {};
    this.last = {};
    this.length = 0;
  }

  enqueue(data) {
    let node = { value: data };
    if (this.length > 0) {
      this.last.prev = node;
      this.last = node;
      this.length++;
      return this.length;
    } else {
      this.first = node;
      this.last = node;
      this.length++;
      return this.length;
    }
  }

  dequeue() {
    if (this.length === 1) {
      const value = this.first.value;
      this.first = {};
      this.last = {};
      this.length--;
      return value;
    }
    if (this.length > 1) {
      const value = this.first.value;
      this.first = this.first.prev;
      this.length--;
      return value;
    } else {
      return undefined;
    }
  }

  peek() {
    return this.first.value;
  }

  length() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }
}

/**
 * Implements an unbounded queue using an array.
 */
class UArrayQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(data) {
    return this.queue.unshift(data);
  }

  dequeue() {
    return this.queue.pop();
  }

  peek() {
    return this.queue[this.queue.length - 1];
  }

  length() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

/**
 * Implements a bounded queue using an array with the floating front method.
 */
class BFltArrayQueue {
  constructor(size = (DEFAULT_SIZE = 1000)) {
    this.queue = [];
    for (let i = 0; i < size; i++) {
      this.queue[i] = null;
    }
    this.front = 0;
    this.rear = size - 1;
    this.length = 0;
  }

  isFull() {
    return this.length === queue.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  enqueue(data) {
    if (isFull()) {
      throw new Error('Enqueue attempted on a full queue.');
    } else {
      this.rear = (this.rear + 1) % queue.length;
      queue[this.rear] = data;
      this.length++;
    }
  }

  dequeue() {
    if (isEmpty()) {
      throw new Error('Dequeue attempted on empty queue.');
    }
  }

  peek() {}

  length() {}
}

/**
 * Implements a bounded queue using an array with the fixed front method.
 */
class BFixArrayQueue {}

module.exports = {
  LinkedQueue,
  UArrayQueue,
  BFltArrayQueue,
  BFixArrayQueue,
};
