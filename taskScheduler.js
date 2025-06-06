function leastInterval(tasks, n) {
    // Count the frequencies of each task
    let taskCount = new Map();
    for (let task of tasks) {
        taskCount.set(task, (taskCount.get(task) || 0) + 1);
    }
    
    // Create a max-heap based on task frequency
    let maxHeap = [];
    for (let [task, count] of taskCount) {
        maxHeap.push([-count, task]); // Use negative count for max-heap
    }
    maxHeap.sort((a, b) => a[0] - b[0]); // Sort in descending order of task frequency

    let time = 0;
    let queue = []; // A queue to keep track of tasks in the cooldown period
    
    while (maxHeap.length > 0 || queue.length > 0) {
        time++;
        
        // If there is any task in the max heap, pop the task with the highest frequency
        if (maxHeap.length > 0) {
            let [count, task] = maxHeap.pop();
            if (count < -1) {
                queue.push([count + 1, task, time + n]); // Add back to the queue with the next available time
            }
        }
        
        // Move tasks from the queue to the max heap if their cooldown period is over
        for (let i = 0; i < queue.length; i++) {
            let [count, task, nextAvailableTime] = queue[i];
            if (nextAvailableTime <= time) {
                maxHeap.push([count, task]);
                queue.splice(i, 1);
                i--;
            }
        }
        
        // Re-sort the heap to maintain the max-heap property
        maxHeap.sort((a, b) => a[0] - b[0]);
    }

    return time;
}
const tasks = ['A', 'A', 'A', 'B', 'B', 'B'];
const n = 2;

console.log(leastInterval(tasks, n)); // Output: 8
