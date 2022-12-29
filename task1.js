// Write a program to reverse an array or string



function reverseString(string) {
    //     let str = "ABC"
    // lenght 3 
    // index 2 
    let reversedString = ""
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }

    return reversedString

}


let string = [1, 2, 3]


console.log("Your Output ", reverseString(string))
