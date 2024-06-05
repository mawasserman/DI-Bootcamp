// JS:

// How does a user choose a color?
// How does drawing work? How can you tell when the user is clicking and dragging?
// Hint, look at the JS events mousedown, mouseup, and mouseover.



for(let j=0; j<25; j++) {
    for(let i = 0; i < 60; i++) {
        let div = document.createElement('div');
        div.className = `box ${j+1}${1+i}`;
        document.body.appendChild(div);
    }
}