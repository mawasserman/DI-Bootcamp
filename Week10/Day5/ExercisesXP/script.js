const personName = document.querySelector('#personName');
const personDetails = document.querySelector('#personDetails');
const loadButton = document.querySelector('#loadButton');

loadButton.addEventListener('click', () => {


const randomNumber = Math.floor(Math.random() * 83) + 1;

fetch (`https://www.swapi.tech/api/people/${randomNumber}/`)
    .then((response) => {console.log(response);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        const person = data.result.properties;
        console.log(person);
        personName.textContent = person.name;
        personDetails.innerHTML = `Height: ${person.height} cm<br>Mass: ${person.mass} kg<br>Hair Color: ${person.hair_color}`;
    
    })
    .catch((error) => {
        console.error(`Error: ${error}`);
        personName.textContent = 'Error fetching data';
        personDetails.textContent = '';
    });
}
);