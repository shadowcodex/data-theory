class Queue {
    constructor () {

    }
}

class ArrayQueue {
    constructor () {
        this.queue = [];
    }

    push(data) {
        return this.queue.unshift(data);
    }

    pop() {
        return this.queue.pop();
    }

    peek() {
        return this.queue[this.queue.length - 1];
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

module.exports = {
    Queue,
    ArrayQueue
}