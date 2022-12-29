// Find Union of Two Array A B

function FindUnion(a, b) {
    let s = new Set()
    let arr = [...a, ...b]

    // console.log(arr)

    arr.map(edx => s.add(edx))
    // console.log(s)
    return s.size
}

const arr1 = [12, 234, 25, 2234]
const arr2 = [23, 314, 351, 2234]

console.log(FindUnion(arr1, arr2))
