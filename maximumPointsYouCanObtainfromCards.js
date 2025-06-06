function maxScore(cards, k) {
    const n = cards.length;
    
    // Calculate the sum of the first 'k' cards
    let currentSum = 0;
    for (let i = 0; i < k; i++) {
        currentSum += cards[i];
    }

    let maxSum = currentSum; // Initialize maxSum with the first 'k' cards' sum

    // Start sliding the window: remove from the start and add from the end
    for (let i = 0; i < k; i++) {
        currentSum -= cards[k - 1 - i]; // Remove the card from the end of the previous window
        currentSum += cards[n - 1 - i]; // Add the card from the new end of the array
        maxSum = Math.max(maxSum, currentSum); // Track the maximum sum
    }

    return maxSum;
}
const cards1 = [1, 2, 3, 4, 5, 6, 1];
const k1 = 3;
console.log(maxScore(cards1, k1)); // Output: 12 (Take [5, 6, 1])

const cards2 = [2, 2, 2];
const k2 = 2;
console.log(maxScore(cards2, k2)); // Output: 4 (Take [2, 2])

const cards3 = [9, 7, 8, 3, 2, 4, 6];
const k3 = 4;
console.log(maxScore(cards3, k3)); // Output: 23 (Take [9, 7, 8, 3])
