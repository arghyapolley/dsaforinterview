function mergeIntervals(intervals) {
    if (!Array.isArray(intervals)) throw new Error("Input must be an array");
    if (intervals.length <= 1) return intervals;
  
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [intervals[0]];
  
    for (let i = 1; i < intervals.length; i++) {
      const [prevStart, prevEnd] = merged[merged.length - 1];
      const [currStart, currEnd] = intervals[i];
  
      if (currStart <= prevEnd) {
        merged[merged.length - 1][1] = Math.max(prevEnd, currEnd);
      } else {
        merged.push([currStart, currEnd]);
      }
    }
  
    return merged;
  }
  
  console.log("Merging Intervals:", mergeIntervals([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]
  console.log("Edge Case Empty:", mergeIntervals([])); // []
  console.log("Edge Case Single:", mergeIntervals([[1,2]])); // [[1,2]]