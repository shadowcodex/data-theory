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
    this.length = 0;
  }

  enqueue(data) {
    this.length++;
    return this.queue.push(data);
  }

  dequeue() {
    this.length--;
    return this.queue.shift();
  }

  peek() {
    return this.queue[this.queue.length - 1];
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

/**
 * Implements a bounded queue using an array with the floating front method.
 */
class BFltArrayQueue {
  constructor(size = 100) {
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
    if (this.isFull()) {
      throw new Error('Enqueue attempted on a full queue.');
    } else {
      this.rear = (this.rear + 1) % this.queue.length;
      this.queue[this.rear] = data;
      this.length++;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
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
}

/**
 * Implements a bounded queue using an array with the fixed front method.
 */
class BFixArrayQueue {
  constructor(size = 100) {
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
    if (this.isFull()) {
      throw new Error('Enqueue attempted on a full queue.');
    } else {
      this.length = ++this.rear + 1; // important to use prefix incrementing here
      this.queue[this.rear] = data;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Dequeue attempted on empty queue.');
    } else {
      const toReturn = this.queue[0];

      // this array shift is why the fixed front method is inefficient.
      for (let i = 1; i < this.rear; i++) {
        this.queue[i - 1] = this.queue[i];
      }
      this.length = --this.rear + 1; // important to use prefix decrementing here
      return toReturn;
    }
  }

  peek() {
    return this.queue[0];
  }

  length() {
    return this.rear + 1;
  }
}

/**
 * Implements a priority queue with unlimited levels of priority
 * Highest priority is priority 0
 */
class APriorityQueue {
  constructor(priorities = 2) {
    this.queues = [];
    for (let i = 0; i < priorities; i++) {
      this.queues[i] = [];
    }
    this.levels = this.queues.length;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  enqueue(data, priority) {
    if (priority >= this.queues.length) {
      throw new Error('Priority out of bounds.');
    } else {
      this.length++;
      this.queues[priority].push(data);
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    } else {
      this.length--;
      for (let i = 0; i < this.queues.length; i++) {
        if (this.queues[i].length > 0) {
          return this.queues[i].shift();
        } else {
          continue;
        }
      }
    }
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    } else {
      this.length--;
      for (let i = 0; i < this.queues.length; i++) {
        if (this.queues[i].length > 0) {
          return this.queues[i][0];
        } else {
          continue;
        }
      }
    }
  }
}

// class LinkedPriorityQueue {}

module.exports = {
  LinkedQueue,
  UArrayQueue,
  BFltArrayQueue,
  BFixArrayQueue,
  APriorityQueue,
};
