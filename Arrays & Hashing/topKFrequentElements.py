# Use a frequency map + bucket sort. 
# The key idea: frequency range is bounded by n, so you can avoid sorting entirely and get linear time.
# Approach (most optimized)
# Count frequency of each number → freqMap
# Create buckets where index = frequency
# Place numbers into buckets
# Traverse buckets from high → low, collect k elements
# Edge cases
# k = 1 → return most frequent element
# All elements same → single bucket hit
# Negative numbers → works fine (hash map key)
# nums.length = k → return all elements
# Large input → bucket avoids O(n log n)

def topKFrequent(nums, k):
    from collections import defaultdict

    # Step 1: frequency map
    freq_map = defaultdict(int)
    for num in nums:
        freq_map[num] += 1

    # Step 2: buckets
    buckets = [[] for _ in range(len(nums) + 1)]
    for num, freq in freq_map.items():
        buckets[freq].append(num)

    # Step 3: collect result
    result = []
    for i in range(len(buckets) - 1, 0, -1):
        for num in buckets[i]:
            result.append(num)
            if len(result) == k:
                return result
print(topKFrequent([1,1,1,2,2,3], 2))      # Output: [1, 2]
print(topKFrequent([1], 1))              # Output: [1]
print(topKFrequent([-1, -1, 0, 1, 1, 1], 2)) # Output: [1, -1]

# freqMap → stores count of each number
# buckets[i] → stores numbers with frequency i
# Loop 1 → build frequency
# Loop 2 → distribute into buckets
# Reverse loop → pick highest frequency first
# Stop when k elements collected
