class Stack {
    constructor () {
        this.top = {};        
        this.length = 0;
    }

    push(data) {
        let node = {
            value: data,
            prev: this.top
        };
        this.top = node;
        this.length++;
        return this.length;        
    }

    pop() {
        if(this.length === 0) {
            return undefined;
        }

        let value = this.top.value;
        this.top = this.top.prev;
        this.length--;
        return value;        
    }

    peek() {
        return this.top.value;
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