towers = [2, 6, 3, 4, 7, 2, 10, 3, 2, 1]
k = 5


def findDifference(t, k):
    t.sort()

    print(t)
    return (t[len(t) - 1] - k) - (t[0]+k)


print(findDifference(towers, k))
