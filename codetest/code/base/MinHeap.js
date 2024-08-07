class MinHeap {
    constructor() {
        this.heap = [];
    }

    print() {
        console.log(this.heap);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    add(value) {
        this.heap.push(value);
        const index = this.heap.length - 1;
        this.heapifyUp(index);
    }

    remove() {
        if (this.heap.length === 0) {
            console.log('Heap is empty');
            return;
        }

        const top = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapify();
        }

        return top;
    }

    heapifyUp(index) {
        const parentIndex = this.getParentIndex(index);

        const value = this.heap[index];
        const parentValue = this.heap[parentIndex];

        if (value < parentValue) {
            this.swap(index, parentIndex);
            this.heapifyUp(parentIndex);
        }
    }

    heapify(index = 0) {
        let topIndex = index;

        const leftIndex = this.getLeftChildIndex(index);
        const rightIndex = this.getRightChildIndex(index);

        const leftValue = this.heap[leftIndex];
        const rightValue = this.heap[rightIndex];

        if (leftIndex < this.heap.length && leftValue < this.heap[topIndex]) {
            topIndex = leftIndex;
        }

        if (rightIndex < this.heap.length && rightValue < this.heap[topIndex]) {
            topIndex = rightIndex;
        }

        if (topIndex !== index) {
            this.swap(index, topIndex);
            this.heapify(topIndex);
        }
    }
}

/**
 * TEST CASES
 */
const minHeap = new MinHeap();
minHeap.add(10); minHeap.print();
minHeap.add(30); minHeap.print();
minHeap.add(15); minHeap.print();
minHeap.add(40); minHeap.print();
minHeap.add(40); minHeap.print();
minHeap.add(50); minHeap.print();
minHeap.add(100); minHeap.print();
minHeap.remove(); minHeap.print();
minHeap.remove(); minHeap.print();
minHeap.remove(); minHeap.print();
minHeap.remove(); minHeap.print();