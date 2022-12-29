let towers = [3, 9, 12, 16, 20];

let maxTower = towers.length
let k = 3

// Given an array arr[] denoting heights of N towers and a positive integer K.

// For each tower, you must perform exactly one of the following operations exactly once.

// Increase the height of the tower by K
// Decrease the height of the tower by K
// Find out the minimum possible difference between the height of the shortest and tallest towers after you have modified each tower.

// Note: It is compulsory to increase or decrease the height by K for each tower. After the operation, the resultant array should not contain any negative integers.


// Input:
// K = 2, N = 4
// Arr[] = {1, 5, 8, 10}
// Output:
// 5
// Explanation:
// The array can be modified as 
// {3, 3, 6, 8}. The difference between 
// the largest and the smallest is 8-3 = 5.


























function findDifference(arr, n, k) {
    //code here
    arr.sort((a, b) => (a - b))
    let ans = arr[n - 1] - arr[0];

    let tempmin, tempmax;
    tempmin = arr[0];
    tempmax = arr[n - 1];

    for (let i = 1; i < n; i++) {
        tempmin = Math.min(arr[0] + k, arr[i] - k);
        tempmax = Math.max(arr[i - 1] + k, arr[n - 1] - k);

        ans = Math.min(ans, tempmax - tempmin);
    }
    return ans;
}


console.log(findDifference(towers, maxTower, k))