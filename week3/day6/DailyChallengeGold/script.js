// Instructions
// // const numbers = [5,0,9,1,7,4,2,6,3,8];

// // Using the .toString() method convert the array to a string.
// const numbersString = numbers.toString();

// // Using the .join()method convert the array to a string. Try passing different values into the join.
// const numbersJoinComma = numbers.join(", ");
// const numbersJoinPlus = numbers.join("+");
// const numbersJoinSpace = numbers.join(" ");
// const numbersJoinTogether = numbers.join("");

// console.log(`${numbersString}
// ${numbersJoinComma}
// ${numbersJoinPlus}
// ${numbersJoinSpace}
// ${numbersJoinTogether}`);
// // Eg .join(“+”), .join(” “), .join(“”)

// Bonus : To do this Bonus look up how to work with nested for loops
// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
// The output should be: [9,8,7,6,5,4,3,2,1,0]
// Hint: The algorithm is called “Bubble Sort”
// Use a temporary variable to swap values in the array.
// Use 2 “nested” for loops (Nested means one inside the other).
// Add comments and console.log the result for each step, this will help you understand.
// Requirement: Don’t copy paste solutions from Google
const numbers = [5,0,9,1,7,4,2,6,3,8];

// for(let j=0; j < numbers.length; j++){
//     console.log("comparing " + numbers[j]);
//     for(let i=0; i < numbers.length; i++){
//         console.log("the i " + numbers[i]);
//         if((numbers[i] < numbers[i+1])){
//             let temp = numbers[i];
//             numbers[i] = numbers[i+1];
//             numbers[i+1] = temp;
//         }
//     }
// }
// console.log(numbers);

// I DID IT AND I CAN'T BELIEVE! I DON'T EVEN KNOW HOW I DID IT!

function manualSortAscending(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}