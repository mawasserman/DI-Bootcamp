// Inside fileManager.js, define a module that exports functions for reading and writing files.

// Export functions named readFile and writeFile.
const fs = require('fs');

const readFile = (file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error`);
        } else {
            console.log({file});
        }
    });
};

const writeFile  = (file, content) => {
    fs.writeFile(file, content, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error`);
        } else {
            console.log({file});
        }
    });
};


module.exports = {
    readFile,
    writeFile
}



// In app.js, import the functions from the fileManager.js module.

// Use the imported functions to read the content of the “Hello World.txt” text file and then write to the “Bye World.txt” with the content “Writing to the file”.

// Run app.js and verify that the file reading and writing operations are successful.