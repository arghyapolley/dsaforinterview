function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function delNodes(root, to_delete) {
    let toDelete = new Set(to_delete);
    let forest = [];

    // Helper function for DFS
    function dfs(node, isRoot) {
        if (!node) return null;

        // Process the left and right subtrees
        node.left = dfs(node.left, false);
        node.right = dfs(node.right, false);

        // If the node is to be deleted, return null and do not add it to the forest
        if (toDelete.has(node.val)) {
            // Add the non-null children to the forest
            if (node.left) forest.push(node.left);
            if (node.right) forest.push(node.right);
            return null; // Delete this node
        }

        // If it's a root of a tree, add it to the forest
        if (isRoot) forest.push(node);

        return node; // Return the node as is (not deleted)
    }

    // Start DFS from the root
    dfs(root, true);

    return forest;
}
// Helper function to create a tree from an array
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

// Example 1: Deleting nodes and returning the forest
let root1 = createTree([1, 2, 3, 4, null, 5, 6]);
let toDelete1 = [3, 5];
console.log(delNodes(root1, toDelete1)); 
// Output: Forest with roots [1, 4, 6]

// Example 2: No nodes to delete
let root2 = createTree([1, 2, 3, null, 4]);
let toDelete2 = [];
console.log(delNodes(root2, toDelete2)); 
// Output: Forest with a single tree rooted at 1
