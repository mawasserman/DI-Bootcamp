// // 🌟 Exercise 1 : Users

// // Using Javascript:
// // Retrieve the div and console.log it
// const divContainer = document.getElementById('container');
// console.log(divContainer);

// // Change the name “Pete” to “Richard”.
// const peteToRichard = document.querySelectorAll('li')[1];
// // console.log(peteToRichard);
// peteToRichard.innerText = 'Richard';

// // Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
// const sarahToDelete = document.querySelectorAll('li')[3];
// sarahToDelete.remove();

// // Change each first name of the two <ul>'s to your name. (Hint : use a loop)
// const arrUl = document.querySelectorAll('ul');
// console.log(arrUl);

// for(let i =0; i < arrUl.length; i++){
//     arrUl[i].firstElementChild.innerText = 'Marcella';
// }

// // Bonus - Using Javascript:
// // Add a class called student_list to both of the <ul>'s.
// for(let i =0; i < arrUl.length; i++){
//     arrUl[i].classList.add("student_list");
// }

// // Add the classes university and attendance to the first <ul>.
// arrUl[0].classList.add("university", "attendance");

// // 🌟 Exercise 2 : Users And Style

// // Using Javascript:
// // Add a “light blue” background color and some padding to the <div>.
// const divExercice2 = document.querySelector('div');
// divExercice2.style.backgroundColor = 'lightblue';
// divExercice2.style.padding = '10px';

// // Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
// const arrLis = document.querySelectorAll('li');
// const hideJohn = arrLis[0]; //because I want the first
// hideJohn.style.display = 'none';

// // Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
// const peteBorder = arrLis[1];
// peteBorder.style.border = '1px solid black';

// // Change the font size of the whole body.
// document.body.style.fontSize = '60px';

// // Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
// if(divExercice2.style.backgroundColor === 'lightblue'){
//     alert(`Hello ${hideJohn.innerText} and ${peteBorder.innerText}`);
// }


// 🌟 Exercise 3 : Change The Navbar

// // Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
// const divExercice3 = document.querySelector('div');
// divExercice3.setAttribute('id', 'socialNetworkNavigation');
// console.log(divExercice3); //first time forgot to put id inside the quotes and it didn't work

// // We are going to add a new <li> to the <ul>.
// // First, create a new <li> tag (use the createElement method).
// const newLi = document.createElement('li');

// // Create a new text node with “Logout” as its specified text.
// const textNode = document.createTextNode('Logout');

// // Append the text node to the newly created list node (<li>).
// newLi.appendChild(textNode);

// // Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
// const ulExercise3 = divExercice3.firstElementChild;
// ulExercise3.appendChild(newLi);

// // Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
// console.log(ulExercise3.firstElementChild.textContent);
// console.log(ulExercise3.lastElementChild.textContent);


// 🌟 Exercise 4 : My Book List

// The point of this challenge is to display a list of two books on your browser.

// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// DONE

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

// DONE

// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).

// doing

// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

const allBooks = [
    {title: 'The Housemaid',
     author: 'Freida McFadden',
     image: 'https://m.media-amazon.com/images/I/51cHVq9fX1L.jpg',
     alreadyRead : true },
    {title: 'The Will of the Many',
    author: 'James Islington',
    image: 'https://m.media-amazon.com/images/I/81Li56NA8yL._AC_UF894,1000_QL80_.jpg',
    alreadyRead : false }
];

const tableBooks = document.createElement('table');


// const rowTitles = document.createElement('tr');
// const rowAuthors = document.createElement('tr');
// const rowImages = document.createElement('tr');
// const thTi //I gave up... I will try to do it with a loop

for(let i=0; i < allBooks.length; i++){
    const row = document.createElement('tr');
    const title = document.createElement('td');
    const author = document.createElement('td');
    const image = document.createElement('td');

    title.innerText = allBooks[i].title;
    author.innerText = allBooks[i].author;
    image.innerHTML = `<img src=${allBooks[i].image} width="100px">`;

    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(image);
    tableBooks.appendChild(row);
    
    if(allBooks[i].alreadyRead){
        title.style.color = 'red';
        author.style.color = 'red';
    }
}

const divExercice4 = document.getElementsByClassName('listBooks')[0];
divExercice4.appendChild(tableBooks);