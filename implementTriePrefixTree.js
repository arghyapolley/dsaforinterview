// TrieNode class representing each node in the Trie
class TrieNode {
    constructor() {
        this.children = {}; // Stores the children nodes
        this.isEndOfWord = false; // True if the node marks the end of a word
    }
}

// Trie class with insert, search, and startsWith methods
class Trie {
    constructor() {
        this.root = new TrieNode(); // Initialize the Trie with a root node
    }

    // Insert a word into the Trie
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode(); // If the character is not in children, add it
            }
            node = node.children[char]; // Move to the next node
        }
        node.isEndOfWord = true; // Mark the end of the word
    }

    // Search for a word in the Trie
    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false; // If the character is not found, return false
            }
            node = node.children[char]; // Move to the next node
        }
        return node.isEndOfWord; // Return true if it's the end of a word
    }

    // Check if there is any word in the Trie that starts with the given prefix
    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false; // If the character is not found, return false
            }
            node = node.children[char]; // Move to the next node
        }
        return true; // Return true if we successfully reached the end of the prefix
    }
}
// Create a Trie instance
let trie = new Trie();

// Insert words into the Trie
trie.insert("apple");
trie.insert("app");
trie.insert("bat");
trie.insert("ball");

// Search for words
console.log(trie.search("apple")); // Output: true
console.log(trie.search("app")); // Output: true
console.log(trie.search("bat")); // Output: true
console.log(trie.search("ball")); // Output: true
console.log(trie.search("banana")); // Output: false

// Check for prefixes
console.log(trie.startsWith("app")); // Output: true
console.log(trie.startsWith("ba")); // Output: true
console.log(trie.startsWith("batman")); // Output: false
