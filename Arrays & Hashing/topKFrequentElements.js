// Use a frequency map + bucket sort. 
// The key idea: frequency range is bounded by n, so you can avoid sorting entirely and get linear time.
// Approach (most optimized)
// Count frequency of each number → freqMap
// Create buckets where index = frequency
// Place numbers into buckets
// Traverse buckets from high → low, collect k elements
// Edge cases
// k = 1 → return most frequent element
// All elements same → single bucket hit
// Negative numbers → works fine (hash map key)
// nums.length = k → return all elements
// Large input → bucket avoids O(n log n)

function topKFrequent(nums, k) {
    // Step 1: frequency map
    const freqMap = new Map();
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Step 2: buckets (index = frequency)
    const buckets = Array(nums.length + 1).fill().map(() => []);

    for (let [num, freq] of freqMap.entries()) {
        buckets[freq].push(num);
    }

    // Step 3: collect top k
    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        for (let num of buckets[i]) {
            result.push(num);
            if (result.length === k) break;
        }
    }

    return result;
}
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));      // [1, 2]
console.log(topKFrequent([1], 1));              // [1]
console.log(topKFrequent([-1, -1, 0, 1, 1, 1], 2)); // [1, -1]

// freqMap → stores count of each number
// buckets[i] → stores numbers with frequency i
// Loop 1 → build frequency
// Loop 2 → distribute into buckets
// Reverse loop → pick highest frequency first
// Stop when k elements collected

// Complexity
// Let:
// n = number of elements
// m = number of unique elements
// Time Complexity:
// Frequency count → O(n)
// Bucket placement → O(m)
// Collecting result → O(n) worst case
// 👉 Overall: O(n)
// Space Complexity:
// Map + buckets → O(n)

