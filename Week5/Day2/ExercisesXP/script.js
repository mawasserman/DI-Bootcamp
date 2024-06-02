// // 🌟 Exercise 1 : Change The Article

// // Using a DOM property, retrieve the h1 and console.log it.
// let header1 = document.querySelector('h1');
// console.log(header1);

// // Using DOM methods, remove the last paragraph in the <article> tag.
// let lastParagraph = document.querySelector('article').lastElementChild;
// lastParagraph.remove();

// // Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
// let header2 = document.querySelector('h2');
// header2.addEventListener('click', function() { header2.style.backgroundColor = 'red'; });

// // Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
// let header3 = document.querySelector('h3');
// header3.addEventListener('click', function() { header3.style.display = 'none'; });

// // Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// let boldButton = document.createElement('button');
// boldButton.innerHTML = 'Make Bold';
// document.body.appendChild(boldButton);
// let allParagraphs = document.querySelectorAll('p');
// boldButton.addEventListener('click', function() {
//     for (let i = 0; i < allParagraphs.length; i++) {
//         allParagraphs[i].style.fontWeight = 'bold';
//     }
// });

// // BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
// header1.addEventListener('mouseover', function() { header1.style.fontSize = Math.floor(Math.random() * 101) + 'px'; });

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
//Zachary fez usando o copilot... nao acho que ele entendeo o que ele fez.. igual ele nao entendeu o pq o math.random * 100 +1 nunca vai dar zero....

//Skiped

// 🌟 Exercise 2 : Work With Forms
// // Retrieve the form and console.log it.
// const form = document.querySelector('form');
// console.log(form);

// // Retrieve the inputs by their id and console.log them.
// const fName = document.getElementById('fname');
// console.log(fName);
// const lName = document.getElementById('lname');
// console.log(lName);

// // Retrieve the inputs by their name attribute and console.log them.
// const firstName = document.querySelector('input[name="firstname"]');
// console.log(firstName);
// const lastName = document.querySelector('input[name="lastname"]');
// console.log(lastName);


// // When the user submits the form (ie. submit event listener)
// // use event.preventDefault(), why ?
// // To avoid the page from refreshing

// // get the values of the input tags,
// // make sure that they are not empty,
// // create an li per input value,
// // then append them to a the <ul class="usersAnswer"></ul>, below the form.
// // The output should be :

// const submitButton = document.querySelector('input[type="submit"]');
// submitButton.addEventListener('click', function(event) {
//     event.preventDefault();
//     let answerFirst = fname.value;
//     let liFirst = document.createElement('li');
//     liFirst.innerHTML = `User's first name: ${answerFirst}`;
//     let ul = document.querySelector('.usersAnswer');
//     ul.appendChild(liFirst);

//     let answerLast = lname.value;
//     let liLast = document.createElement('li');
//     liLast.innerHTML = `User's last name: ${answerLast}`;
//     ul.appendChild(liLast);
// });

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>


// 🌟 Exercise 3 : Transform The Sentence

// // Declare a global variable named allBoldItems.
// let allBoldItems;

// // Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
// function getBoldItems() {
//     allBoldItems = document.querySelectorAll('strong');
// }
// getBoldItems();
// //why it doesn't work when I put .textContent?

// // Create a function called highlight() that changes the color of all the bold text to blue.
// function highlight() {
//     for (let i = 0; i < allBoldItems.length; i++) {
//         allBoldItems[i].style.color = 'blue';
//     }
// }

// // Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
// function returnItemsToDefault() {
//     for (let i = 0; i < allBoldItems.length; i++) {
//         allBoldItems[i].style.color = 'black';
//     }
// };

// // Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example
// let paragraph = document.querySelector('p');
// paragraph.addEventListener('mouseover', highlight);
// paragraph.addEventListener('mouseout', returnItemsToDefault);

// 🌟 Exercice 4 : Volume Of A Sphere
// Instructions
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:
const sphereVolumeMath = function(radius) {
    radius = Number(radius);
    
    if (radius <= 0 || isNaN(radius)) {
        alert('Please enter a positive number!');
        return;
    }
    let answerVolume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    const volume = document.getElementById('volume');
    volume.value = answerVolume.toFixed(2);
};

let radiusInput = document.getElementById('radius');

const button = document.getElementById('submit');
button.addEventListener('click', function(e) {
    e.preventDefault();
    sphereVolumeMath(radiusInput.value);
});