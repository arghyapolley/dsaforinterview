// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function mergeKLists(lists) {
    // Create a min-heap
    const heap = new MinHeap();

    // Step 1: Add the head of each list into the min-heap
    for (let i = 0; i < lists.length; i++) {
        if (lists[i] !== null) {
            heap.push(lists[i]);
        }
    }

    // Step 2: Use a dummy head for the result list
    let dummy = new ListNode(0);
    let current = dummy;

    // Step 3: Pop the smallest element from the heap and add to the result list
    while (heap.length > 0) {
        let node = heap.pop();
        current.next = node; // Add it to the merged list
        current = current.next; // Move to the next node
        
        // If the node has a next node, push it into the heap
        if (node.next !== null) {
            heap.push(node.next);
        }
    }

    return dummy.next; // Return the merged list, starting from the next of the dummy head
}

// MinHeap implementation
class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Push a new node into the heap
    push(node) {
        this.heap.push(node);
        this.heapifyUp();
    }

    // Pop the smallest node from the heap
    pop() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        let root = this.heap[0];
        this.heap[0] = this.heap.pop(); // Swap the root with the last element
        this.heapifyDown();
        return root;
    }

    // Helper function to maintain the heap property when a new node is added
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.heap[parent].val <= this.heap[index].val) break;
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }

    // Helper function to maintain the heap property when the root node is removed
    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (index < length) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < length && this.heap[left].val < this.heap[smallest].val) {
                smallest = left;
            }
            if (right < length && this.heap[right].val < this.heap[smallest].val) {
                smallest = right;
            }
            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    // Check if the heap is empty
    get length() {
        return this.heap.length;
    }
}
// Helper function to create a linked list from an array
function createList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Example 1: Merging three sorted linked lists
let list1 = createList([1, 4, 5]);
let list2 = createList([1, 3, 4]);
let list3 = createList([2, 6]);

let lists = [list1, list2, list3];
let mergedList = mergeKLists(lists);

// Print the merged list
let current = mergedList;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
// Output: [1, 1, 2, 3, 4, 4, 5, 6]
