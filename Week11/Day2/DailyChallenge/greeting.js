// In greeting.js, define a function called greet that takes a name as a parameter and returns a personalized greeting message.

// Export the greet function using the Node.js module system.

const greet = function(name) {
    return `Hello ${name} from the other side
I must've called a thousand times
To tell you I'm sorry for everything that I've done
But when I call, you never seem to be home
Hello!`;
}

module.exports = {
    greet
}