function combinationSum(candidates, target) {
    let result = [];

    // Helper function for backtracking
    function backtrack(start, target, currentCombination) {
        // Base case: if target becomes 0, we've found a valid combination
        if (target === 0) {
            result.push([...currentCombination]);
            return;
        }

        // Explore the candidates from the 'start' index to avoid duplicates
        for (let i = start; i < candidates.length; i++) {
            let candidate = candidates[i];

            // If the current candidate is greater than the target, no need to continue
            if (candidate > target) continue;

            // Add the candidate to the current combination
            currentCombination.push(candidate);

            // Recursively try to build the sum with the current candidate
            backtrack(i, target - candidate, currentCombination);

            // Backtrack: remove the last added candidate
            currentCombination.pop();
        }
    }

    // Start the backtracking with an empty combination
    backtrack(0, target, []);
    
    return result;
}
const candidates = [2, 3, 6, 7];
const target = 7;
console.log(combinationSum(candidates, target)); 
// Output: [[2, 2, 3], [7]]
