function numIslands(grid) {
    if (grid.length === 0) return 0;

    let rows = grid.length;
    let cols = grid[0].length;
    let count = 0;

    // Helper function to perform DFS and mark visited land
    function dfs(i, j) {
        // If the cell is out of bounds or is water ('0'), return
        if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === '0') {
            return;
        }

        // Mark the cell as visited by changing it to '0'
        grid[i][j] = '0';

        // Explore all 4 directions (up, down, left, right)
        dfs(i + 1, j); // down
        dfs(i - 1, j); // up
        dfs(i, j + 1); // right
        dfs(i, j - 1); // left
    }

    // Iterate over all cells in the grid
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {  // If land is found
                count++;  // We found a new island
                dfs(i, j);  // Mark all connected land as visited
            }
        }
    }

    return count;
}
const grid1 = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
];

console.log(numIslands(grid1)); // Output: 1

const grid2 = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
];

console.log(numIslands(grid2)); // Output: 3
