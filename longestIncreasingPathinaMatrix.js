function longestIncreasingPath(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) return 0;
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    const dp = Array.from({ length: rows }, () => Array(cols).fill(-1)); // Memoization table
    
    // Directions: up, down, left, right
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    // Helper function for DFS with memoization
    function dfs(x, y) {
        if (dp[x][y] !== -1) return dp[x][y]; // Return the cached result if already computed

        let maxLength = 1; // The shortest path length is 1 (the cell itself)

        // Explore all 4 possible directions
        for (let [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            // Check if the new position is within bounds and the value is greater
            if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && matrix[newX][newY] > matrix[x][y]) {
                maxLength = Math.max(maxLength, 1 + dfs(newX, newY));
            }
        }

        dp[x][y] = maxLength; // Cache the result
        return dp[x][y];
    }

    let result = 0;

    // Try starting from each cell in the matrix
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result = Math.max(result, dfs(i, j));
        }
    }

    return result;
}
const matrix1 = [
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1]
];
console.log(longestIncreasingPath(matrix1)); // Output: 4 (The longest path is [1, 2, 6, 9])

const matrix2 = [
    [3, 4, 5],
    [3, 2, 6],
    [2, 2, 1]
];
console.log(longestIncreasingPath(matrix2)); // Output: 4 (The longest path is [3, 4, 5, 6])
