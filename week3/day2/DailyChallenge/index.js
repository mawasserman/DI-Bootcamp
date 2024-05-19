// Instructions


// Exercise 1:
// Using this array :
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

// Remove Banana from the array.
// To whom it may concern: Slice wasn't working to me AT ALL. I tried putting fruits = fruits.slice (1,4); and it didn't work... I was a while trying to get rid of the Banana and creating a new group was the only way I was able to
nobanana = fruits.slice(1);
console.log(nobanana)

// Sort the array in alphabetical order.
nobanana.sort();

// Add “Kiwi” to the end of the array.
nobanana.push("Kiwi");

// Remove “Apples” from the array. Don’t use the same method as in part 1.
nobanana.shift()

// Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
nobanana.reverse()

// At the end you should see this outcome:
// ["Kiwi", "Oranges", "Blueberries"]
console.log(nobanana);


// Exercise 2:
// Using this array :
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

// Access and then console.log “Oranges”.
console.log(moreFruits[1][1][0]);