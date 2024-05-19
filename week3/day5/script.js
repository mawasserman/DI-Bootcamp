// // artigo do medium

// let counter = 0;
// function inc() { counter++; }
// for (let i = 0; i < 10; i++, inc());
// console.log(counter); // 10




// Exercise 1
// 1. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

// Sample Output: //"0 is even" //"1 is odd" //"2 is even"
// for (let i = 0; i <= 15; i++){
//     if (i % 2 ===0) { 
//         console.log(i + ' is even')
//         }
//     else { 
//         console.log(i + ' is odd')
//         }
// }

// Exercise 2
let names= ["john", "sarah", 23, "Rudolf",34]
// 1. Write a JavaScript for loop that will go through the variable names.
// for (let namei of names){
//     if (typeof namei !== 'string') {// if the item is not a string, pass.
//         continue;
//         console.log(namei)
//     }
//     else if (namei.charAt(0) !== namei.charAt(0).toUpperCase()) {
//         namei = namei.charAt(0).toUpperCase() + namei.slice(1);
//         console.log(namei);
// // if the item is a string, check if its first letter is in uppercase. If not, change it to uppercase and then display the name.

//     }
// }

// 2. Write a JavaScript for loop that will go through the variable names
for (let namei of names){
    if (typeof namei !== 'string') {// if the item is not a string, go out of the loop.
        break;
        console.log(namei)
    }
     console.log(namei);// if the item is a string, display it.
     // antes eu tinha colocado dentro de um else, mas depois vi que não precisava...
}

