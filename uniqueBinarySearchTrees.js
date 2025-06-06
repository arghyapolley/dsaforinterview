function numTrees(n) {
    let dp = new Array(n + 1).fill(0);
    dp[0] = dp[1] = 1; // Base cases: 1 way to make a tree with 0 or 1 node

    // Fill the dp array using the recursive formula
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] += dp[j - 1] * dp[i - j]; // dp[i] is the sum of dp[j-1] * dp[i-j]
        }
    }

    return dp[n]; // The result for n nodes is stored in dp[n]
}
console.log(numTrees(3)); // Output: 5
console.log(numTrees(4)); // Output: 14
console.log(numTrees(5)); // Output: 42
