// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function distributeCoins(root) {
    let moves = 0;

    // Helper function to perform DFS and calculate moves
    function dfs(node) {
        if (!node) return 0; // Base case: return 0 if the node is null

        // Recursively calculate the excess coins for the left and right subtrees
        let leftExcess = dfs(node.left);
        let rightExcess = dfs(node.right);

        // The number of moves required is the total number of excess coins from the left and right subtrees
        moves += Math.abs(leftExcess) + Math.abs(rightExcess);

        // The excess coins at the current node are: (coins at the node - 1) + excess from left + excess from right
        return node.val - 1 + leftExcess + rightExcess;
    }

    // Start DFS from the root
    dfs(root);

    // Return the total number of moves
    return moves;
}
// Example 1:
let root1 = new TreeNode(3);
root1.left = new TreeNode(0);
root1.right = new TreeNode(0);
root1.left.left = new TreeNode(1);
console.log(distributeCoins(root1)); // Output: 4

// Example 2:
let root2 = new TreeNode(1);
root2.left = new TreeNode(0);
root2.right = new TreeNode(2);
console.log(distributeCoins(root2)); // Output: 3
