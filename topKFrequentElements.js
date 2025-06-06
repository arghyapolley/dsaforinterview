function topKFrequent(nums, k) {
    // Step 1: Build a frequency map
    let frequencyMap = new Map();
    for (let num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Step 2: Use a min-heap (priority queue) to get the top k frequent elements
    let heap = new MinHeap();
    for (let [num, freq] of frequencyMap) {
        heap.push([num, freq]); // Push the number and its frequency into the heap
        if (heap.size() > k) {
            heap.pop(); // Remove the element with the smallest frequency
        }
    }

    // Step 3: Extract the top k frequent elements from the heap
    let result = [];
    while (heap.size() > 0) {
        result.push(heap.pop()[0]); // Push the number into the result array
    }

    return result;
}

// MinHeap implementation (Custom class for Min-Heap)
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push([num, freq]) {
        this.heap.push([num, freq]);
        this._heapifyUp();
    }

    pop() {
        const root = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this._heapifyDown();
        }
        return root;
    }

    size() {
        return this.heap.length;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex][1] <= this.heap[index][1]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (index < length) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let smallest = index;

            if (leftChild < length && this.heap[leftChild][1] < this.heap[smallest][1]) {
                smallest = leftChild;
            }

            if (rightChild < length && this.heap[rightChild][1] < this.heap[smallest][1]) {
                smallest = rightChild;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}
const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
console.log(topKFrequent(nums, k)); // Output: [1, 2]
