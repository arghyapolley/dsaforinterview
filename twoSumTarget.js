function twoSum(nums, target) {
    const map = new Map(); // To store the numbers we have seen so far

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Find the number we need to add up to the target

        if (map.has(complement)) {
            return [map.get(complement), i]; // If the complement exists in the map, return the indices
        }

        map.set(nums[i], i); // Otherwise, store the number and its index
    }

    return []; // If no solution is found (though it's assumed there's always a solution)
}
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]
