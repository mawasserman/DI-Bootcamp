// 🌟 Exercise 1: Timer

// // Part I
// // In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.
// function helloWorld(){
//     alert('Hello World');
// }
// setTimeout(helloWorld, 2000);


// // Part II
// // In your Javascript file, using setTimeout, call a function after 2 seconds.
// // The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// const divContainer = document.getElementById('container');
// const clearButton = document.getElementById('clear');

// function newParagraph(){
//     const paragraph = document.createElement('p');
//     paragraph.textContent = 'Hello World';
//     divContainer.appendChild(paragraph);
    
//     if(divContainer.childElementCount === 5){
//         clearInterval(newParagraphInterval);
//     }
// }

// setTimeout(newParagraph, 2000);


// // Part III
// // In your Javascript file, using setInterval, call a function every 2 seconds.
// // The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// // The interval will be cleared (ie. clearInterval), when the user will click on the button.
// // Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
// const newParagraphInterval = setInterval(newParagraph, 2000);
// clearButton.addEventListener('click', function (){
//     clearInterval(newParagraphInterval);})


// // 🌟 Exercise 2 : Move The Box

// //         <p><button onclick="myMove()">Click Me</button></p>
// //         <div id="container">
// //           <div id="animate"></div>
// //         </div>


// // In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// // The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// // Hint : use clearInterval as soon as the box reaches the right end side of the container
// // Hint : check out the demonstration in the Course Noted named JS Functions
// const animate = document.getElementById('animate');
// const container = document.getElementById('container');
// let position = 0;

// const button = document.querySelector('button');
// button.addEventListener('click', startMoving)
// function startMoving(){setInterval(moveRight, 1)}; //não pode dentro do event listener, tem que estar dentro de uma função para só rodar se chamada

// function moveRight(){
    
//     if(position < (container.offsetWidth-animate.offsetWidth)){
//         position++;
//         animate.style.left = position + 'px';
//     } else {
//         clearInterval(startMoving); //o clearInterval tem que ser chamado a função que chama o setInterval
//     }
// }


// 🌟 Exercise 3: Drag & Drop


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
/
//         <div id="target"></div>
//         <br>
//         <div id="box"></div>


// Copy the code above, to a structured HTML file.
// In your Javascript file add the functionality which will allow you to drag the box and drop it into the target. Check out the Course Notes named DOM animations.

const box = document.getElementById('box');
const target = document.getElementById('target');

box.getAttribute('draggable', 'true');