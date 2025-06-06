function subarraySum(nums, k) {
    let sumCount = new Map();
    sumCount.set(0, 1); // Initialize with sum 0, count 1 (for the case when the sum equals k at the start)
    let currentSum = 0;
    let result = 0;

    for (let num of nums) {
        currentSum += num; // Update the current sum
        // If (currentSum - k) is in the map, it means there is a subarray that sums to k
        if (sumCount.has(currentSum - k)) {
            result += sumCount.get(currentSum - k); // Add the count of such subarrays to the result
        }
        // Update the count of the current sum in the map
        sumCount.set(currentSum, (sumCount.get(currentSum) || 0) + 1);
    }

    return result;
}
const nums1 = [1, 1, 1];
const k1 = 2;
console.log(subarraySum(nums1, k1)); // Output: 2 (Subarrays: [1, 1], [1, 1])

const nums2 = [1, 2, 3];
const k2 = 3;
console.log(subarraySum(nums2, k2)); // Output: 2 (Subarrays: [3], [1, 2])
