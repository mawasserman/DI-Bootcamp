// let b = 3, d = b, u = b;

// const tree = ++d * d*b * b++ +
//  + --d+ + +b-- +
//  + +d*b+ +
//  u

// console.log(tree); // 163

// // hint:
// 4 * 4 * 3 * 3 +
// 3 + 4 +
// 3 * 3 +
// 3

/** scope */
// let x = 5;
// // let x = 6;
// {
//     let x = 6;
//     console.log(x);
// }
// console.log(x);

// for(var i = 0; i < 5; i++){

// }
// console.log(i);

// let x;
// x = 7;
// x = 10;
// const y = 5;

// function y(){
//     let x = 5;
//     console.log(x);
// }
// y();
// console.log(x);

/** default parameters */
// function sum(x = 6, y = 7) {
//     // if (y === undefined) {
//     //     y = 7;
//     // }
//     return x + y;
// }
// let result = sum(undefined,2);
// console.log(result);

/** template string */
// let name = 'John';
// let last = 'Doe';
// let greeting = 'Hello ' + name + ' ' + last + '!';
// console.log(greeting);

// let greeting2 = `Hello ${name}
//  ${last}!`;
// console.log(greeting2);

/** functions */
// let result = sum(4, 7);
// console.log(result);

// function checkVal(x) {
//   if (x > 5) {
//     return x;
//   }
//   return 1;
// }
// function sum(x, y) {
//   x = checkVal(x);
//   return x + y;
// }

// const sum2 = function (x, y) {
//   return x + y;
// };
// console.log(sum2(4, 7));

/** arrow function */
// const sum3 = (x, y) => {
//   // return x + y;
// };

// const sum4 = (x, y) => x + y;

/** conditional operator - ternary */
// let x = 5;
// if (x > 5) {
//   return "yes";
// } else {
//   return "no";
// }
// let result1 = x > 5 ? "yes" : "no";

/**
Create an arrow function to check the year given by the user
should get the year as parameter
If the year is after 2000, you should display 
"You are in the 21st century", 
else you should display "You live in the Middle Age"
*/
// const checkYear = a => a > 2000 ? "yes" : "No"

/**
 * Using arrow function and ternary operator create a calculator
 * that returns the result of the calculus
 * depending on the operator : +, - , * , /
 */

// const calculator = (a, b, operator) =>
//   operator === "+" ? a + b :
//   operator === "-" ? a - b :
//   operator === "*" ? a * b :
//   operator === "/" ? (b !== 0 ? a / b : "Division by zero") :
//   "Invalid operator";

// console.log(calculator(4, 2, "+"));
// console.log(calculator(4, 2, "-"));
// console.log(calculator(4, 2, "*"));
// console.log(calculator(4, 0, "/"));
// console.log(calculator(4, 2, "/"));
// console.log(calculator(4, 2, "a"));

/** loop */
// let arr = [1, 2, 3, 4, 5];
// const arrLength = arr.length
// for (let i = 6; i < arr.length - 2; i = i + 5) {
// console.log(arr[i]);
// }

// for (let x in arr) {
// console.log(arr[x]);
// }

// for (let x of arr) {
// console.log(x);
// }

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// for (let x in obj) {
//   // console.log(x, obj[x]);
// }

/** forEach */
// let arr = [1, 2, 3, 4, 5];
// arr.forEach((element, indx) => {
//   // console.log(element, indx);
// });

/** create an new arr */
// let arr2 = [];
// arr.forEach((element, i, arr2) => {
//   // arr2.push(element * 2);
//   arr2[i] = element * 2;
// });
// console.log(arr);

/**
 * const numbers = [10,11,12,15,20,25,30,35,40,45,50];
 * using the forEach method, display only the elemnts in the
 * even index
 */
// const numbers = [10, 11, 12, 15, 20, 25, 30, 35, 40, 45, 50];
// numbers.forEach((element, i) => {
//   if (i % 2 === 0) {
//     console.log(element);
//   }
// });

/**
 * const myArr = [1, 2, 3, 4, 5, 6, 7, 8];
 * if one of the element eqaul to 5, return true elae retun false
 */
// const myArr = [1, 2, 5, 4, 5, 6, 7, 8];
// myArr.forEach((element) => {
//   if (element === 5) {
//     return true;
//   }
//   return false;
// });

//** some */
// myArr.some((element) => {
//   return element === 5;
// });

/**
 * const words = ["wow","hey","bye"];
 * Check if at least one element of the array
 * starts with the letter 'h'
 */

// const words = ["wow", "hey", "bye"];
// words.some((element) => {
//   return element.startsWith("h");
// });

/**
 * all elemnts are greater than 0 return true else return false
 */
const myArr = [1, 2, 5, 4, 5, 6, 7, 8];

let result = !myArr.some((e) => e < 0);
console.log(result);

function checkArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      return false;
    }
  }
  return true;
}

/** every */
myArr.every((element) => {
  return element > 0;
});

/**
 * const words = ["hello","hey","hola"];
 * Check if all elements of the array start with the letter 'h'
 */