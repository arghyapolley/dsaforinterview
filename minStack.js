class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    // Pushes the value onto the stack.
    push(val) {
        this.stack.push(val);
        
        // If minStack is empty or the new value is smaller than the current minimum, push it onto minStack.
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    // Removes the element on the top of the stack.
    pop() {
        const poppedValue = this.stack.pop();
        
        // If the popped value is the same as the top of the minStack, pop it from minStack too.
        if (poppedValue === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    // Get the top element of the stack.
    top() {
        return this.stack[this.stack.length - 1];
    }

    // Retrieve the minimum element in the stack.
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
const minStack = new MinStack();
minStack.push(5);
minStack.push(3);
minStack.push(7);
console.log(minStack.getMin()); // Output: 3
minStack.pop();
console.log(minStack.getMin()); // Output: 3
minStack.pop();
console.log(minStack.getMin()); // Output: 5
