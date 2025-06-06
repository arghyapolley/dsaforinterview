// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function trimBST(root, low, high) {
    // Base case: if the root is null, return null
    if (root === null) {
        return null;
    }

    // If the current node's value is less than low, discard the left subtree
    if (root.val < low) {
        return trimBST(root.right, low, high);
    }

    // If the current node's value is greater than high, discard the right subtree
    if (root.val > high) {
        return trimBST(root.left, low, high);
    }

    // If the current node's value is within the range, recursively trim both subtrees
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);

    return root; // Return the trimmed root
}
// Helper function to create a binary search tree
function createTree(arr) {
    if (arr.length === 0) return null;
    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;
    
    while (i < arr.length) {
        let node = queue.shift();
        
        if (arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        
        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    
    return root;
}

// Example 1: Trimming the BST
let root1 = createTree([1, 0, 2]);
let trimmed1 = trimBST(root1, 1, 2);
console.log(trimmed1); // Output: [1, null, 2]

// Example 2: Trimming the BST
let root2 = createTree([3, 0, 4, null, 2, null, null, 1]);
let trimmed2 = trimBST(root2, 1, 3);
console.log(trimmed2); // Output: [3, 2, null, 1]
