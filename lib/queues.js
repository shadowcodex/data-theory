class Queue {
    constructor () {
        this.first = {};
        this.last = {};
        this.length = 0;
    }

    enqueue(data) {
        let node = {value: data};
        if(this.length > 0) {
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
        if(this.length === 1) {
            const value = this.first.value;
            this.first = {};
            this.last = {};
            this.length--;
            return value;
        } if(this.length > 1) {
            const value = this.first.value;
            this.first = this.first.prev;
            this.length--;
            return value;
        } else {
            return undefined;
        }
    }

    peek() {
        return this.first;
    }

    length() {
        return this.length;
    }

    isEmpty() {
        return this.length === 0;
    }
}

class ArrayQueue {
    constructor () {
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

module.exports = {
    Queue,
    ArrayQueue
}