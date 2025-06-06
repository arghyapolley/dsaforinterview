function orangesRotting(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let queue = [];
    let freshOranges = 0;
    let minutes = 0;

    // Add all rotten oranges to the queue and count the fresh oranges
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            } else if (grid[i][j] === 1) {
                freshOranges++;
            }
        }
    }

    // If there are no fresh oranges, no time is needed
    if (freshOranges === 0) return 0;

    // Directions for moving up, down, left, right
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    // BFS traversal
    while (queue.length > 0) {
        let size = queue.length;
        let rottenThisRound = false;

        // Process all the rotten oranges for the current minute
        for (let i = 0; i < size; i++) {
            let [x, y] = queue.shift();

            // Try all four directions
            for (let [dx, dy] of directions) {
                let nx = x + dx;
                let ny = y + dy;

                // Check if the new position is within bounds and is a fresh orange
                if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && grid[nx][ny] === 1) {
                    // Rot the fresh orange
                    grid[nx][ny] = 2;
                    queue.push([nx, ny]);
                    freshOranges--;
                    rottenThisRound = true;
                }
            }
        }

        // If at least one orange was rotted, increment the minutes
        if (rottenThisRound) minutes++;
    }

    // If there are still fresh oranges left, return -1
    return freshOranges === 0 ? minutes : -1;
}
const grid1 = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 2]
];
console.log(orangesRotting(grid1)); // Output: 4

const grid2 = [
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 2]
];
console.log(orangesRotting(grid2)); // Output: -1

const grid3 = [
    [0, 2]
];
console.log(orangesRotting(grid3)); // Output: 0
