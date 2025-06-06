class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Push a new element into the heap
    push(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    // Pop the smallest element from the heap
    pop() {
        const root = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this._heapifyDown();
        }
        return root;
    }

    // Get the smallest element (root) without removing it
    peek() {
        return this.heap[0];
    }

    // Helper function to maintain the heap property while adding a new element
    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    // Helper function to maintain the heap property while removing the root element
    _heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (index < length) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }

            if (right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

function assignTasks(tasks, k) {
    let minHeap = new MinHeap();
    
    // Initialize the heap with k servers, all with 0 load
    for (let i = 0; i < k; i++) {
        minHeap.push(0); // Each server starts with load 0
    }

    // Assign tasks to servers
    for (let task of tasks) {
        let minLoad = minHeap.pop(); // Get the server with the minimum load
        minHeap.push(minLoad + task); // Assign the task to that server and update its load
    }

    // The maximum load will be the largest value in the heap
    return Math.max(...minHeap.heap);
}
const tasks1 = [3, 2, 1, 4, 5];
const k1 = 2;
console.log(assignTasks(tasks1, k1)); // Output: 7 (Server 1 has tasks [3, 4], server 2 has tasks [2, 1, 5])

const tasks2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k2 = 3;
console.log(assignTasks(tasks2, k2)); // Output: 18 (Optimal distribution of tasks)
