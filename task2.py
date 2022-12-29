
# Maximum and minimum of an array

def findMinMax(arr):
    print(min(arr))
    print(max(arr))
    print("--------------------------------")

    minValue = arr[0]
    maxValue = arr[0]

    for i in range(len(arr)):
        if (minValue > arr[i]):
            minValue = arr[i]
        elif (maxValue < arr[i]):
            maxValue = arr[i]

    print(minValue)
    print(maxValue)


arr = [1, 4, 534, 234, -1]

findMinMax(arr)
