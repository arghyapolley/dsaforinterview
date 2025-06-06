function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;

    let dp = new Array(nums.length).fill(1); // Initialize dp array with 1 (each element is an increasing subsequence of length 1)

    // Loop through the array
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            // If nums[i] is greater than nums[j], we can extend the subsequence ending at j
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    // The length of the longest increasing subsequence will be the maximum value in dp
    return Math.max(...dp);
}
const nums1 = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums1)); // Output: 4 (The LIS is [2, 3, 7, 101])

const nums2 = [0, 1, 0, 3, 2, 3];
console.log(lengthOfLIS(nums2)); // Output: 4 (The LIS is [0, 1, 2, 3])
