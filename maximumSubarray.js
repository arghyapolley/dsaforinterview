function maxSubArray(nums) {
    let currentMax = nums[0]; // Start with the first element
    let globalMax = nums[0];  // Start with the first element as the initial global max

    // Iterate through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // Update currentMax: either the current element itself or extending the previous subarray
        currentMax = Math.max(nums[i], currentMax + nums[i]);

        // Update globalMax to keep track of the maximum sum so far
        globalMax = Math.max(globalMax, currentMax);
    }

    return globalMax; // Return the largest sum found
}
const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums1)); // Output: 6 (Subarray: [4, -1, 2, 1])

const nums2 = [1];
console.log(maxSubArray(nums2)); // Output: 1

const nums3 = [5, 4, -1, 7, 8];
console.log(maxSubArray(nums3)); // Output: 23 (Subarray: [5, 4, -1, 7, 8])
