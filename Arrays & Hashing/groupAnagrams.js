// Use a hash map keyed by a canonical representation of each word. 
// The cleanest way is to sort characters of each string and use that sorted string as the key. 
// All anagrams collapse to the same key, so grouping becomes a single pass.
// Approach (short + precise)
// For each string s:
// Sort characters → key (e.g., "act" → "act", "cat" → "act")
// Push original string into map[key]
// Return all map values
// Edge cases
// Empty input → return []
// Strings with empty string "" → valid group
// Case sensitivity → "Act" vs "act" (depends on requirement)
// Large input → avoid repeated heavy operations if possible

function groupAnagrams(strs) {
    const map = new Map();

    for (let s of strs) {
        // Step 1: create key by sorting characters
        const key = s.split('').sort().join('');

        // Step 2: group strings by key
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(s);
    }

    // Step 3: return grouped anagrams
    return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]

// const map = new Map(); → stores grouped anagrams
// for (let s of strs) → iterate each string
// split → sort → join → normalize string to canonical form
// map.has(key) → check if group exists
// map.get(key).push(s) → append string
// Array.from(map.values()) → return grouped lists
// Complexity
// Let:
// n = number of strings
// k = max length of a string
// Time Complexity:
// Sorting each string → O(k log k)
// Total → O(n * k log k)   
// Space Complexity:
// Hash map storage → O(n * k)