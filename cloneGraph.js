function cloneGraph(node) {
    if (!node) return null; // If the input node is null, return null.

    // Hash map to store the cloned nodes.
    let visited = new Map();

    // Helper function to perform DFS and clone the graph.
    function dfs(node) {
        // If the node is already cloned, return the clone.
        if (visited.has(node)) {
            return visited.get(node);
        }

        // Clone the current node.
        let cloneNode = new Node(node.val);
        visited.set(node, cloneNode);

        // Recursively clone the neighbors of the current node.
        for (let neighbor of node.neighbors) {
            cloneNode.neighbors.push(dfs(neighbor)); // Add the clone of the neighbor.
        }

        return cloneNode;
    }

    return dfs(node); // Start the DFS traversal from the input node.
}

// Definition for a Node.
function Node(val, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
}
// Create a graph manually:
//     1
//    / \
//   2   4
//   |   |
//   3---+

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];

const clonedGraph = cloneGraph(node1);

// Now `clonedGraph` is a deep copy of the original graph
console.log(clonedGraph);
