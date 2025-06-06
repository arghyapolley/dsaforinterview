function maxSlidingWindow(nums, k) {
    let result = [];
    let deque = []; // Will store indices of nums array elements
    
    for (let i = 0; i < nums.length; i++) {
        // Remove indices of elements that are out of the current window
        if (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }

        // Remove elements from the deque that are smaller than the current element
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // Add the current element index to the deque
        deque.push(i);

        // If we've processed at least k elements, the front of the deque is the maximum for the current window
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}
const nums1 = [1,3,-1,-3,5,3,6,7];
const k1 = 3;
console.log(maxSlidingWindow(nums1, k1)); // Output: [3,3,5,5,6,7]

const nums2 = [1];
const k2 = 1;
console.log(maxSlidingWindow(nums2, k2)); // Output: [1]
