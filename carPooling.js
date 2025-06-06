function carPooling(trips, capacity) {
    // Create an array to track passenger changes at each stop
    let stops = [];
    
    // Record the number of passengers getting on and off at each stop
    for (let [numPassengers, start, end] of trips) {
        stops.push([start, numPassengers]); // Passengers pick up at 'start'
        stops.push([end, -numPassengers]); // Passengers drop off at 'end'
    }
    
    // Sort the stops by the stop location
    stops.sort((a, b) => a[0] - b[0]);
    
    let currentPassengers = 0;
    
    // Traverse through all the stops and keep track of the number of passengers
    for (let [location, passengersChange] of stops) {
        currentPassengers += passengersChange;
        if (currentPassengers > capacity) {
            return false; // If at any point passengers exceed capacity, return false
        }
    }
    
    return true; // If we can accommodate all trips without exceeding capacity
}
const trips = [
    [2, 1, 5], // 2 passengers from stop 1 to stop 5
    [3, 3, 7], // 3 passengers from stop 3 to stop 7
    [2, 5, 8], // 2 passengers from stop 5 to stop 8
];
const capacity = 5;

console.log(carPooling(trips, capacity)); // Output: true

const capacity2 = 4;
console.log(carPooling(trips, capacity2)); // Output: false
