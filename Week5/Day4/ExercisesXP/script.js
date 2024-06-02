// 🌟 Exercise 1: Timer

//         <style>
//         p {
//           background: yellow;
//           color: red;
//         }
//         </style>
//     </head>
//     <body>
//         <div id="container"></div>
//         <button id="clear">Clear Interval</button>
//    
// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.
function helloWorld(){
    alert('Hello World');
}
setTimeout(helloWorld, 2000);


// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
const divContainer = document.getElementById('container');
const clearButton = document.getElementById('clear');

function newParagraph(){
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Hello World';
    divContainer.appendChild(paragraph);
    
    if(divContainer.childElementCount === 5){
        clearInterval(newParagraphInterval);
    }
}

setTimeout(newParagraph, 2000);


// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
const newParagraphInterval = setInterval(newParagraph, 2000);
clearButton.addEventListener('click', function (){
    clearInterval(newParagraphInterval);})


// 🌟 Exercise 2 : Move The Box
// Instructions
// <!DOCTYPE html>
//     <html>
//     <head>
//         <style>
//         #container {
//           width: 400px;
//           height: 400px;
//           position: relative;
//           background: yellow;
//         }
//         #animate {
//           width: 50px;
//           height: 50px;
//           position: absolute;
//           background-color: red;
//         }
//         </style>
//     </head>
//     <body>
//         <p><button onclick="myMove()">Click Me</button></p>
//         <div id="container">
//           <div id="animate"></div>
//         </div>
//     </body>
//     </html>


// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions

// Exercise2



// 🌟 Exercise 3: Drag & Drop
// Instructions
// <!DOCTYPE html>
//     <html>
//     <head>
//         <style>
//         #target {
//           width: 200px;
//           height: 200px;
//           position: relative;
//           background: yellow;
//         }
//         #box {
//           width: 50px;
//           height: 50px;
//           position: absolute;
//           background-color: red;
//         }
//         </style>
//     </head>
//     <body>
//         <div id="target"></div>
//         <br>
//         <div id="box"></div>
//     </body>
//     </html>


// Copy the code above, to a structured HTML file.
// In your Javascript file add the functionality which will allow you to drag the box and drop it into the target. Check out the Course Notes named DOM animations.