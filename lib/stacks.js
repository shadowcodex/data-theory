class Stack {
    constructor() {

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

    isEmpty() {
        return this.stack.length === 0;
    }
}


module.exports = {
    Stack,
    ArrayStack
}