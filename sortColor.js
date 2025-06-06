function sortColors(nums) {
    let low = 0; // Pointer for 0
    let high = nums.length - 1; // Pointer for 2
    let current = 0; // Current pointer to traverse the array
    
    while (current <= high) {
        if (nums[current] === 0) {
            // If the current number is 0, swap it with the low pointer
            [nums[low], nums[current]] = [nums[current], nums[low]];
            low++;
            current++;
        } else if (nums[current] === 2) {
            // If the current number is 2, swap it with the high pointer
            [nums[high], nums[current]] = [nums[current], nums[high]];
            high--;
        } else {
            // If the current number is 1, just move to the next element
            current++;
        }
    }
}
const nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums); // Output: [0, 0, 1, 1, 2, 2]
