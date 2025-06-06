function connect(root) {
    if (!root) return null;

    let leftmost = root;

    // Traverse each level
    while (leftmost.left) {
        let current = leftmost;

        // Traverse the nodes in the current level
        while (current) {
            // Connect the left child to the right child
            current.left.next = current.right;

            // If the current node has a next pointer, connect the right child of current to the left child of current.next
            if (current.next) {
                current.right.next = current.next.left;
            }

            // Move to the next node in the current level
            current = current.next;
        }

        // Move to the next level
        leftmost = leftmost.left;
    }

    return root;
}
// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = this.next = null;
}

// Helper function to print the tree's level order with next pointers
function printTree(root) {
    let level = root;
    while (level) {
        let current = level;
        let output = [];
        while (current) {
            output.push(current.val);
            current = current.next;
        }
        console.log(output.join(" -> "));
        level = level.left;
    }
}

// Example Tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

connect(root);  // Populate next pointers

// Print the tree level by level with next pointers
printTree(root);
// Output:
// 1
// 2 -> 3
// 4 -> 5 -> 6 -> 7
