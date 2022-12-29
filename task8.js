// Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.

function findPairs(arr) {

    let addition = arr[0]
    arr.map((edx, i) => {
        let big = 0
        for (let j = i; j < arr.length; j++) {
            big += arr[j]
            if (big > addition) addition = big
        }


    })

    return addition

}

let a = [-1, -2, -3, -2, -5]

console.log(findPairs(a))