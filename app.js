const fs = require("fs");

let textIn = fs.readFileSync('./files/input.txt', 'utf-8');

textIn = `Contents read from file is: ${textIn}. \n date: ${new Date()}`;

fs.writeFileSync('./files/output.txt', textIn);