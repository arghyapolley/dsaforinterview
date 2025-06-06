function jump(nums) {
    let jumps = 0; // Number of jumps
    let current_end = 0; // The furthest index we can reach with the current jump
    let farthest = 0; // The furthest index we can reach with the next jump
    
    for (let i = 0; i < nums.length - 1; i++) {
        // Update the farthest point that can be reached from index i
        farthest = Math.max(farthest, i + nums[i]);
        
        // If we reach the end of the current jump range, we need to make another jump
        if (i === current_end) {
            jumps++;
            current_end = farthest; // Update the current_end to the farthest point
        }
    }
    
    return jumps;
}
const nums = [2, 3, 1, 1, 4];
console.log(jump(nums)); // Output: 2

const nums2 = [1, 2, 3, 4, 5];
console.log(jump(nums2)); // Output: 3
