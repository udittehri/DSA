
// Cyclically rotate an array by one
function moveOneCircular(arr) {

    let i = arr[arr.length - 1]

    let j = arr.pop();

    return [i, ...arr]

}


let array = [2, 45, 34, 3, 12];

console.log(moveOneCircular(array))
