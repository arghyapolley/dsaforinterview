function maxProfit(prices) {
    if (prices.length === 0) return 0; // No profit can be made if the prices array is empty

    let minPrice = prices[0]; // Initialize minPrice with the first price
    let maxProfit = 0; // Initialize maxProfit as 0

    for (let i = 1; i < prices.length; i++) {
        // Calculate the profit if selling on day i
        let profit = prices[i] - minPrice;

        // Update maxProfit if the current profit is greater
        maxProfit = Math.max(maxProfit, profit);

        // Update minPrice to the smallest price encountered so far
        minPrice = Math.min(minPrice, prices[i]);
    }

    return maxProfit;
}
const prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // Output: 5 (Buy at 1, sell at 6)

const prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2)); // Output: 0 (No profit can be made)
