// Maximum and minimum of an array

function getMinMax(arr) {

    let minMax = {
        min: arr[0],
        max: arr[0]
    }
    arr.map((edx) => {
        if (minMax.min > edx) {
            minMax.min = edx
        }
        else if (minMax.max < edx) {
            minMax.max = edx
        }
    })

    return minMax


}


let arr = [-1, -223, 23, 53, 12, 4, 9]

let minMax = getMinMax(arr);

console.log("Minimum Value is " + minMax.min)
console.log("Maximum Value is " + minMax.max)


