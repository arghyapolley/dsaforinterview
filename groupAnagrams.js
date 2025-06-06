function groupAnagrams(strs) {
    let map = new Map();

    // Iterate through each string in the input list
    for (let str of strs) {
        // Sort the characters of the string to find its key (sorted form)
        let sortedStr = str.split('').sort().join('');
        
        // If the sorted version of the string is not already in the map, add it with an empty array
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        
        // Add the original string to the corresponding anagram group
        map.get(sortedStr).push(str);
    }

    // Convert the map's values to an array of groups and return it
    return Array.from(map.values());
}
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs)); 
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
