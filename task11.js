
function mergeSortedArr(a1, a2) {

    let index = 0
    for (let edx = 0; edx < a1.length + a2.length; edx++) {

        if (a1[+edx + 1] && (a1[edx] <= a2[index] && a1[+edx + 1] >= a2[index])) {
            a1.splice(edx + 1, 0, a2[index]);
            index++;
        }

    }
    let s = a2.splice(0, index)
    return [...a1, ...a2]

}


let arr1 = [1, 23, 67, 99, 100]
let arr2 = [2, 23, 87, 98, 123, 190]


console.log(mergeSortedArr(arr1, arr2))