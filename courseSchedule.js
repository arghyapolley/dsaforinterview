function canFinish(numCourses, prerequisites) {
    // Step 1: Create an adjacency list to represent the graph
    let graph = new Array(numCourses).fill().map(() => []);
    let visited = new Array(numCourses).fill(0); // 0 = unvisited, 1 = visiting, 2 = visited

    // Step 2: Build the graph based on prerequisites
    for (let [course, prerequisite] of prerequisites) {
        graph[prerequisite].push(course);
    }

    // Step 3: Perform DFS to check for cycles
    function dfs(course) {
        // If the course is being visited, we found a cycle
        if (visited[course] === 1) {
            return false;
        }

        // If the course has been visited, no need to check again
        if (visited[course] === 2) {
            return true;
        }

        // Mark the course as visiting (part of the current DFS path)
        visited[course] = 1;

        // Visit all the neighboring courses (prerequisites for this course)
        for (let nextCourse of graph[course]) {
            if (!dfs(nextCourse)) {
                return false; // If any neighbor leads to a cycle, return false
            }
        }

        // Mark the course as visited (no cycles found from this course)
        visited[course] = 2;
        return true;
    }

    // Step 4: Check all courses
    for (let i = 0; i < numCourses; i++) {
        if (visited[i] === 0) { // If the course is unvisited, perform DFS
            if (!dfs(i)) {
                return false; // If a cycle is detected, return false
            }
        }
    }

    return true; // No cycles found, all courses can be finished
}
const numCourses = 2;
const prerequisites = [[1, 0]]; // To take course 1, you need to complete course 0
console.log(canFinish(numCourses, prerequisites)); // Output: true

const numCourses2 = 2;
const prerequisites2 = [[1, 0], [0, 1]]; // Course 1 depends on course 0 and vice versa, creating a cycle
console.log(canFinish(numCourses2, prerequisites2)); // Output: false
