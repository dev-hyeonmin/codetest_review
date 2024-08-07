class Queue {
    constructor(data = []) {
        this.data = data;
    }

    enqueue(item) {
        this.data.push(item);
    }

    dequeue() {
        return this.data.shift();
    }

    isEmpty() {
        return this.data.length === 0;
    }

    peek() {
        return this.isEmpty() ? null : this.data[0];
    }
}