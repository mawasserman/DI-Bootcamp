// Exercise 1 : Evaluation
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// Evaluate the comparisons found below:

// // Look at this link for help http://sticksandstones.kstrom.com/appen.html

// console.log(5 >= 1) //true
// console.log(0 === 1) //false
// console.log(4 <= 1) //false
// console.log(1 != 1) //false
// console.log("A" > "B") //false
// console.log("B" < "C") //true
// console.log("a" > "A") //true
// console.log("b" < "A") //false
// console.log(true === false) //false
// console.log(true != true) //false


// // Exercise 2 : Ask For Numbers
// // Instructions
// // Ask the user for a string of numbers separated by commas
// let strNum = prompt ("Give me two numbers separated by commas")
// // Console.log the sum of the numbers.
// let arrNum = strNum.split(",")
// let num1 = arrNum[0]
// let num2 = arrNum[1]
// let sum = Number(num1) + Number (num2)
// console.log(sum)
// // Hint: use some string methods
// // Examples
// // "2,3"➞ 5


// Exercise 3 : Find Nemo
// Instructions
// Hint: if statement (tomorrow’s lesson)

// // Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
// const nemoSentence = prompt("Give me a sentence with the word 'Nemo'")
// const nemoStr = nemoSentence.toLowerCase().split(" ")
// // Find the word “Nemo”
// // const nemoIndex = nemoSentence.indexOf("Nemo")
// //IMPORTANTE!!! ASSIM SO VAI ACHAR NEMO COM O N MAIUSCULO, O IDEAL SERIA ESCREVER --- .toLowerCase() em algum lugar
// const nemoIndex = nemoStr.indexOf('nemo')
// // o .toLowerCase vai ser capaz de achar todas as opções de nemo.. até um possivel NeMo ou nEmO...


// // Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
// if (nemoIndex !== -1){
//     console.log("I found Nemo at " + nemoIndex)
// }else {
//     console.log("I can’t find Nemo")
// }

// If you can’t find Nemo, console.log “I can’t find Nemo”.
// Some examples:

//     "I love the movie named Nemo" ➞ "I found Nemo at 5"
//     "Nemo is a cute fish" ➞ "I found Nemo at 0"
//     "My fish is called Nemo, I love it" ➞ "I found Nemo at 4"


// Exercise 4 : Boom
// Instructions
// Hint: if statement (tomorrow’s lesson)

// Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:
function boom(){
const inputUser = prompt("Give me a number");
let numUser = Number(inputUser);

    // If the number given is less than 2 : return “boom”
    if (numUser <= 2){
        alert("boom");
    }

    // If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
    else{
        let newBoom = ["b", "m"];
        for(let i = 0; i < numUser; i++){
            newBoom.splice(1, 0, "o");
        }
        if (numUser%2 == 0){
            newBoom.push("!");            
        }    
        let stringBoom = newBoom.join(""); 
        if (numUser%5 == 0){
            alert(stringBoom.toUpperCase());
        }else{
            alert(stringBoom);
        }
        
    }
}
    // If the number given is evenly divisible by 2, add a exclamation mark to the end.
 
// If the number given is evenly divisible by 5, return the string in ALL CAPS.

// If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.

// Examples
// 4 ➞ "Boooom!"
// // There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)
// 1 ➞ "boom"
// // 1 is lower than 2, so we return "boom"