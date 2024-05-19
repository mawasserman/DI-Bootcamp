//Comparing
// console.log(Boolean(1 === "1"));

// console.log(Boolean(1 !== "1"));

// console.log(Boolean(1 === 1 && 1 === 2));

// console.log(Boolean(1 !==2 || 1 === 1));

//Working With Numbers
// let x = 1;
// let y = 2;
// x++;
// x--;
// console.log(x);

// x += y;

// console.log(x);

//Conditionals :)

//If true we will console.log
// let age = 20;

// if (age > 18) {
//   console.log("You are a big human");
// }

//If false we will do nothing

// let age = 18;

// if (age > 18) {
//   console.log("You are a big human");
// }

//If...Else

// let age = 18;

// if (age > 18) {
//   console.log("You are a big human");
// } else {
//   console.log("You are younger or equal to 18");
// }

//Else If....

// let age = "string";

// if (age > 18) {
//   console.log("You are a big human");
// } else if (age < 18) {
//   console.log("You are a small human");
// } else if (typeof age !== "number") {
//   console.log("Excuse me , thats not an age");
// } else {
//   console.log("You are a medium human");
// }

// let username = prompt("What is your username?");

// if (username == "Bob") {
//   console.log("Welcome Bob");
// } else if (username == "Sam") {
//   console.log("Welcome Sam");
// } else {
//   console.log("Welcome new user");
// }

//Switch Case

// let fruit ="Oranges";

// switch (fruit) {
//   case "Oranges":
//     console.log("Oranges are $0.59 per kilo");
//     break;
//   case "Mangoes":
//   case "Papayas":
//     console.log("Mangoes and Papayas are $2.79 a kilo");
//     break;
//   default:
//     console.log("Sorry we are out of " + fruit);
// }

//(array)
// let colors=["red","blue","green"]

//Objects

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "Blue",
// };

// console.log("The persons name is " + person.firstName + " " + person.lastName);

// console.log(person["firstName"]);

//Adding/Changing/deleting Object Properties

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   children: {
//     eldest: "Sam",
//     middle: "Rivka",
//   },
//   favoriteFoods: ["pizza", "burgers", "totrillas"],
// };

// person.eyeColor = "blue";

// delete person.lastName;
// console.log(person);
// person.favoriteFoods[2] = "banana";

// console.log(person);

//Exercise 1 Objects

// let user = {
//   username: "Dani123",
//   password: "1234",
// };

// let user1 = {
//   username: "321dani",
//   password: "1234",
// };

// let database = [user, user1];

// console.log(database[0].username);
// console.log(database[1].username);

let newsfeed = [
  { username: "DANI", timeline: "1997-2023" },
  { username: "sarah", timeline: "1997-2023" },
  { username: "greg", timeline: "1997-2023" },
];

console.log(newsfeed);
// console.log(newsfeed[0].username);
// console.log(newsfeed[1].username);
// console.log(newsfeed[2].username);
