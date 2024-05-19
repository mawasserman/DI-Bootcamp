// Exercise 1 : Favorite Color
// Instructions
let sentence = ["my","favorite","color","is","blue"];
// Write some simple Javascript code that will join all the items in the array above, and console.log the result.
let sentenceString = sentence.toString();
console.log(sentenceString);
let prettyString = sentenceString.replace(/,/g, " ");
console.log(prettyString);

// Exercise 2 : Mixup
// Instructions
// Create 2 variables. The values should be strings. 
let str1 = "Harry";
let str2 = "Potter";

// 2. Slice out and swap the first 2 characters of the two strings from part 1.
let twoSrt1 = str1.substring(0,2);
let twoSrt2 = str2.substring(0,2);
let restStr1 = str1.slice(2);
let restStr2 = str2.slice(2);
let newStr1 = twoSrt2 + restStr1;
let newStr2 = twoSrt1 + restStr2;

// 3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
let finalString = newStr1 + " " + newStr2;

// 4. Finally console.log the new concatenated string.
console.log(finalString);

// Exercise 3 : Calculator
// Instructions
// Make a Calculator. Follow the instructions:

// Prompt the user for the first number.
// Store the first number in a variable called num1.
// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
let num1 = prompt("Give me a number");

// Prompt the user for the second number.
// Store the second number in a variable called num2.
let num2 = prompt("Give me another number");

// Create an Alert where the value is the SUM of num1 and num2.
// let sum = Number(num1) + Number(num2);
// alert("The sum is " + sum);

// BONUS: Make a program that can subtract, multiply, and also divide!

let sum = Number(num1) + Number(num2);
let sub = Number(num1) - Number(num2);
let mul = Number(num1) * Number(num2);
let divi = Number(num1) / Number(num2);
alert("The sum is " + sum + ", the subtraction is " + sub + ", the multiplication is " + mul + ", and the division is " + divi);