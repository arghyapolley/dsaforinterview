function merge(intervals) {
    // Step 1: Sort intervals based on the starting value
    intervals.sort((a, b) => a[0] - b[0]);

    let result = [];
    
    for (let interval of intervals) {
        // If the result is empty or there's no overlap, add the interval to result
        if (result.length === 0 || result[result.length - 1][1] < interval[0]) {
            result.push(interval);
        } else {
            // There's an overlap, so we merge the intervals
            result[result.length - 1][1] = Math.max(result[result.length - 1][1], interval[1]);
        }
    }

    return result;
}
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(merge(intervals)); // Output: [[1, 6], [8, 10], [15, 18]]
