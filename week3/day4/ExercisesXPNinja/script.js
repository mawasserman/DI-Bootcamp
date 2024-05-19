// // Exercise 1 : Age Difference
// // Instruction
// // Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// // Notes: The dates are given in the format YYYY
// const yearStringA = prompt("Give me the first year (YYYY)");
// const yearStringB = prompt("Give me the second year (YYYY)");
// const yearA = Number(yearStringA);
// const yearB = Number(yearStringB);

// if(yearA > yearB){
//     const bOlder = yearA - yearB; //bOlder is the age B was when A was born
//     const year= yearA + bOlder
//     console.log("The year when the younger one is exactly half the age of the older is " + year);
// }
// else if(yearA < yearB){
//     const aOlder = yearB - yearA; //aOlder is the age A was when B was born
//     const year= yearB + aOlder
//     console.log("The year when the younger one is exactly half the age of the older is " + year);
// }
// else{
//     console.log("You are the same age");
// }



// // Exercise 2 : Zip Codes
// // Instruction
// // Harder exercise
// // Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

// // While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// // Ask the client for their zip code and console.log “success” or “error” based on the following rules.
// const zipCodeString = prompt("Please enter your zipcode");
// const arrZip = zipCodeString.split("");

// // Zip codes consists of 5 numbers
// if(arrZip.length == 5){
//     if(isNaN(zipCodeString)){ // // isNaN foi o pulo do gato
//     console.log("error not a number");
//     }
//     else{
//         console.log("success");
//     }
// }
// else{
//     console.log("error bigger than 5");
// }
// // Must only contain numbers
// // Must not contain any whitespace (spaces)
// // Must not be greater than 5 digits in length




// Exercise 3 : Secret Word
// Instruction
// Harder exercise
// Hint : Use Regular Expressions

// Prompt the user for a word and save it to a variable.
const wordUser = prompt("Give me a word")

// Delete all the vowels of the word and console.log the result.

// const noA = wordUser.replace(/a/gi, "1");
// const noE = noA.replace(/e/gi, "2");
// const noI = noE.replace(/i/gi, "3");
// const noO = noI.replace(/o/gi, "4");
// const noU = noO.replace(/u/gi, "5");

// alert(noU)

const arrWord = wordUser.toLowerCase().split("");
console.log(arrWord);
const newArr = [];

for(let i=0; i < arrWord.length; i++){
    if(arrWord[i] !== 'a' && arrWord[i] !== 'e'&& arrWord[i] !== 'i'&& arrWord[i] !== 'o'&& arrWord[i] !== 'u'){ // feito com o Dani, antes a gente tinha colocado o ou no lugar de então estavadando o statemente como true e não estava tirando as letras... 
        newArr.push(arrWord[i]);
    }
}

console.log(newArr);
const stringWord = newArr.join("");

console.log(stringWord);


// Bonus: Replace the vowels with another character and console.log the result
// a = 1
// e = 2
// i = 3
// o = 4
// u = 5
