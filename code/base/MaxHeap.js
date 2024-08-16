class MaxHeap {
    constructor () {
        this.heap = [];
    }

    print () {
        console.log(this.heap);
    }

    getLeftChildIndex (index) {
        return 2 * index + 1;
    }

    getRightChildIndex (index) {
        return 2 * index + 2;
    }

    getParentIndex (index) {
        return Math.floor((index - 1) / 2);
    }

    swap (index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    add (value) {
        this.heap.push(value);
        const index = this.heap.length - 1;
        this.heapiyUp(index);
    }

    remove () {
        const top = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapify();
        }

        return top;
    }

    heapiyUp (index) {
        const parentIndex = this.getParentIndex(index);

        const value = this.heap[index];
        const parentValue = this.heap[parentIndex];

        if (value > parentValue) {
            this.swap(index, parentIndex);
            this.heapiyUp(parentIndex);
        }
    }

    heapify (index = 0) {
        let topIndex = index;

        const leftIndex = this.getLeftChildIndex(index);
        const rightIndex = this.getRightChildIndex(index);

        const leftValue = this.heap[leftIndex];
        const rightValue = this.heap[rightIndex];

        if (leftIndex < this.heap.length && leftValue > this.heap[topIndex]) {
            topIndex = leftIndex;
        }

        if (rightIndex<this.heap.length && rightValue > this.heap[topIndex]) {
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
const maxHeap = new MaxHeap();
maxHeap.add(10); maxHeap.print();
maxHeap.add(30); maxHeap.print();
maxHeap.add(15); maxHeap.print();
maxHeap.add(40); maxHeap.print();
maxHeap.add(40); maxHeap.print();
maxHeap.add(50); maxHeap.print();
maxHeap.add(100); maxHeap.print();
maxHeap.remove(); maxHeap.print();
maxHeap.remove(); maxHeap.print();
maxHeap.remove(); maxHeap.print();
maxHeap.remove(); maxHeap.print();
maxHeap.remove(); maxHeap.print();