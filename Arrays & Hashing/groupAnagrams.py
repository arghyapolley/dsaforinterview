# Use a hash map keyed by a canonical representation of each word. 
# The cleanest way is to sort characters of each string and use that sorted string as the key. 
# All anagrams collapse to the same key, so grouping becomes a single pass.
# Approach (short + precise)
# For each string s:
# Sort characters → key (e.g., "act" → "act", "cat" → "act")
# Push original string into map[key]
# Return all map values
# Edge cases
# Empty input → return []
# Strings with empty string "" → valid group
# Case sensitivity → "Act" vs "act" (depends on requirement)
# Large input → avoid repeated heavy operations if possible
 
def groupAnagrams(strs):
    from collections import defaultdict

    mp = defaultdict(list)

    for s in strs:
        # Step 1: sorted string as key
        key = ''.join(sorted(s))

        # Step 2: group
        mp[key].append(s)

    # Step 3: return result
    return list(mp.values())

print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))   # Output: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]

# defaultdict(list) → auto-creates list for new keys
# sorted(s) → returns sorted characters
# ''.join(...) → converts list to string key
# mp[key].append(s) → group strings
# list(mp.values()) → final output
# Complexity
# Let:
# n = number of strings
# k = max length of a string
# Time Complexity:
# Sorting each string → O(k log k)
# Total → O(n * k log k)   
# Space Complexity:
# Hash map storage → O(n * k)
