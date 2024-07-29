// In app.js, import the array of person objects from the data.js module.
import { people } from './data.js';
// Write a function that calculates and prints the average age of all the persons in the array.
function averageAge(people){
    let sum = 0;
    for (let person of people){
        sum += person.age;
    }
    console.log((sum / people.length).toFixed(2)) ;
}
averageAge(people);  

// Use the imported array and the average age function in app.js.

// Run app.js and confirm that the average age is correctly calculated and displayed.