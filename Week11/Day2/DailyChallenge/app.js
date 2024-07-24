
// In app.js, require the greeting.js module and use the greet function to greet a user.

// Run app.js using Node.js and see the greeting message.
//Task 1
import { greet }  from './greeting.js';

console.log(greet('Adele'));	

//Task 2
import { colorfulMessage } from './colorful-message.js';

console.log(colorfulMessage('Hello world!'));
console.log(colorfulMessage('Hola!'));

//Task 3
import fs from "fs";
