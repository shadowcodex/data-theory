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
    return this.length === this.queue.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  enqueue(data) {
    if (isFull()) {
      throw new Error('Enqueue attempted on a full queue.');
    } else {
      this.rear = (this.rear + 1) % this.queue.length;
      this.queue[this.rear] = data;
      this.length++;
    }
  }

  dequeue() {
    if (isEmpty()) {
      throw new Error('Dequeue attempted on empty queue.');
    } else {
      const toReturn = this.queue[this.front];
      this.queue[this.front] = null;
      this.front = (this.front + 1) % this.queue.length;
      this.length--;
      return toReturn;
    }
  }

  peek() {
    return this.queue[this.front];
  }

  length() {
    return this.length;
  }
}

/**
 * Implements a bounded queue using an array with the fixed front method.
 */
class BFixArrayQueue {
  constructor(size = (DEFAULT_SIZE = 1000)) {
    this.queue = [];
    for (let i = 0; i < size; i++) {
      this.queue[i] = null;
    }
    this.rear = -1;
    this.length = 0;
  }

  isFull() {
    return this.rear === this.queue.length - 1;
  }

  isEmpty() {
    return this.rear === -1;
  }

  enqueue(data) {
    if (isFull()) {
      throw new Error('Enqueue attempted on a full queue.');
    } else {
      this.rear++;
      this.queue[this.rear] = data;
    }
  }

  dequeue() {
    if (isEmpty()) {
      throw new Error('Dequeue attempted on empty queue.');
    } else {
      const toReturn = this.queue[0];

      // this array shift is why the fixed front method is inefficient.
      for (let i = 1; i < this.rear; i++) {
        this.queue[i - 1] = this.queue[i];
      }
      this.rear--;
      return toReturn;
    }
  }

  peek() {
    return this.queue[this.front];
  }

  length() {
    return this.rear + 1;
  }
}

module.exports = {
  LinkedQueue,
  UArrayQueue,
  BFltArrayQueue,
  BFixArrayQueue,
};
