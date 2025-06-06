// The isBadVersion API is provided for you.
var isBadVersion = function(version) {
    // Assume this function is implemented elsewhere and returns 
    // true if the version is bad and false otherwise.
};

function firstBadVersion(n) {
    let left = 1;
    let right = n;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        if (isBadVersion(mid)) {
            right = mid; // If mid is bad, the first bad version is at mid or before it
        } else {
            left = mid + 1; // If mid is good, the first bad version is after mid
        }
    }

    return left; // After the loop, left points to the first bad version
}
// Assuming the isBadVersion function is defined correctly
// and returns true for bad versions starting from a certain version.
console.log(firstBadVersion(5)); // Suppose the first bad version is 4, it will return 4
