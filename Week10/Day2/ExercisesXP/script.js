// Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.
const compareToTen = (num) => {
    return new Promise((resolve, reject) => {
    if (num <= 10) {
        resolve(`The number ${num} is less than or equal to 10`)
    }
    else {
            reject(`The number ${num} is greater than 10`)
        }
});
};

// //In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

// //In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))


// 🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success")
    }, 4000)
});

promise.then (result => console.log(result));

// 🌟 Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

Promise.resolve(3)
  .then(result => console.log(result));

Promise.reject("Boo!")
  .catch(error => console.log(error)); 

// Exercise 4: quizz - not mandatory
// Follow this tutorial and do the quizz until the page called “a few tricks with promises”.

