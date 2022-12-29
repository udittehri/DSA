#  Find the "Kth" min element of an array

def findkthMinimum(numbers, k):

    numbers.sort()
    print(numbers)
    return numbers[k-1]


numbers = [1, 43, 24, 124, 35]
k = 3
print(k, "Minimum number is ", findkthMinimum(numbers, k))
