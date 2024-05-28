// Instructions

// In this exercise you need to console.log the lyrics of our own 99 Bottles of Beer song.

// ==============================
// Example
// ==============================

// 99 bottles of beer on the wall
// 99 bottles of beer
// Take 1 down, pass it around
// 98 bottles of beer on the wall

// 98 bottles of beer on the wall
// 98 bottles of beer
// Take 2 down, pass them around
// 96 bottles of beer on the wall

// 96 bottles of beer on the wall
// 96 bottles of beer
// Take 3 down, pass them around
// 93 bottles of beer on the wall

// ect …

// ==============================



// Prompt the user for a number to begin counting down bottles.
let bottlesOnWall = Number(prompt("How many bottles of beer on the wall?"));

// In the song, everytime a bottle drops,
// the subtracted number should go up by 1.
// For example,
let i = 1;
while(bottlesOnWall > 0){
    if(bottlesOnWall === 1){
        console.log(`1 bottle of beer on the wall
        1 bottle of beer
        Take 1 down, pass it around
        no bottle of beer on the wall`);
        break;
    } else if(bottlesOnWall === 2){
        console.log(`2 bottles of beer on the wall
        2 bottles of beer
        Take 1 down, pass it around
        1 bottle of beer on the wall`);
        bottlesOnWall--;
    }else if(bottlesOnWall <= i && !(bottlesOnWall === 1)){
        console.log(`${bottlesOnWall} bottles of beer on the wall
        ${bottlesOnWall} bottles of beer
        Take ${bottlesOnWall} down, pass it around
        no bottle of beer on the wall`);
        break;
    }else {
        console.log(`${bottlesOnWall} bottles of beer on the wall
        ${bottlesOnWall} bottles of beer
        Take ${i} down, pass them around
        ${bottlesOnWall - i} bottles of beer on the wall`);
        bottlesOnWall -= i;
        i ++;
    }  

}
    

//     We start the song at 99 bottles
//     -> Take _1_ down, pass it around
//     -> we have now 98 bottles

//     -> then, Take _2_ down, pass them around
//     -> we have now 96 bottles

//     -> then, Take _3_ down, pass them around
//     -> we have now 93 bottles

//     ... ect


// 3. The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.


// 4. Note : Make sure you get the grammar correct.

// For 1 bottle, you pass “it” around.
// For more than one bottle, you pass “them” around.
