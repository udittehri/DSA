// Find the "Kth" min element of an array 

function findKthSmallest(params, k) {
    return params.sort()[k - 1]

}



let numbers = new Array(5)
numbers = [87, 12, 32, 24, 35, 15, 43]
let k = 2

console.log(k, "th Smallest number is ", findKthSmallest(numbers, k))