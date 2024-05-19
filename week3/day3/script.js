/*
// Conditionals

// Exercise 1
// Make a keyless car!

// This car will only let you drive if you are over 18. Make it do the following:

// Using prompt() and alert(), ask a user for their age.
let age = prompt("How old are you?")

// IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
if (age < 18){
    alert("Sorry, you are too young to drive this car. Poweroff");
}

// IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
else if (age == 18){
   alert("Congratulations on your first year of driving. Enjoy the ride!"); 
}

// IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"
else {
    alert("Powering On. Enjoy the ride!");
}
*/

// // Exercise 2
// // Write as comments the steps of the resolution of this piece of code

// // Guess what will be the result before checking it
// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Too small' );
//     break;
//   case 4:
//     alert( 'Exactly!' ); // This one
//     break;
//   case 5:
//     alert( 'Too large' );
//     break;
//   default:
//     alert( "I don't know such values" );
// }

// // Exercise 3
// // Write as comments the steps of the resolution of this piece of code

// // Guess what will be the result before checking it
// let a = 2 + 2;

// switch (a) {
//   case 4:
//     alert('Right!'); // This
//     break;

//   case 3: // (*) grouped two cases
//   case 5:
//     alert('Wrong!');
//     alert("Why don't you take a math class?");
//     break;

//   default:
//     alert('The result is strange. Really.');
// }

// Introduction to objects
// // Exercise 1
// Create a stuctured html file linked to a JS file

// // 1. Create an object that has properties "username" and "password". Fill those values in with strings.
// const user = {
//     username: "Charlinho",
//     password: "Batata"
// };

// // 2. Create an array which contains the object you have made above and name the array "database".
// const database = [user]
// console.log(database)
// // 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
// const newsfeed = [
//     {
//         username: "Charlinho",
//         timeline: "Eu gosto mais de batata e gosto mais de estudar"
//     },
//     {
//         username: "Boça",
//         timeline: "Mêo"
//     },
//     {
//         username: "Detonator",
//         timeline: "Mostra pra eles Bloodhammer"
//     }
// ]
// console.log(newsfeed)