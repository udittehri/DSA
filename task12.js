let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]

// intervals.forEach((edx) => {

//     console.log(edx)
// })
let finalIntervals = []
for (let i = 0; i < intervals.length; i++) {
    if (i == 0) {
        finalIntervals.push(intervals[i])
        continue;
    }
    if (finalIntervals[finalIntervals.length - 1][1] > intervals[i][0]) {

        let num1 = finalIntervals[finalIntervals.length - 1][0] < intervals[i][0] ? finalIntervals[finalIntervals.length - 1][0] : intervals[i][0]
        let num2 = finalIntervals[finalIntervals.length - 1][1] < intervals[i][1] ? finalIntervals[finalIntervals.length - 1][1] : intervals[i][1]

        finalIntervals.splice(finalIntervals.length - 1, 1, [num1, num2])

    }
    else {
        finalIntervals.push(intervals[i])
    }
}

console.log("Finals Last Element : ", finalIntervals)
