// 🌟 Exercise 1 : Find The Sum
// // Instructions
// // Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
// ((a, b) => { console.log(a + b) ;})(11, 13)

// // 🌟 Exercise 2 : Kg And Grams
// // Instructions
// // Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)


// // First, use function declaration and invoke it.
// function kgToGrams(kg) {
//     console.log(`${kg} kg is ${kg * 1000} gr`);
// }
// kgToGrams(2);

// // Then, use function expression and invoke it.
// let kgToGrams2 = function(kg) {
//     console.log(`${kg} kg is ${kg * 1000} gr`);
// }
// kgToGrams2(2);

// // Write in a one line comment, the difference between function declaration and function expression.
// //Declaration is hoisted, so it can be called before the declaration, but it slows the loading speed.

// // Finally, use a one line arrow function and invoke it.
// ((kg) => {console.log(`${kg} kg is ${kg * 1000} gr`);})(2)


// // 🌟 Exercise 3 : Fortune Teller
// // Instructions
// // Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// // The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

// ((childrenNumber, partnerName, geoLocation, jobTitle) => {
//     let div = document.createElement('div');
//     div.innerHTML = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${childrenNumber} kids.`;
//     document.body.appendChild(div);
// })(4, 'Thiago', 'Petach Tikva', 'Web Developer')

// 🌟 Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// // Create a Bootstrap Navbar in your HTML file. 
// //DONE
// // In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// // The function should add a div in the nabvar, displaying the name of the user and his profile picture.
// ((userName) => {
//     let navBar = document.getElementById('navbarNav');
//     let userDiv = document.createElement('div');
//     let userImg = document.createElement('img');
//     userImg.setAttribute('src', 'https://www.johnlennon.com/wp-content/uploads/2022/05/JL.jpg');
//     userImg.setAttribute('width', '50');
//     userImg.style.float = 'right'; //it is not working! but the rest does, so I will not waste time on it.
//     userDiv.innerText = userName;
//     userDiv.appendChild(userImg);
//     navBar.appendChild(userDiv);
// })('John') 

// 🌟 Exercise 5 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.