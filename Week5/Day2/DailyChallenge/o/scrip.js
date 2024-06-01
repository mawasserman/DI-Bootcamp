// Instructions
// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.

// Follow these steps :

// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// // Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.


const form = document.getElementById("libform");
const libbutton = document.getElementById("libbutton");
const generatedSto = document.getElementById("story");

//the story was taken from ChatGPT, but all the code is mine
libbutton.addEventListener('click', generateStory);

function generateStory(event) {
    event.preventDefault();

    const noun = document.getElementById("noun").value.trim();
    const adjective = document.getElementById("adjective").value.trim();
    const person = document.getElementById("person").value.trim();
    const verb = document.getElementById("verb").value.trim();
    const place = document.getElementById("place").value.trim();

    generatedSto.textContent = `Once upon a time, in a far-off land, there lived a ${adjective} ${person}. This ${person} was known throughout the kingdom for their ${verb}ing skills. Every day, they would ${verb} at ${place}, spreading joy and laughter wherever they went. One day, while ${verb}ing in ${place}, they stumbled upon a mysterious ${noun}. Curious and intrigued, they decided to investigate. Little did they know, this ${noun} held the key to unlocking a great adventure. With determination in their heart, they embarked on a journey to uncover the secrets of the ${noun} and save the kingdom from impending doom.`;
}


