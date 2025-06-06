class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let next = null;
  
    while (current !== null) {
      // Store the next node
      next = current.next;
      // Reverse the current node's pointer
      current.next = prev;
      // Move pointers one step forward
      prev = current;
      current = next;
    }
  
    // At the end, prev will point to the new head
    return prev;
  }
  // Creating a simple linked list: 1 -> 2 -> 3 -> null
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

console.log("Original List:");
printList(head);

const reversedHead = reverseLinkedList(head);

console.log("Reversed List:");
printList(reversedHead);

// Helper function to print the list
function printList(node) {
  let current = node;
  let output = "";
  while (current !== null) {
    output += current.value + " -> ";
    current = current.next;
  }
  output += "null";
  console.log(output);
}
