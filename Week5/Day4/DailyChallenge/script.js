// Instructions
// Daily Challenge : Show Only The Letters
// Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)

// Hint: use one of the following events to remove any character that is not a letter

// keyup event
// or keypress event
// or keydown event
// or input event

// Hint : Check out keycodes in Javascript or Regular Expressions

const input = document.querySelector('input');
const warning = document.getElementById('warning');
const paragraph = document.querySelector('p');
const strong = document.querySelector('strong');
paragraph.style.display = 'none';

input.addEventListener('input', onlyLetters); 

function onlyLetters(event){
    const value = input.value;
    const filteredValue = value.replace(/[^A-Za-z]/g, '');

    if (value !== filteredValue) {
        warning.style.display = 'block';
        input.value = filteredValue;

    } else {
        paragraph.style.display = 'none';
    }
};