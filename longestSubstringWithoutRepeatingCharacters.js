function lengthOfLongestSubstring(s) {
    let map = new Map();  // To store the last index of each character
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // If the character is in the map and its index is >= left, move the left pointer
        if (map.has(char) && map.get(char) >= left) {
            left = map.get(char) + 1;  // Move left pointer just past the last occurrence
        }

        // Update the last index of the character
        map.set(char, right);

        // Calculate the current length of the substring
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
const str1 = "abcabcbb";
console.log(lengthOfLongestSubstring(str1)); // Output: 3 ("abc")

const str2 = "bbbbb";
console.log(lengthOfLongestSubstring(str2)); // Output: 1 ("b")

const str3 = "pwwkew";
console.log(lengthOfLongestSubstring(str3)); // Output: 3 ("wke")
