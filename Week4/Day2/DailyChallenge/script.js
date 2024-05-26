// Instructions
// Prompt the user for several words (separated by commas).
let words = prompt(`Please enter words separated by commas.`);
// Put the words into an array.
let wordsArray = words.split(",");
// Console.log the words one per line, in a rectangular frame as seen below.

// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// stars and words


// Hint
// The number of stars that wraps the sentence, must depend on the length of the longest word.


// Requirements
// To do this challenge you only need Javascript(No HTML and no CSS)

/*Daniil usou .trim para tirar os espaços em branco
 ele usou tbm .map para percorrer o array e retornar o tamanho de cada palavra
 .reduce para retornar o maior tamanho 
 */