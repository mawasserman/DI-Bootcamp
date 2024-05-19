// Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

// // DID NOT WORK, saw explanation but left the wrong one here to understand
// let stars = " "
// // for (let i = 0; i < 6; i++){
// //     stars = stars + " *"
// //     console.log(stars);
// // }

// // // nested loops
// while (stars.length < 12) {
//     stars = stars + " *"
//     console.log(stars);
// }
// //not the exercise

// REDOING IT ON 14 OF FEBRUARY

// // ONE LOOP --- works...
// let stars = "";
// for(let i = 0; i < 6; i++){   
//     stars = stars + "* "; 
//     console.log(stars);
// }

// NESTED LOOPS
let stars = "";
for(let o = 1; o<2; o++){
    for(let i = 0; i < 3; i++){   
    stars = stars + "* "; 
    console.log(stars);
    }
    stars = stars + stars;
    console.log(stars);
}

// i give up the nested one