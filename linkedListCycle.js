// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function hasCycle(head) {
    if (!head || !head.next) return false; // If the list is empty or has only one node, no cycle

    let slow = head;
    let fast = head;

    // Traverse the list with two pointers (slow and fast)
    while (fast !== null && fast.next !== null) {
        slow = slow.next;        // Move slow pointer by one step
        fast = fast.next.next;   // Move fast pointer by two steps

        if (slow === fast) {
            return true;         // Cycle detected
        }
    }

    return false; // No cycle detected
}
// Example 1: Creating a cycle in a linked list
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creating a cycle by pointing node4 to node2

console.log(hasCycle(node1)); // Output: true

// Example 2: Linked list without a cycle
let nodeA = new ListNode(1);
let nodeB = new ListNode(2);
let nodeC = new ListNode(3);

nodeA.next = nodeB;
nodeB.next = nodeC;

console.log(hasCycle(nodeA)); // Output: false
