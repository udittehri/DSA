// Move all the negative elements to one side of the array 

function NegativeToOneSide(numbers) {
    let p = new Array(0)
    let n = new Array(0)

    numbers.map((edx) => {
        if (edx >= 0)
            p.push(edx)
        else
            n.push(edx)
    })

    return [...p, ...n]
}

let arr = [3, 53, -43, -54, 73, 4, -3, -64, -21, 9]

console.log(NegativeToOneSide(arr))