// Exercise 1 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

//>>>>>>MY GUESS : ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange'] ---- got correct B)

// ------2------
// const country = "USA";
// console.log([...country]);

//>>>>>>MY GUESS : [USA] ---- got wrong : [ 'U', 'S', 'A' ] B(
//spread operator will separate strings in an array of characters

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);

//>>>>>>MY GUESS : (I did not even know what to guess)
//the answer is [undefined, undefined]  



// 🌟 Exercise 2 : Employees
// Instructions
// Using this array:

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]
let welcomeStudents = users.map((user, index) => `Hello ${user.firstName}`);
console.log(welcomeStudents);

// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.
let test = users.filter(user => user.role === 'Full Stack Resident'); 
let fullStackResidents = test.map((test) => `${test.firstName} ${test.lastName}`);
//before i did the filter on the fullStackResidents, but I was getting an object, so I decided to map it to get the full name in an array
console.log(fullStackResidents);

// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
//So.... It is basically the same as the previous question, but I will map it to get only the last name and add here my first try of the filter
let fullStackResidentsLastName = users.filter(user => user.role === 'Full Stack Resident').map((user) => user.lastName);
console.log(fullStackResidentsLastName);

//previous of the ex. 2: let fullStackResidents = users.filter(user => user.role === 'Full Stack Resident'); 



// 🌟 Exercise 3 : Star Wars
// Instructions
// Using this array const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.


// 🌟 Exercise 4 : Employees #2
// Instructions
// Using this object:

// const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                {name: "Liam", course: "Computer Science", isPassed: false}, 
//                {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                {name: "Marco", course: "Robotics", isPassed: true}, 
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                {name: "Jamie", course: "Big Data", isPassed: false}];
// Using the filter() method, create a new array, containing the students that passed the course.
// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)