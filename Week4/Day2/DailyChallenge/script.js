// Prompt the user for several words (separated by commas).
let sentence = prompt("Give me several words (separated by commas)")
// Put the words into an array.
let sentenceArray = sentence.split(',');
// Console.log the words one per line, in a rectangular frame as seen below.
let lengthOfLongest = 0;
for (let item of sentenceArray) {
  const wordLength = item.length;
  if (wordLength > lengthOfLongest) {
  lengthOfLongest = wordLength
  }
}

const starsUpDown = '*'.repeat(lengthOfLongest + 4);

function updown() {
  console.log(starsUpDown)
}

updown();

sentenceArray.forEach(item => {
let difference = lengthOfLongest - item.length;
let space = ' '.repeat(difference);
console.log("* "+ item + space + " *")
});

updown();

// function length(sentenceArray){
//   let wordLength = item.length();{
//     if (longestWord <item.length()){
//       longestWord = item.length()
//     }
//   }
//   return wordLength;
// }
// length(sentenceArray)
// console.log(wordLength)
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// stars and words


// Hint
// The number of stars that wraps the sentence, must depend on the length of the longest word.