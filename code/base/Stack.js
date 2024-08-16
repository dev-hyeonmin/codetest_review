class Stack {
    constructor(data = []) {
        this.data = data;
    }

    push(item) {
        this.data.push(item);
    }

    peek() {
        return this.data[this.data.length - 1];
    }

    pop() {
        return this.data.pop();
    }
}


/**
 * TEST CASES
 */
const stack = new Stack([1, 2, 3, 4, 5]);
stack.push(6);
console.log(stack.peek()); // 6
console.log(stack.pop()); // 6
console.log(stack.peek()); // 5