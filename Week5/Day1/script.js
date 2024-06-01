// /*
// DOCUMENTACAO

// --

// DOM EVENTS

// set attribute onevent.. direto na tag do html

// ou pode pegar a tag no js e colocar tudo la direto.. ja que eh onde vai estar a funcao

// onclick
// onload
// onmouseover
// onmouseout
// onunload

// */

// // Exercise 1
// // Create a structured HTML file, and add the code below in the body.

// // In a JS file, write a JavaScript function to add rows to a table. Use the code below as a base

// const buttonAdd = document.querySelector('input');
// const table = document.querySelector('table')

// buttonAdd.onclick = function () {
//     const newRow = document.createElement('tr');
//     const newData1 = document.createElement('td');
//     const newDate2 = document.createElement('td');


    
// // nao acabei....... :( 
// }

// /*

// quando usa o .addEventListener() eh o mesmo nome, mas sem o onBLABLABLA

// aparentemente 'e igual o .onBLABLABLA... nao sei se usa diferente em alguma situacao
// */

// // Exercise 2
// // Add a few event listener to the button. The event listeners should change the style of the button

// const button2 = document.getElementById('jsstyle');

// button2.addEventListener('click', changeStyle);


// You
// // Exercise 2
// // Add a few event listener to the button. The event listeners should change the style of the button

// const button2 = document.getElementById('jsstyle');

// button2.addEventListener(click, changeStyle());

// changeStyle(){
//     button2.style.backgroundColor = 'red'
// }
// ChatGPT
// ChatGPT
// It looks like there are a couple of syntax errors in your code. Let's fix them:

// javascript
// Copy code
// // Exercise 2
// // Add a few event listener to the button. The event listeners should change the style of the button

// const button2 = document.getElementById('jsstyle');

// button2.addEventListener('click', changeStyle); // Fixed the event listener syntax

// function changeStyle(){
//     button2.style.backgroundColor = 'red';
// }

// // o meu nao funcionou

// /*

// EVENT PROPAGATION

// vai do mais deep para o mais fora... 

// .stoppropagation()
// .preventdefault()

// descobrir melhor a diferenca deles...
// */

// // Exercise 3
// // Add a click event listener to the div

// // Add a few event listeners to the button. With at least one click event. The event listeners should change the style of the button

// // Check how the propagation works and try to prevent it

// document.querySelector('div').addEventListener('click', propagationEX);

// function propagation(){
//     document.style.backgroundColor = 'red';

// }

/*
FORMS MANIPULATION

change vs. input... nao entendi...


*/

// Exercise
// Create a structured HTML file, and add the code below in the body.

// In a JS file, write a JavaScript function to get the values of First and Last name of the following form



function getvalue(e){
    e.preventDefault();
    const inputS = document.querySelectorAll('input');

    for(let i = 0; i< 2; i++){
        console.log(inputS[i].value);
    }    
}

document.querySelector('form').addEventListener('submit', getvalue);

/*
RESOLUCAO DO DOVID

 document.getElementById("form1").addEv
document.getElementById("form1").addEventListener("submit", function(event){
    alert(event.target.fname.value);
 });


*/



/*
VALIDATION

e ter certeza de que o que vc ta pedindo pro usuario eh o que ele vai dar

tentar usar mais o built in validation do html antes de comecar a usar no js 
.. eh mais facil e mais recomendado....
tem librarys para checar varias dessas coisas com js, entao eu nao entendi pq o html e mais recomendado...

ele ja quer comecar no homework e eu aceito se ele me deixar ir pra casa

*/