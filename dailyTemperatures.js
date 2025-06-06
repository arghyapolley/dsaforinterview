function dailyTemperatures(temperatures) {
    let n = temperatures.length;
    let result = new Array(n).fill(0); // Initialize result array with 0s
    let stack = []; // Stack to store indices of temperatures

    for (let i = 0; i < n; i++) {
        // While the stack is not empty and the current temperature is greater than the one at the top of the stack
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let idx = stack.pop(); // Pop the index from the stack
            result[idx] = i - idx; // Calculate the number of days until a warmer temperature
        }
        stack.push(i); // Push the current index onto the stack
    }

    return result; // Return the result array
}
const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures)); 
// Output: [1, 1, 4, 2, 1, 1, 0, 0]
