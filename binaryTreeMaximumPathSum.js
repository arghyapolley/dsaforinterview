// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function maxPathSum(root) {
    let maxSum = -Infinity; // This will store the global maximum path sum

    // Helper function to perform DFS and calculate maximum path sum
    function dfs(node) {
        if (!node) return 0; // Base case: if the node is null, return 0

        // Recursively get the maximum path sum for the left and right subtrees
        let leftMax = Math.max(dfs(node.left), 0);  // Ignore negative paths
        let rightMax = Math.max(dfs(node.right), 0); // Ignore negative paths

        // Calculate the path sum that includes this node and its left and right subtrees
        let currentPathSum = node.val + leftMax + rightMax;

        // Update the global maximum path sum
        maxSum = Math.max(maxSum, currentPathSum);

        // Return the maximum sum path that includes the current node and one of its subtrees
        return node.val + Math.max(leftMax, rightMax);
    }

    // Start DFS from the root
    dfs(root);

    return maxSum; // The global maximum path sum
}
// Example 1: Binary Tree: [1,2,3]
let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);

console.log(maxPathSum(root1)); // Output: 6 (The path is 2 -> 1 -> 3)

// Example 2: Binary Tree: [-10,9,20,null,null,15,7]
let root2 = new TreeNode(-10);
root2.left = new TreeNode(9);
root2.right = new TreeNode(20);
root2.right.left = new TreeNode(15);
root2.right.right = new TreeNode(7);

console.log(maxPathSum(root2)); // Output: 42 (The path is 15 -> 20 -> 7)
