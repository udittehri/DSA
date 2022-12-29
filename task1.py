# Write a program to reverse an array or string



def reverseList (A, start, end):
    while start < end:
        A[start], A[end] = A[end],A[start]
        start += 1
        end -= 1
    
    return A

    # reversed =""
    # # print(A)
    # for edx in range(len(A)-1 , -1, -1 ):
    #     # print(A[edx])
    #     reversed += str(A[edx])
    # return reversed


A = [11,22,33,44]
# A = "I am new to python"
print (reverseList(A, 0, 3))