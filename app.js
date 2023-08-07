const readLine = require('readline');

let rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("what is your name", (name) => {
    console.log("you entered: "+name);
    rl.close();
})

rl.on("close", () => {
   console.log("Interface is closed"); 
});