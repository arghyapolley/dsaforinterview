class RandomizedSet {
    constructor() {
        this.map = new Map(); // Hash map to store the value -> index
        this.list = []; // Array to store the values
    }

    // Insert a value into the set
    insert(val) {
        if (this.map.has(val)) {
            return false; // If the value already exists, do nothing
        }
        this.list.push(val); // Add the value to the list
        this.map.set(val, this.list.length - 1); // Store the index of the value in the map
        return true;
    }

    // Delete a value from the set
    delete(val) {
        if (!this.map.has(val)) {
            return false; // If the value doesn't exist, do nothing
        }

        // Get the index of the value to be deleted
        const index = this.map.get(val);
        
        // Move the last element to the index of the deleted element
        const lastElement = this.list[this.list.length - 1];
        this.list[index] = lastElement;
        this.map.set(lastElement, index); // Update the index of the last element

        // Remove the last element from the list
        this.list.pop();
        this.map.delete(val); // Remove the value from the map
        return true;
    }

    // Get a random element from the set
    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.list.length);
        return this.list[randomIndex]; // Return a random element from the list
    }
}
let obj = new RandomizedSet();
console.log(obj.insert(1)); // Output: true
console.log(obj.insert(2)); // Output: true
console.log(obj.insert(2)); // Output: false (2 already exists)
console.log(obj.delete(1)); // Output: true
console.log(obj.getRandom()); // Output: 2 (since 1 was deleted and only 2 is left)
