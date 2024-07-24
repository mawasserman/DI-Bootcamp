import fs from "fs";

export const readFile = function() {
    const fileData = fs.readFileSync("./files/files-data.txt", "utf-8");
    console.log(fileData); 
    console.log(`
The file has been read`);
};