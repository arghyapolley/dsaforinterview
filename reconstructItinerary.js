function findItinerary(tickets) {
    let adjList = new Map();

    // Step 1: Build the adjacency list (graph)
    for (let [from, to] of tickets) {
        if (!adjList.has(from)) adjList.set(from, []);
        adjList.get(from).push(to);
    }

    // Step 2: Sort each adjacency list in lexicographical order
    for (let key of adjList.keys()) {
        adjList.get(key).sort();
    }

    let result = [];

    // Step 3: Depth First Search (DFS) to reconstruct the itinerary
    function dfs(airport) {
        let destinations = adjList.get(airport);
        while (destinations && destinations.length > 0) {
            let nextAirport = destinations.shift(); // Get the lexicographically smallest destination
            dfs(nextAirport); // Recursively visit the next airport
        }
        result.unshift(airport); // Add the airport to the itinerary
    }

    // Step 4: Start DFS from "JFK"
    dfs("JFK");

    return result;
}
const tickets1 = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]];
console.log(findItinerary(tickets1));
// Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]

const tickets2 = [["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]];
console.log(findItinerary(tickets2));
// Output: ["JFK", "ATL", "JFK", "SFO", "ATL", "SFO"]
