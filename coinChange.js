function coinChange(amount, coins) {
    // dp[i] will store the number of ways to make up amount i
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1; // There is one way to make amount 0, by using no coins.

    // Iterate through each coin
    for (let coin of coins) {
        // Update the dp array for all amounts from coin to amount
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    }

    return dp[amount]; // The answer is the number of ways to make up the given amount
}
const amount = 5;
const coins = [1, 2, 5];

console.log(coinChange(amount, coins)); // Output: 4
