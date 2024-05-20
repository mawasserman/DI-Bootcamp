// Exercise 1 : The World Translator
// Instructions
// Hint: Use Switch Case

// Ask the user which language they speak.
let userLanguage = prompt("Which language do you speak?");
// Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”
let lowUserLanguage = userLanguage.toLowerCase();

// Create a few conditions :
switch (lowUserLanguage) {
// If the user speaks French : display “Bonjour”
    case "french":
        console.log("Bonjour");
        break;
// If the user speaks English : display “Hello”
    case "english":
        console.log("Hello");
        break;
// If the user speaks Hebrew : display “Shalom”
    case "hebrew":
        console.log("Shalom");
        break;
// If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’
    default:
        console.log("01110011 01101111 01110010 01110010 01111001");
}

// Exercise 2 : The Grade Assigner
// Instructions
// Ask the user for their grade.
let userGrade = prompt("What is your grade?");

// If the grade is bigger than 90, console.log “A”
if(userGrade > 90){
    console.log("A");
}  
// If the grade is between 80 and 90 (included), console.log “B”
else if(userGrade > 80 && userGrade <= 90){
    console.log("B");
}
// If the grade is between 70(included) and 80 (included), console.log “C”
else if(userGrade >= 70 && userGrade <= 80){
    console.log("C");
}
// If the grade is lower than 70, console.log “D”
else{
    console.log("D");
}

// Exercise 3 : Verbing
// Instructions
// Prompt the user for a string. It must be a verb.
let userVerb = prompt("Please give me a verb");

// If the length of the string is at least 3 and the string doesn’t end with “ing”, add “ing” to the end of the string.
if(userVerb.length >=3){
    if(userVerb.indexOf("ing") == (userVerb.length -3)){
        console.log(userVerb + 'ly');
    }
    else {
        console.log(userVerb + 'ing')
    }
        // If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
}// If the length of the string is less than 3, leave it unchanged.

else{
    console.log(userVerb)
}
// Example:

//   The string is : "read" , your program should console.log : "reading"
//   The string is : "swimming", your program should console.log : "swimmingly"
//   The string is : "go" your program should console.log : "go"