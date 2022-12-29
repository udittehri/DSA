# Move all the negative elements to one side of the array

def moveNegatives(nums):
    n = []
    p = []
    for i in nums:
        if (i < 0):
            n.append(i)
        else:
            p.append(i)

    # print(n, "---", p)

    return n+p


numbers = [23, 42, 34, -23, -423, 4, 23, -4, ]

print(moveNegatives(numbers))
