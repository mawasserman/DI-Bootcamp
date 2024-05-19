// // Exercise 1: Simple If/Else Statement
// // Instructions
// // Create 2 variables, x and y. Each of them should have a different numeric value.
// // Write an if/else statement that checks which number is bigger.
// let x = 34;
// let y = 27;

// if (x > y){
//     console.log("x is the biggest number");
// }else if (x < y){
//     console.log("y is the biggest number");
// }else {
//     console.log("they are the same number");
// }


// // 🌟 Exercise 2: Chihuahua
// // Instructions
// // Create a variable called newDog where it’s value is “Chihuahua”.
// const newDog = "Chihuahua";
// // Check and display how many letters are in newDog.
// console.log(newDog.length);
// // Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
// console.log(newDog.toUpperCase());
// console.log(newDog.toLowerCase());
// // Check if the variable newDog is equal to “Chihuahua”
// // if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// // else, console.log ‘I dont care, I prefer cats’
// if(newDog == "Chihuahua"){
//     console.log("I love Chihuahuas, it’s my favorite dog breed")
// }else{
//     console.log("I dont care, I prefer cats");
// }


// // 🌟 Exercise 3: Even Or Odd
// // Instructions
// // Prompt the user for a number and save it to a variable.
// let userChoice = prompt("'Gimme fuel, 'gimme fire, 'gimme that number which I desire!")
// // Check whether the variable is even or odd.
// // If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// // If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.
// let userNumber = Number(userChoice);

// if((userNumber % 2) == 0){
//     alert(`${userNumber} is an even number`);
// } else {
//     alert(`${userNumber} is an odd number`)
// }

// 🌟 Exercise 4: Group Chat
// Instructions
// Below is an array of users that are online in a group chat.
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

// Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
let usersConnected = users.length;

// If there is no users (the users array is empty), console.log “no one is online”.
if(usersConnected == 0){
    console.log("no one is online");
}

// If there is 1 user, console.log “<name_user> is online”.
else if(usersConnected == 1){
    console.log(`${users[0]} is online`)
}

// If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
else if(usersConnected == 2){
    console.log(`${users[0]} and ${users[1]} are online`)
}

// If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
else {
    console.log(`${users[0]}, ${users[1]} and ${usersConnected - 2} more are online`)
}
