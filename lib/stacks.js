class Stack {
    constructor () {
        this.head = {};        
        this.length = 0;
    }

    push(data) {
        let node = {
            value: data,
            prev: this.head
        };
        this.head = node;
        this.length++;
        return this.length;        
    }

    pop() {
        if(this.length === 0) {
            return undefined;
        }

        let value = this.head.value;
        this.head = this.head.prev;
        this.length--;
        return value;        
    }

    peek() {
        return this.head.value;
    }

    height() {
        return this.length;
    }

    isEmpty() {
        return this.length === 0;
    }
}

class ArrayStack {
    constructor() {
        this.stack = [];
    }

    push(data) {
        return this.stack.push(data);        
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    height() {
        return this.stack.length;
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}


module.exports = {
    Stack,
    ArrayStack
}