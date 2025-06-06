function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    // Move the left and right pointers toward each other
    while (left < right) {
        // Calculate the area with the current left and right lines
        let area = Math.min(height[left], height[right]) * (right - left);

        // Update the maximum area
        maxArea = Math.max(maxArea, area);

        // Move the pointer pointing to the shorter line inward
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}
const height1 = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height1)); // Output: 49

const height2 = [1,1];
console.log(maxArea(height2)); // Output: 1

const height3 = [4,3,2,1,4];
console.log(maxArea(height3)); // Output: 16
