// Instructions
// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
// For example, “The movie is not that bad, I like it”.
let sentence = "Seudat shlishit is not that bad , I like it";
//I had a ploblem when I've put "bad," after removing the comma it worked fine. WHY?

// Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).
let arraySentence = sentence.split(" ");
let wordNot = arraySentence.indexOf("not");

// Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).
let wordBad = arraySentence.indexOf("bad");

// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
if(wordNot < wordBad){
    arraySentence.splice(wordNot, (wordBad-wordNot+1), "good");
    let newSentence = arraySentence.join(' ');
    console.log(newSentence);
}

// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
else{
    console.log(sentence);
}

//   Your string is : 'This dinner is not that bad ! You cook well', 
//   --> the result is : 'This dinner is good ! You cook well'

//   Your string is : 'This movie is not so bad !' 
//   --> the result is : 'This movie is good !'

//   Your string is : 'This dinner is bad !' 
//   --> the result is : 'This dinner is bad !'