function furthestBuilding(heights, bricks, ladders) {
    const minHeap = []; // Min-heap to store the height differences we used bricks for

    for (let i = 0; i < heights.length - 1; i++) {
        const diff = heights[i + 1] - heights[i];
        
        if (diff > 0) { // If the next building is higher than the current building
            // Use bricks if the difference is less than or equal to available bricks
            if (bricks >= diff) {
                bricks -= diff; // Subtract bricks
                minHeap.push(diff); // Add this difference to the heap (using bricks for this height)
                minHeap.sort((a, b) => a - b); // Keep the min-heap sorted (smallest element at the top)
            } else if (ladders > 0) { // If we don't have enough bricks, use a ladder if available
                ladders--;
                // Instead of using bricks for this large difference, replace the smallest brick usage in the heap with a ladder
                if (minHeap.length > 0 && minHeap[0] < diff) {
                    bricks += minHeap.shift(); // Retrieve the smallest brick usage and add it back to bricks
                    minHeap.push(diff); // Now use a ladder for this large height difference
                    minHeap.sort((a, b) => a - b); // Maintain the heap sorted
                }
            } else {
                // If we can't use bricks or ladders, we stop here
                return i;
            }
        }
    }

    return heights.length - 1; // If we managed to reach the last building
}
const heights1 = [1, 3, 2, 4, 1, 5];
const bricks1 = 4;
const ladders1 = 1;
console.log(furthestBuilding(heights1, bricks1, ladders1)); // Output: 4

const heights2 = [1, 2, 3, 4];
const bricks2 = 0;
const ladders2 = 1;
console.log(furthestBuilding(heights2, bricks2, ladders2)); // Output: 3
