import chalk from 'chalk';

export const colorfulMessage = function(message) {
    return chalk.bgRed.bold(message);
}

// console.log(colorfulMessage('Hello world!'));