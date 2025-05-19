// # Instructions
// # 1st daily challenge
// # Create two functions. Each function should return a promise.
// # The first function called makeAllCaps(), takes an array of words as an argument
// # If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// # else, reject the promise with a reason.
const makeAllCaps = (arr) => new Promise((resolve, reject) => {
    if (arr.every(word => typeof word === 'string')) {
        resolve(arr.map(word => word.toUpperCase()));
    }
    else {
        reject("Not all elements are strings");
    }

});

// # The second function called sortWords(), takes an array of words uppercased as an argument
// # If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// # else, reject the promise with a reason.

const sortWords = (arr) => new Promise((resolve, reject) => {
    if (arr.length > 4) {
        resolve (arr.sort())
    }
    else {
        reject("Array length is less than 4")
    }
})


// # Test:

// # //in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

// # //in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

// # //in this example, you should see in the console, 
// # // the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))


    //   2nd daily challenge
      const morse = `{
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "(": "-.--.",
        ")": "-.--.-"
      }`
    //   Create three functions. The two first functions should return a promise..
      
    //   The first function is named toJs():
    //   this function converts the morse json string provided above to a morse javascript object.
    //   if the morse javascript object is empty, throw an error (use reject)
    //   else return the morse javascript object (use resolve)

    const toJs = () => new Promise((resolve, reject) => {
        const morseObj = JSON.parse(morse);
        if (Object.keys(morseObj).length === 0) {
            reject("Morse object is empty");
        } else {
            resolve(morseObj);
        }
    })

    toJs()
        .then(result => console.log("Resolved:", result))
        .catch(err => console.log("Rejected:", err));
    
    //   The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
      
    //   This function asks the user for a word or a sentence.
    //   if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
    //   else return an array with the morse translation of the user’s word.
    //   if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
    //   if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object
    const toMorse = (morseJS) => new Promise ((resolve, reject) => {
        const sentence = prompt("Gimme fuel, give me fire, give me the sentence which I desire").toLowerCase().replace(/\s/g, '').split("");

        const invalidChar = sentence.find(letter => !morseJS[letter]);

        if (invalidChar) {
            reject(`Character "${invalidChar}" is not in the Morse object`);
        } else {
            const morseTranslation = sentence.map(letter => morseJS[letter]);
            resolve(morseTranslation);  
        }

    })

    //   The third function called joinWords(morseTranslation), takes one argument: the morse translation array
      
    //   this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

    const joinWords = (morseTranslation) => {
        const h2 = document.getElementById("h2");
        const morseContainer = document.createElement("div");
        morseContainer.innerHTML = morseTranslation.join("<br>");
        h2.appendChild(morseContainer);
    }
      
    //   Chain the three functions.
    //   Example:
    //   "Hello" gives you
    //   ....
    //   .
    //   .-..
    //   .-..
    //   ---
      
    toJs()
        .then(toMorse)
        .then(result => {
            console.log("Morse Translation:", result);
            return result; 
        })
        .then(joinWords)
        .catch(error => console.error("Error:", error));