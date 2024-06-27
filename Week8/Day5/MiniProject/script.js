let quotesArray = [
    {id: 0, author: "Thiago Iziel", quote: "Ahá!!!"},
    {id: 1, author: "Uri Gabriel", quote: "Eu achei um pouquinho bacana demais!"},
    {id: 2, author: "Alona Noa", quote: "Papai... Papai... BO!"},
    {id: 3, author: "Marcella Ariella", quote: "É pra ser sincero ou é pra agradar?"},
    {id: 4, author: "Marcella Ariella", quote: "Eu vou fazer na minha velocidade"},
    {id: 5, author: "Uri Gabriel", quote: "Ela quis, ela gosta"},
    {id: 6, author: "Uri Gabriel", quote: "Shel ONA!"},
    {id: 7, author: "Thiago Iziel", quote: "Ai veio um meteoro PUUUUUUUUSHHH"},
    {id: 8, author: "Eva", quote: "Uo ô ô"},
    {id: 9, author: "Netta", quote: "iiih"}
];

let indexNow;
function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotesArray.length);
    if (randomIndex === indexNow) {
        generateQuote();
    } else {
        let randomQuote = quotesArray[randomIndex]; 
        let quoteElement = document.getElementById("quoteDisplay");
        quoteElement.textContent = randomQuote.quote;
        let authorElement = document.getElementById("quoteAuthor");
        authorElement.textContent = randomQuote.author;
        indexNow = randomIndex;
    }
};

//part 1 DONE

