function numBusesToDestination(routes, source, destination) {
    if (source === destination) return 0;

    // Create a map of bus stops to the routes that go through them
    const stopToRoutes = new Map();
    for (let i = 0; i < routes.length; i++) {
        for (let stop of routes[i]) {
            if (!stopToRoutes.has(stop)) stopToRoutes.set(stop, []);
            stopToRoutes.get(stop).push(i); // store the route index for each bus stop
        }
    }

    // BFS: queue stores [current stop, number of buses taken]
    let queue = [[source, 0]];
    let visitedStops = new Set(); // visited bus stops
    let visitedRoutes = new Set(); // visited bus routes

    visitedStops.add(source);

    while (queue.length > 0) {
        const [currentStop, busesTaken] = queue.shift();

        // Explore all routes passing through the current stop
        for (let routeIndex of stopToRoutes.get(currentStop) || []) {
            if (visitedRoutes.has(routeIndex)) continue; // skip already visited routes

            visitedRoutes.add(routeIndex);

            // Explore all stops on this route
            for (let nextStop of routes[routeIndex]) {
                if (nextStop === destination) return busesTaken + 1; // found the destination
                if (!visitedStops.has(nextStop)) {
                    visitedStops.add(nextStop);
                    queue.push([nextStop, busesTaken + 1]);
                }
            }
        }
    }

    return -1; // if no path to destination is found
}
const routes = [
    [1, 2, 7],
    [3, 6, 7],
    [5, 6],
    [4, 7],
];
const source = 1;
const destination = 6;

console.log(numBusesToDestination(routes, source, destination)); // Output: 2
