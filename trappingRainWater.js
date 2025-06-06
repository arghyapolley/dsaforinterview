function trap(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let waterTrapped = 0;

    while (left <= right) {
        if (height[left] <= height[right]) {
            // Process the left pointer
            if (height[left] >= leftMax) {
                leftMax = height[left]; // Update the leftMax
            } else {
                waterTrapped += leftMax - height[left]; // Water trapped at this position
            }
            left++;
        } else {
            // Process the right pointer
            if (height[right] >= rightMax) {
                rightMax = height[right]; // Update the rightMax
            } else {
                waterTrapped += rightMax - height[right]; // Water trapped at this position
            }
            right--;
        }
    }

    return waterTrapped;
}
const height1 = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(height1)); // Output: 6

const height2 = [4,2,0,3,2,5];
console.log(trap(height2)); // Output: 9
