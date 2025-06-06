function jobScheduling(start, end, profit) {
    // Create an array of jobs and sort them by end time
    let jobs = [];
    for (let i = 0; i < start.length; i++) {
        jobs.push([start[i], end[i], profit[i]]);
    }
    
    // Sort jobs based on end time
    jobs.sort((a, b) => a[1] - b[1]);

    // DP array to store the maximum profit at each job
    let dp = new Array(jobs.length).fill(0);
    dp[0] = jobs[0][2]; // The profit of the first job is its own profit

    // Function to find the last non-overlapping job using binary search
    function findLastNonConflict(i) {
        let left = 0;
        let right = i - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (jobs[mid][1] <= jobs[i][0]) {
                if (jobs[mid + 1][1] <= jobs[i][0]) {
                    left = mid + 1;
                } else {
                    return mid;
                }
            } else {
                right = mid - 1;
            }
        }
        return -1; // No non-overlapping job
    }

    // Fill the dp array using the recursive relation
    for (let i = 1; i < jobs.length; i++) {
        // Include the current job and find the last non-conflicting job
        let includeProfit = jobs[i][2];
        let lastNonConflict = findLastNonConflict(i);
        if (lastNonConflict !== -1) {
            includeProfit += dp[lastNonConflict];
        }

        // Exclude the current job
        dp[i] = Math.max(dp[i - 1], includeProfit);
    }

    return dp[jobs.length - 1]; // The last element in dp will have the result
}
const start = [1, 2, 4, 6, 7];
const end = [3, 5, 6, 7, 8];
const profit = [50, 10, 40, 70, 30];

console.log(jobScheduling(start, end, profit)); // Output: 120 (Jobs 1 and 4)
