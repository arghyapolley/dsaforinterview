class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  function mergeTwoSortedLists(l1, l2) {
    // Dummy node to simplify edge cases
    const dummy = new ListNode(0);
    let current = dummy;
  
    // Traverse both lists
    while (l1 !== null && l2 !== null) {
      if (l1.value < l2.value) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }
  
    // Append the remaining nodes
    if (l1 !== null) {
      current.next = l1;
    } else if (l2 !== null) {
      current.next = l2;
    }
  
    return dummy.next;
  }
  // Creating two sample lists:
// List 1: 1 -> 3 -> 5
const l1 = new ListNode(1);
l1.next = new ListNode(3);
l1.next.next = new ListNode(5);

// List 2: 2 -> 4 -> 6
const l2 = new ListNode(2);
l2.next = new ListNode(4);
l2.next.next = new ListNode(6);

console.log("List 1:");
printList(l1);

console.log("List 2:");
printList(l2);

const mergedHead = mergeTwoSortedLists(l1, l2);

console.log("Merged List:");
printList(mergedHead);

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
