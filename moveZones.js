function moveZeroes(nums) {
    let i = 0; // Pointer to track the position of the next non-zero element.

    // Iterate through the array with pointer j.
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== 0) {
            // Swap non-zero element with the element at position i
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++; // Move pointer i to the next position
        }
    }
}
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]
