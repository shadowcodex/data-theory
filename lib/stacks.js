/**
 * Implements an unbounded stack using a linked list
 */
class LinkedStack {
  constructor() {
    this.topNode = null;
    this.length = 0;
  }

  push(data) {
    this.topNode = {
      value: data,
      prev: this.topNode,
    };
    this.length++;
    return this.length;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.topNode = this.topNode.prev;
    this.length--;
  }

  top() {
    if (!this.topNode) {
      return undefined;
    } else {
      return this.topNode.value;
    }
  }

  height() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }
}

/**
 * Implements an unbounded stack using an array.
 */
class UArrayStack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    return this.stack.push(data);
  }

  pop() {
    this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  height() {
    return this.stack.length;
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

/**
 * Implements a bounded stack using an array.
 */
class BArrayStack {
  constructor(size = 100) {
    this.stack = [];
    for (let i = 0; i < size; i++) {
      this.stack[i] = null;
    }
    this.topIndex = -1;
  }

  height() {
    return this.topIndex + 1;
  }

  isEmpty() {
    return this.topIndex === -1;
  }

  isFull() {
    return this.topIndex === this.stack.length - 1;
  }

  push(item) {
    if (!this.isFull()) {
      this.topIndex++;
      this.stack[this.topIndex] = item;
      return this.height();
    } else {
      throw new Error('Stack too deep');
    }
  }

  pop() {
    if (!this.isEmpty()) {
      this.stack[this.topIndex] = null;
      this.topIndex--;
    } else {
      throw new Error('Stack already empty');
    }
  }

  top() {
    if (!this.isEmpty()) {
      return this.stack[this.topIndex];
    } else {
      return undefined;
    }
  }
}

module.exports = {
  LinkedStack,
  UArrayStack,
  BArrayStack,
};
