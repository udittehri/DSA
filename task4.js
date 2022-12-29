

// Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo

function sort012(params) {

    let zeros = []
    let ones = []
    let twos = []

    params.map((edx) => {
        switch (edx) {
            case 0:
                zeros.push(edx)
                break;
            case 1:
                ones.push(edx)
                break;
            case 2:
                twos.push(edx)
                break;
            default:
                break;
        }
    })

    return [...zeros, ...ones, ...twos]

}

let arr = [0, 1, 2, 1, 1, 1, 2, 0, 0, 2]
console.log(sort012(arr))