function findCheapestPrice(n, flights, src, dst, K) {
    // Create an adjacency list for the graph
    let graph = new Map();
    for (let [u, v, cost] of flights) {
        if (!graph.has(u)) graph.set(u, []);
        graph.get(u).push([v, cost]);
    }

    // Min-heap (priority queue) for BFS
    let pq = [];
    pq.push([src, 0, 0]); // [city, current cost, stops]
    
    // To store the minimum cost to reach a city with at most k stops
    let dist = Array(n).fill(Infinity);
    dist[src] = 0;

    while (pq.length > 0) {
        let [node, cost, stops] = pq.shift();
        
        // If we reached the destination with at most K stops, return the cost
        if (node === dst) {
            return cost;
        }

        // If we have made more than K stops, stop exploring further
        if (stops > K) continue;

        // Explore neighbors
        for (let [neighbor, weight] of (graph.get(node) || [])) {
            let newCost = cost + weight;
            if (newCost < dist[neighbor]) {
                dist[neighbor] = newCost;
                pq.push([neighbor, newCost, stops + 1]);
            }
        }
    }

    return -1; // If no valid path is found
}
const n = 3; // Number of cities
const flights = [
  [0, 1, 100], // Flight from city 0 to city 1 with cost 100
  [1, 2, 100], // Flight from city 1 to city 2 with cost 100
  [0, 2, 500]  // Flight from city 0 to city 2 with cost 500
];
const src = 0; // Starting city
const dst = 2; // Destination city
const K = 1;   // Max stops

console.log(findCheapestPrice(n, flights, src, dst, K)); // Output: 200
