// JS:

// How does a user choose a color?
// How does drawing work? How can you tell when the user is clicking and dragging?
// Hint, look at the JS events mousedown, mouseup, and mouseover.

let selectedColor = 'blue'
const board = document.getElementById('board');
for(let j=0; j<25; j++) {
    for(let i = 0; i < 60; i++) {
        let div = document.createElement('div');
        div.className = `box ${j+1}${1+i}`;
        board.appendChild(div);

        div.addEventListener('click', function() {
            div.style.backgroundColor = selectedColor;
        });
        board.appendChild(div);
    }
}

const colors = document.querySelectorAll('.colors');

for (let i = 0; i < colors.length; i++) {
    colors[i].style.backgroundColor = colors[i].id;
    
    //select drawing color
    colors[i].addEventListener('click', function() {
        selectedColor = colors[i].id;
    });
}
const boxes = document.querySelectorAll('.box');
function clearBoard() {
    boxes.forEach(box => {
        box.style.backgroundColor = 'white';
    });
}


