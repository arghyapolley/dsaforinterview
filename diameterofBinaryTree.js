// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function diameterOfBinaryTree(root) {
    let maxDiameter = 0; // Variable to store the maximum diameter

    // Helper function to compute the height and update the max diameter
    function dfs(node) {
        if (node === null) return 0; // Base case: if the node is null, return height 0

        // Recursively get the height of the left and right subtrees
        let leftHeight = dfs(node.left);
        let rightHeight = dfs(node.right);

        // The diameter at the current node is the sum of the heights of the left and right subtrees
        maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

        // The height of the current node is the max height of its subtrees plus 1
        return Math.max(leftHeight, rightHeight) + 1;
    }

    // Start DFS from the root
    dfs(root);

    return maxDiameter;
}
// Example 1: Binary tree: [1,2,3,4,5]
let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root1)); // Output: 3 (The path is 4 -> 2 -> 1 -> 3)

// Example 2: Binary tree: [1,2,3]
let root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);

console.log(diameterOfBinaryTree(root2)); // Output: 2 (The path is 2 -> 1 -> 3)
