
// Instructions
// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
// The output should be:


// output

const form = document.querySelector('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value; 
    const lastName = document.getElementById('lastName').value;

    const data = {
        name: name,
        lastName: lastName
    };

    const jsonData = JSON.stringify(data);
    result.textContent = jsonData;

    form.reset(); 
});