// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function sortedArrayToBST(nums) {
    // Helper function to build the tree recursively
    function buildTree(left, right) {
        if (left > right) return null; // Base case: if no elements left, return null

        // Find the middle element
        const mid = Math.floor((left + right) / 2);

        // Create a new node with the middle element as the root
        const root = new TreeNode(nums[mid]);

        // Recursively build the left and right subtrees
        root.left = buildTree(left, mid - 1);
        root.right = buildTree(mid + 1, right);

        return root;
    }

    // Call the helper function starting from the entire array
    return buildTree(0, nums.length - 1);
}
const nums1 = [-10, -3, 0, 5, 9];
console.log(sortedArrayToBST(nums1)); 
// Output: A height-balanced BST with root 0, left child -3, and right child 5.

const nums2 = [1, 3];
console.log(sortedArrayToBST(nums2)); 
// Output: A height-balanced BST with root 3 and left child 1.
