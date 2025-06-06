function findWords(board, words) {
    // Define a Trie structure to store words
    class TrieNode {
        constructor() {
            this.children = {};
            this.isEndOfWord = false;
        }
    }

    // Construct the Trie
    function buildTrie(words) {
        let root = new TrieNode();
        for (let word of words) {
            let node = root;
            for (let char of word) {
                if (!node.children[char]) {
                    node.children[char] = new TrieNode();
                }
                node = node.children[char];
            }
            node.isEndOfWord = true; // Mark the end of a word
        }
        return root;
    }

    // DFS helper function
    function dfs(board, node, i, j, path) {
        // If the current position is out of bounds or the cell is already visited, return
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] === '#') {
            return;
        }

        let char = board[i][j];
        let currentNode = node.children[char];
        if (!currentNode) return; // No valid path
        
        // If the current node represents the end of a word, add the word to the result
        if (currentNode.isEndOfWord) {
            result.add(path + char);
        }

        // Mark the current cell as visited
        board[i][j] = '#';

        // Explore all 4 directions: up, down, left, right
        dfs(board, currentNode, i + 1, j, path + char); // Down
        dfs(board, currentNode, i - 1, j, path + char); // Up
        dfs(board, currentNode, i, j + 1, path + char); // Right
        dfs(board, currentNode, i, j - 1, path + char); // Left

        // Unmark the cell for the next DFS call
        board[i][j] = char;
    }

    let root = buildTrie(words);
    let result = new Set(); // Use a set to avoid duplicate words
    let m = board.length;
    let n = board[0].length;

    // Start DFS from each cell in the board
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(board, root, i, j, "");
        }
    }

    return Array.from(result); // Convert the set to an array
}
const board = [
    ['o', 'a', 'a', 'n'],
    ['e', 't', 'a', 'e'],
    ['i', 'h', 'k', 'r'],
    ['i', 'f', 'l', 'v']
];

const words = ['oath', 'pea', 'eat', 'rain'];

console.log(findWords(board, words)); // Output: ['eat', 'oath']
