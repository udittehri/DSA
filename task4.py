
# Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo

def sort012(numbers):
    zeros = []
    ones = []
    twos = []

    for i in numbers:
        if (i == 0):
            zeros.append(i)
        elif (i == 1):
            ones.append(i)
        elif (i == 2):
            twos.append(i)

    return zeros + ones + twos


numbers = [0, 1, 2, 1, 1, 1, 2, 0, 0, 2]

print(sort012(numbers))
