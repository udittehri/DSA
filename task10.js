// Minimum number of jumps

let arr = [2, 3, 1, 1, 2, 4, 2, 0, 1]
function minJumps() {

    let mainIndex = 0
    let totalJumps = 0

    while (mainIndex < arr.length) {

        let maxJumpIndex = -1
        for (let jumps = 1; jumps <= arr[mainIndex]; jumps++) {

            if (maxJumpIndex == -1 || arr[mainIndex + jumps] > arr[maxJumpIndex]) {
                maxJumpIndex = jumps + mainIndex
            }
            if (mainIndex + jumps >= arr.length - 1) {
                return totalJumps + 1

            }
        }

        mainIndex = maxJumpIndex
        totalJumps++

    }

    return totalJumps
}


console.log(minJumps(arr))
